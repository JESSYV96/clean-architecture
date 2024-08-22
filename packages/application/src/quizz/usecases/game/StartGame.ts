import { initialState, QuizzState } from "../../store";

export function initQuizz(state: QuizzState) {
    state.game = { ...initialState.game }
    return state
}