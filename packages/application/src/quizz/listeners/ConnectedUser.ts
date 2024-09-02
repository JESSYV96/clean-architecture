import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApi } from '../type'

export const userConnectedListener = createAsyncThunk<
  any,
  undefined, // params
  ThunkApi
>('multiplayer/userConnected', async (_, thunkApi) => {
  console.log('use case userConnectedListener')
  return thunkApi.extra.services.multiplayerSocket.userConnected()
})
