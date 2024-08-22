import { PayloadAction } from "@reduxjs/toolkit";
import { QuizzState } from "../../store";
import { Difficulty } from "@jessy/domain";

export function selectDifficulty(state: QuizzState, action: PayloadAction<Difficulty>) {
    state.settings.difficulty = action.payload;
    return state
}