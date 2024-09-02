import { StyleSheet, Text, Pressable, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import Themes from '../../constants/Themes'
import AppText from '../themes/Text'
import { MULTIPLAYER_QUIZ_REQUIRED_NUMBER, Room } from '@jessy/domain'
import AppButton from '../themes/buttons/Button'
import { useSelector } from 'react-redux'
import { appSelectors } from '@jessy/application'

interface RoomItemProps {
  room: Room
  onPress: () => void
}

const RoomItem = ({ room, onPress }: RoomItemProps) => {
  const { hasRequiredPlayerSelector } = appSelectors
  const hasRequiredPlayer = useSelector(hasRequiredPlayerSelector)
  console.log(hasRequiredPlayer)
  return (
    <>
      <AppText size={12}>{room.name}</AppText>
      <AppText size={12}>
        {room.userAmount}/{MULTIPLAYER_QUIZ_REQUIRED_NUMBER}
      </AppText>

      <AppButton onPress={onPress} disabled={hasRequiredPlayer}>
        {hasRequiredPlayer ? <AppText>Complet</AppText> : <Text> Rejoindre la partie</Text>}
      </AppButton>
    </>
  )
}

export default RoomItem

const styles = StyleSheet.create({
  button: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Themes.colors.secondary,
    color: 'white'
  },
  text: {
    fontSize: 14
  }
})
