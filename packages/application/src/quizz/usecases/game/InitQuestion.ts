import { PayloadAction } from '@reduxjs/toolkit'
import { QuizzState } from '../../type'

export function selectQuestionMode(state: QuizzState, action: PayloadAction<boolean>) {
  state.game.hasAnswered = action.payload
  return state
}
