import { PropsWithChildren } from "react"
import { View, StyleSheet } from "react-native"


function DefautLayout({ children }: PropsWithChildren) {
    return (
        <View style={styles.layout}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        paddingHorizontal: 16,
        height: "100%"
    },
});


export default DefautLayout