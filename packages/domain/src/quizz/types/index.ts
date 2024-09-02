import { Errors } from '../enums'
import { Difficulty } from '../enums/Difficulty'

export type Answer = string

export type Question = {
  label: string
  type: 'multiple_choice' | 'boolean'
  difficulty: Difficulty
  theme: string
  incorrectAnswers: Answer[]
  correctAnswer: Answer
}

export type Joker = {
  remaining: number
  error: Errors
}
