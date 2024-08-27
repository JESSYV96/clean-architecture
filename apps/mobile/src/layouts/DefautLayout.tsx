import { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function DefautLayout({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.layout}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingHorizontal: 16
  }
})

export default DefautLayout
