import * as Rtk from '@reduxjs/toolkit'
import { quizzSlice } from './quizz/type/slice'
import { MultiplayerPort, QuizzPort } from '@jessy/domain'
export interface QuizDependencies {
  quizzService: QuizzPort
  multiplayerSocket: MultiplayerPort
}

export const quizzStore = (services: QuizDependencies) => {
  return Rtk.configureStore({
    reducer: {
      quizz: quizzSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            services
          }
        }
      })
  })
}
