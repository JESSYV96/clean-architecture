import { PayloadAction } from "@reduxjs/toolkit";
import { QuizzState } from "../../store/slice";

export function selectAnswer(state: QuizzState, action: PayloadAction<string | null>) {
    state.game.selectedAnswer = action.payload;
    return state
}