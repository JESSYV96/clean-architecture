import { expect, it } from 'vitest'
import { quizzSlice, appActions, initialState } from '../../type'
import { Errors } from '@jessy/domain'

it('should be able to use this joker', () => {
  const state = { ...initialState }
  const newState = quizzSlice.reducer(state, appActions.skipQuestion())

  expect(newState.game.jokers.skipQuestion.remaining).toEqual(0)
  expect(newState.game.jokers.skipQuestion.error).toEqual(null)
})

it('should not be able to use this joker if it not remaining this joker', async () => {
  const state = { ...initialState }
  const editedState = quizzSlice.reducer(state, appActions.skipQuestion())
  const finalState = quizzSlice.reducer(editedState, appActions.skipQuestion())

  expect(finalState.game.jokers.skipQuestion.remaining).toEqual(0)
  expect(finalState.game.jokers.skipQuestion.error).toEqual(Errors.JOKER_SKIP_QUESTION_ALREADY_USED)
})
