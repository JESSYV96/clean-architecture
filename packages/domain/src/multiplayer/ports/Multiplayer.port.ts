import { Room } from '../types'

export interface MultiplayerPort {
  connectionToMultiplayerSocket: () => void
  createQuizRoom: () => Promise<Room>
  getActiveRooms: () => Promise<Room[]>
  joinRoom: (roomName: string) => Promise<Room>
  userConnected(): Promise<any>
}
