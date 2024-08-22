import { QuizzState } from "../../store";

export function goToNextQuestion(state: QuizzState) {
    if (state.game.currentQuestion.index < state.game.questions.length) {
        state.game.currentQuestion.index += 1;
    }
    return state
}