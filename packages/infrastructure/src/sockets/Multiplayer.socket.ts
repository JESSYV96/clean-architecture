import { MultiplayerPort, MultiplayerEvent, Room } from '@jessy/domain'
import { io } from 'socket.io-client'

export class MultiplayerSocket implements MultiplayerPort {
  socket = io('ws://localhost:8082')

  connectionToMultiplayerSocket() {
    this.socket.connect()
  }

  async createQuizRoom(): Promise<Room> {
    return this.socket.emitWithAck(MultiplayerEvent.CreateNewRoom, 'ROOM_TEST')
  }

  async getActiveRooms(): Promise<Room[]> {
    return this.socket.emitWithAck(MultiplayerEvent.GetActiveRooms)
  }

  async joinRoom(roomName: string): Promise<Room> {
    return this.socket.emitWithAck(MultiplayerEvent.JoinRoom, roomName)
  }

  async userConnected(): Promise<any> {
    return this.socket.listeners('user-connected')
  }
}
