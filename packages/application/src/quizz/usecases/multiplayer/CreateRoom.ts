import { Room } from '@jessy/domain'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApi } from '../../type'

interface CreateRoomPayload {}

export const createRoom = createAsyncThunk<
  Room,
  undefined, // params
  ThunkApi
>('multiplayer/createRoom', async (_, thunkApi) => {
  thunkApi.extra.services.multiplayerSocket.connectionToMultiplayerSocket()
  return thunkApi.extra.services.multiplayerSocket.createQuizRoom()
})
