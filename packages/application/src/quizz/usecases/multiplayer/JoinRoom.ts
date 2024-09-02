import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApi } from '../../type'
import { Room } from '@jessy/domain'

interface JoinRoomPayload {
  roomName: string
}

export const joinRoom = createAsyncThunk<
  Room,
  JoinRoomPayload, // params
  ThunkApi
>('multiplayer/joinRoom', async ({ roomName }, thunkApi) => {
  return thunkApi.extra.services.multiplayerSocket.joinRoom(roomName)
})
