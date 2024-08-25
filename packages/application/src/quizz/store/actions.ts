import { goToNextQuestion, initQuestion, initQuizz, removeIncorrectAnswers } from "../usecases";
import { selectAnswer } from "../usecases/game/SelectAnswer";
import { selectQuestion } from "../usecases/game/SelectQuestion";
import { skipQuestion } from "../usecases/game/SkipQuestion";
import { shuffleAnswers } from "../usecases/game/SuffleAnswers";
import { validateAnswer } from "../usecases/game/ValidateAnswer";

// SETTINGS
import { selectDifficulty, selectEffect } from "../usecases/settings";

export default {
    selectAnswer,
    selectQuestion,
    shuffleAnswers,
    validateAnswer,
    initQuizz,
    selectDifficulty,
    selectEffect,
    initQuestion,
    goToNextQuestion,
    skipQuestion,
    removeIncorrectAnswers
}