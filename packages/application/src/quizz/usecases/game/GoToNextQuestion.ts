import { PayloadAction } from '@reduxjs/toolkit'
import { QuizzState } from '../../type'

export function goToNextQuestion(state: QuizzState) {
  if (state.game.currentQuestion.index < state.game.questions.length) {
    state.game.currentQuestion.index += 1
  }
}
