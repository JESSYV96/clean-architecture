import { Errors, Question } from "@jessy/domain";
import type { QuizzState } from "../../store";
import { PayloadAction } from "@reduxjs/toolkit";

export function removeIncorrectAnswers(state: QuizzState, action: PayloadAction<{ question: Question, randomNumber: number }>) {
    if (state.game.jokers.fiftyFifty.remaining === 0) {
        state.game.jokers.fiftyFifty.error = Errors.JOKER_FIFTY_FIFTY_ALREADY_USED
        return
    }

    if (action.payload.question.type !== "multiple_choice") {
        state.game.jokers.fiftyFifty.error = Errors.JOKER_FIFTY_FIFTY_WRONG_TYPE
        return
    }
    const incorrectAnswers = action.payload.question.incorrectAnswers || []

    const incorrectAnswersRemoved = [...incorrectAnswers].splice(Math.floor(action.payload.randomNumber * incorrectAnswers.length), 1)

    state.game.currentAnswers = [action.payload.question.correctAnswer, ...incorrectAnswersRemoved].sort(() => action.payload.randomNumber - 0.5) || []
    state.game.jokers.fiftyFifty.remaining -= 1

}