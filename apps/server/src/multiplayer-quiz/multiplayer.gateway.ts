import { Room } from '@jessy/domain';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8082, {
  cors: {
    origin: '*',
  },
})
export class MultiplayerQuizGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor() {}

  handleConnection(client: Socket) {
    console.log('New user', client.id);
    client.leave(client.id);
  }

  @SubscribeMessage('create-new-room')
  createRoom(
    @MessageBody() roomName: string,
    @ConnectedSocket() client: Socket,
  ): Room {
    console.log('Room created');
    client.join(roomName);
    const room = this.getRoom(roomName);
    return {
      userAmount: room.size,
      name: roomName,
      createdAt: new Date(),
      adminId: client.id,
    };
  }

  @SubscribeMessage('get-active-rooms')
  getActiveRooms(@ConnectedSocket() client: Socket): Room[] {
    return [...this.server.sockets.adapter.rooms].map((room) => {
      return {
        name: room[0],
        userAmount: room[1].size,
      };
    });
  }

  @SubscribeMessage('join-room')
  async joinRoom(
    @MessageBody() roomName: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(roomName);
    const room = this.getRoom(roomName);
    await client.broadcast
      .to(roomName)
      .emitWithAck('user-connected', { userId: client.id, room });
    return {
      userAmount: room.size,
      name: roomName,
    };
  }

  private getRoom(roomName: string) {
    return this.server.sockets.adapter.rooms.get(roomName);
  }
}
