import { Difficulty, Question, QuizzPort } from '@jessy/domain'

export class QuizzRepository implements QuizzPort {
    constructor() { }

    async getQuestions(difficulty = Difficulty.None): Promise<Question[]> {

        const response = await fetch(`https://opentdb.com/api.php?amount=3&category=31${difficulty ? `&difficulty=${difficulty}` : ""}`)
        const data = await response.json();

        return data.results.map((question: any): Question => {
            return {
                label: question.question,
                type: question.type === "boolean" ? "boolean" : "multiple_choice",
                difficulty: question.difficulty,
                theme: question.category,
                correctAnswer: question.correct_answer,
                incorrectAnswers: question.incorrect_answers
            }
        })
    }
}