import { MULTIPLAYER_QUIZ_REQUIRED_NUMBER, Room } from '@jessy/domain'
import { QuizzState } from '../type'

const roomSelector = (state: QuizzState): Room | null => {
  return state.multiplayer.room
}

const hasRequiredPlayerSelector = (state: QuizzState): boolean => {
  return state.multiplayer.room?.userAmount === MULTIPLAYER_QUIZ_REQUIRED_NUMBER
}

const activeRoomsSelector = (state: QuizzState): Room[] => {
  return state.multiplayer.activeRooms
}

export default {
  roomSelector,
  hasRequiredPlayerSelector,
  activeRoomsSelector
}
