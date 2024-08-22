import type { Difficulty } from "../enums";
import type { Question } from "../types";

export interface QuizzPort {
    getQuestions: (difficulty: Difficulty) => Promise<Question[]>
}