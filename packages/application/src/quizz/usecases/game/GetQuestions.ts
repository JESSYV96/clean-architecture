import { Difficulty, Question } from '@jessy/domain'
import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit'
import { QuizDependencies } from '../../../store'
import { ThunkApi } from '../../type'

interface GetQuestionsPayload {
  difficulty: Difficulty
}

export const getQuestions = createAsyncThunk<
  Question[],
  GetQuestionsPayload, // params
  ThunkApi
>('quizz/fetchQuestions', async ({ difficulty }, thunkApi) => {
  const questions = await thunkApi.extra.services.quizzService.getQuestions(difficulty)
  return questions || []
})
