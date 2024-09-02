import { View, Text } from 'react-native'
import AppButton from 'src/components/themes/buttons/Button'
import AppText from 'src/components/themes/Text'
import { MultiplayerSocket } from '@jessy/infrastructure'
import { useAppDispatch } from 'src/configs/store'
import { useEffect } from 'react'
import { createRoom } from '@jessy/application'

const MultiplayerHomeScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch()

  return (
    <View>
      <Text>MultiplayerHomeScreen</Text>
      <AppButton
        width={230}
        onPress={() => {
          dispatch(createRoom())
          navigation.navigate('MultiplayerSettings')
        }}
      >
        <AppText>Créer une partie</AppText>
      </AppButton>
      <AppButton
        width={230}
        onPress={() => {
          navigation.navigate('MultiplayerRooms')
        }}
      >
        <AppText>rejoindre une partie</AppText>
      </AppButton>
    </View>
  )
}

export default MultiplayerHomeScreen
