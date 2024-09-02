import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Themes from '../constants/Themes'
import DefautLayout from '../layouts/DefautLayout'
import AppText from '../components/themes/Text'
import AppButton from '../components/themes/buttons/Button'
import CircularButton from '../components/themes/buttons/CircularButton'

interface HomeScreenProps {
  navigation: any // Need to find navigation type
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <DefautLayout>
      <View style={styles.header}>
        <CircularButton onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={26} color="white" />
        </CircularButton>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Quizz App</Text>
        <Text style={styles.subtitle}>Apprenez en passant du bon temps</Text>
      </View>
      <View style={styles.footer}>
        <AppButton onPress={() => navigation.replace('Quizz')} color={Themes.colors.primary}>
          <AppText color="white">Jouer</AppText>
        </AppButton>
        <AppButton
          onPress={() => navigation.replace('MultiplayerHome')}
          color={Themes.colors.secondary}
        >
          <AppText color="white">Multijoueur</AppText>
        </AppButton>
      </View>
    </DefautLayout>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Lemon-Milk',
    fontSize: 32,
    color: Themes.colors.primary
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'Lemon-Milk',
    fontSize: 16
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    gap: 12
  },
  footer: {
    marginBottom: 20
  }
})

export default HomeScreen
