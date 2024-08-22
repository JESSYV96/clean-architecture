import { PayloadAction } from "@reduxjs/toolkit";
import { Question } from "@jessy/domain";
import { QuizzState } from "../../store/slice";

export function selectQuestion(state: QuizzState, action: PayloadAction<Question>) {
    state.game.currentQuestion.question = { ...action.payload };
    return state
}