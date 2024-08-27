import type { PayloadAction } from '@reduxjs/toolkit'
import type { QuizzState } from '../../type'
import type { Effect } from '@jessy/domain'

export function selectEffect(state: QuizzState, action: PayloadAction<Effect>) {
  state.settings.effect = action.payload
  return state
}
