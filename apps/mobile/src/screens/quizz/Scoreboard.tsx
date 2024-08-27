import { appSelectors, appActions } from '@jessy/application'
import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import DefautLayout from '../../layouts/DefautLayout'
import { useAppDispatch } from '../../configs/store'
import AppButton from '../../components/themes/buttons/Button'
import AppText from '../../components/themes/Text'
import Themes from '../../constants/Themes'

const ScoreboardScreen = ({ navigation }: any) => {
  const { scoreSelector } = appSelectors
  const { initQuizz } = appActions

  const dispatch = useAppDispatch()

  const score = useSelector(scoreSelector)

  const goToHome = () => {
    dispatch(initQuizz())
    navigation.replace('Home')
  }

  return (
    <DefautLayout>
      <View
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: Themes.spacing.sm
        }}
      >
        <AppText>Félicitations, vous avez terminer le quizz !</AppText>
        <Text>
          Vous avez obtenu <AppText>{score}</AppText> points.
        </Text>
        <AppButton width={230} onPress={goToHome}>
          <AppText>Accueil</AppText>
        </AppButton>
      </View>
    </DefautLayout>
  )
}

export default ScoreboardScreen
