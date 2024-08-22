import { PayloadAction } from "@reduxjs/toolkit";
import { QuizzState } from "../../store/slice";

export function initQuestion(state: QuizzState, action: PayloadAction<boolean>) {
    state.game.hasAnswered = action.payload;
    return state
}