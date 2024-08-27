import { PayloadAction } from '@reduxjs/toolkit'
import { QuizzState } from '../../type'

export function shuffleAnswers(state: QuizzState, action: PayloadAction<{ randomNumber: number }>) {
  const shuffledAnswers =
    [
      ...state.game.currentQuestion?.question.incorrectAnswers,
      state.game.currentQuestion?.question.correctAnswer
    ].sort(() => action.payload.randomNumber - 0.5) || []

  state.game.currentAnswers = shuffledAnswers

  return state
}
