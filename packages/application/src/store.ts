export interface QuizzService {
  quizzService: QuizzPort
}


export const quizzStore = (services: QuizzService) => {
  return Rtk.configureStore({
    reducer: {
      quizz: quizzSlice.reducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            services,
          }
        }
      })
  })
}