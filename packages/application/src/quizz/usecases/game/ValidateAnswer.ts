import type { Answer } from "@jessy/domain";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { QuizzState } from "../../store/slice";

export function validateAnswer(state: QuizzState, action: PayloadAction<Answer>) {
    const questionAnswer = state.game.currentQuestion.question.correctAnswer;
    state.game.hasAnswered = true;

    // answering
    if (questionAnswer === action.payload) {
        state.game.score += 10
    } else {
        if (state.game.score >= 5) {
            state.game.score -= 5
        }
    }

    return state
}