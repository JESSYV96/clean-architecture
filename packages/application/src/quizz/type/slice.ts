import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Answer, Difficulty, Effect, Errors, Joker, Question, Room } from '@jessy/domain'
import { getQuestions } from '../usecases/game/GetQuestions'
import selectors from './selectors'
import multiplayerSelectors from '../selectors/multiplayer'
import { selectDifficulty, selectEffect } from '../usecases/settings'
import {
  selectQuestionMode,
  initQuizz,
  goToNextQuestion,
  removeIncorrectAnswers,
  selectAnswer,
  selectQuestion,
  shuffleAnswers,
  skipQuestion,
  validateAnswer
} from '../usecases/game'
import { QuizDependencies } from '../../store'
import { createRoom } from '../usecases/multiplayer/CreateRoom'
import { getActiveRooms, joinRoom } from '../usecases'
import { userConnectedListener } from '../listeners'

export interface ThunkApi {
  extra: {
    services: QuizDependencies
  }
}
export type QuizzState = {
  game: {
    score: number
    questions: Question[]
    isQuizLoading: boolean
    currentQuestion: {
      index: number
      question: Question | null
    }
    currentAnswers: string[]
    selectedAnswer: Answer | null
    hasAnswered: boolean
    jokers: {
      skipQuestion: Joker
      fiftyFifty: Joker
    }
  }
  multiplayer: {
    room: Room | null
    activeRooms: Room[]
  }
  settings: {
    difficulty: Difficulty
    effect: Effect
  }
}

export const initialState: QuizzState = {
  game: {
    questions: [],
    isQuizLoading: false,
    currentQuestion: {
      index: 0,
      question: null
    },
    currentAnswers: [],
    selectedAnswer: null,
    hasAnswered: false,
    score: 0,
    jokers: {
      skipQuestion: {
        remaining: 1,
        error: null
      },
      fiftyFifty: {
        remaining: 1,
        error: null
      }
    }
  },
  multiplayer: {
    room: null,
    activeRooms: []
  },
  settings: {
    difficulty: Difficulty.None,
    effect: Effect.None
  }
}

export const quizzSlice = createSlice({
  name: 'quizz',
  initialState,
  selectors: {
    ...selectors,
    ...multiplayerSelectors
  },
  reducers: {
    selectAnswer,
    selectQuestion,
    shuffleAnswers,
    validateAnswer,
    selectDifficulty,
    selectEffect,
    initQuizz(state: QuizzState) {
      state.game = { ...initialState.game }
    },
    selectQuestionMode(state: QuizzState, action: PayloadAction<boolean>) {
      state.game.hasAnswered = action.payload
      return state
    },
    removeIncorrectAnswers(
      state: QuizzState,
      action: PayloadAction<{ question: Question; randomNumber: number }>
    ) {
      if (state.game.jokers.fiftyFifty.remaining === 0) {
        state.game.jokers.fiftyFifty.error = Errors.JOKER_FIFTY_FIFTY_ALREADY_USED
        return
      }

      if (action.payload.question.type !== 'multiple_choice') {
        state.game.jokers.fiftyFifty.error = Errors.JOKER_FIFTY_FIFTY_WRONG_TYPE
        return
      }
      const incorrectAnswers = action.payload.question.incorrectAnswers || []

      const incorrectAnswersRemoved = [...incorrectAnswers].splice(
        Math.floor(action.payload.randomNumber * incorrectAnswers.length),
        1
      )

      state.game.currentAnswers =
        [action.payload.question.correctAnswer, ...incorrectAnswersRemoved].sort(
          () => action.payload.randomNumber - 0.5
        ) || []
      state.game.jokers.fiftyFifty.remaining -= 1
    },
    skipQuestion(state: QuizzState) {
      if (state.game.jokers.skipQuestion.remaining < 1) {
        state.game.jokers.skipQuestion.error = Errors.JOKER_SKIP_QUESTION_ALREADY_USED
      } else {
        state.game.jokers.skipQuestion.remaining -= 1
        goToNextQuestion(state)
      }
    },
    goToNextQuestion(state: QuizzState) {
      if (state.game.currentQuestion.index < state.game.questions.length) {
        state.game.currentQuestion.index += 1
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.game.questions = action.payload
      state.game.isQuizLoading = false
      return state
    })
    builder.addCase(getQuestions.pending, (state, action) => {
      state.game.isQuizLoading = true
      return state
    })
    builder.addCase(createRoom.fulfilled, (state, action) => {
      state.multiplayer.room = { ...action.payload }
    })
    builder.addCase(getActiveRooms.fulfilled, (state, action) => {
      state.multiplayer.activeRooms = [...action.payload]
    })
    builder.addCase(joinRoom.fulfilled, (state, action) => {
      state.multiplayer.room = action.payload
    })
    builder.addCase(userConnectedListener.fulfilled, (state, action) => {
      console.log(action.payload, 'userConnectedListener')
      // state.multiplayer.room = action.payload
    })
  }
})

export const appSelectors = quizzSlice.selectors
export const appActions = quizzSlice.actions
