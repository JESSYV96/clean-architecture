import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApi } from '../../type'
import { Room } from '@jessy/domain'

export const getActiveRooms = createAsyncThunk<
  Room[],
  undefined, // params
  ThunkApi
>('multiplayer/getActiveRooms', async (_, thunkApi) => {
  thunkApi.extra.services.multiplayerSocket.connectionToMultiplayerSocket()
  return thunkApi.extra.services.multiplayerSocket.getActiveRooms()
})
