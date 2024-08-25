import { expect, it } from "vitest";
import { appActions, initialState, quizzSlice } from "../../store";
import { Difficulty, Errors, Question } from "@jessy/domain";

const question: Question = {
    type: "multiple_choice",
    label: "De quel couleur est Pikachu ?",
    correctAnswer: "Jaune",
    incorrectAnswers: ["Bleu", "Orange", "Rouge"],
    difficulty: Difficulty.Easy,
    theme: "Pokémon"
}

const booleanQuestion: Question = {
    type: "boolean",
    label: "Pikachu est un pokémon de couleur rouge",
    correctAnswer: "False",
    incorrectAnswers: ["True"],
    difficulty: Difficulty.Easy,
    theme: "Pokémon"
}

it('should be able to use this only for multiple answers', () => {
    const state = { ...initialState }
    const newState = quizzSlice.reducer(state, appActions.removeIncorrectAnswers({ question: booleanQuestion, randomNumber: Math.random() }))

    expect(newState.game.jokers.fiftyFifty.error).toEqual(Errors.JOKER_FIFTY_FIFTY_WRONG_TYPE)
})

it('should not be able to used this joker if it does not remain joker', () => {
    const state = { ...initialState }
    const newState = quizzSlice.reducer(state, appActions.removeIncorrectAnswers({ question, randomNumber: Math.random() }))
    const finalState = quizzSlice.reducer(newState, appActions.removeIncorrectAnswers({ question, randomNumber: Math.random() }))

    expect(finalState.game.jokers.fiftyFifty.remaining).toEqual(0)
    expect(finalState.game.jokers.fiftyFifty.error).toEqual(Errors.JOKER_FIFTY_FIFTY_ALREADY_USED)
})

it('should be able to used this joker if it remain joker', () => {
    const state = { ...initialState }
    const newState = quizzSlice.reducer(state, appActions.removeIncorrectAnswers({ question, randomNumber: Math.random() }))

    expect(newState.game.jokers.fiftyFifty.remaining).toEqual(0)
    expect(newState.game.jokers.fiftyFifty.error).toEqual(null)
})

it("should remove half answers (only incorrect answers)", () => {
    const state = { ...initialState };
    const newState = quizzSlice.reducer(state, appActions.removeIncorrectAnswers({ question, randomNumber: Math.random() }))
    const answers = newState.game.currentAnswers

    expect(answers).toContain(question.correctAnswer)
})