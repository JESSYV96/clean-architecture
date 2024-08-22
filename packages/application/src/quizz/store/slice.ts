import { createSlice } from "@reduxjs/toolkit";
import { Answer, Difficulty, Effect, Question } from "@jessy/domain"
import { getQuestions } from "../usecases/game/GetQuestions";
import selectors from "./selectors";
import actions from "./actions";

export type QuizzState = {
    game: {
        score: number
        questions: Question[]
        currentQuestion: {
            index: number,
            question: Question | null
        }
        currentAnswers: string[]
        selectedAnswer: Answer | null
        hasAnswered: boolean
    }
    settings: {
        difficulty: Difficulty
        effect: Effect
    }
}

export const initialState: QuizzState = {
    game: {
        questions: [],
        currentQuestion: {
            index: 0,
            question: null
        },
        currentAnswers: [],
        selectedAnswer: null,
        hasAnswered: false,
        score: 0,
    },
    settings: {
        difficulty: Difficulty.None,
        effect: Effect.None
    }
}

export const quizzSlice = createSlice({
    name: 'quizz',
    initialState,
    selectors,
    reducers: actions,
    extraReducers: (builder) => {
        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.game.questions = action.payload
            return state;
        })
    }
})
export const appSelectors = quizzSlice.selectors;
export const appActions = quizzSlice.actions;
