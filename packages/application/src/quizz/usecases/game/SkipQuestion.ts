import { Errors } from "@jessy/domain";
import { QuizzState } from "../../store";
import { goToNextQuestion } from "./GoToNextQuestion";

export function skipQuestion(state: QuizzState) {
    if (state.game.jokers.skipQuestion.remaining < 1) {
        state.game.jokers.skipQuestion.error = Errors.JOKER_SKIP_QUESTION_ALREADY_USED
    } else {
        state.game.jokers.skipQuestion.remaining -= 1
        goToNextQuestion(state)
    }
}
