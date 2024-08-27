import { PayloadAction } from '@reduxjs/toolkit'
import { QuizzState, initialState } from '../../type'

export function initQuizz(state: QuizzState, action: PayloadAction<undefined>) {
  state.game = { ...initialState.game }
}
