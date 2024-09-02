import { useEffect } from 'react'
import { View, Text } from 'react-native'
import AppButton from 'src/components/themes/buttons/Button'
import AppText from 'src/components/themes/Text'
import { appSelectors, userConnectedListener } from '@jessy/application'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/configs/store'

const MultiplayerSettingsScreen = () => {
  const { hasRequiredPlayerSelector, roomSelector } = appSelectors

  const hasRequiredPlayer = useSelector(hasRequiredPlayerSelector)
  const room = useSelector(roomSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (room) {
      dispatch(userConnectedListener())
    }
  }, [room])

  return room ? (
    <View>
      <Text>{room?.userAmount}</Text>
      <Text>{room?.name}</Text>
      <AppButton width={230} disabled={!hasRequiredPlayer} onPress={() => {}}>
        {hasRequiredPlayer ? (
          <AppText>Lancer la partie</AppText>
        ) : (
          <AppText>En attente de votre adversaire...</AppText>
        )}
      </AppButton>
    </View>
  ) : (
    <View></View>
  )
}

export default MultiplayerSettingsScreen
