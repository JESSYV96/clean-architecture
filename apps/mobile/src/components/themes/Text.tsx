import { PropsWithChildren } from "react"
import { StyleSheet, Text } from "react-native"
import Themes from "../../constants/Themes"

interface AppTextProps extends PropsWithChildren {
    color?: string
    size?: number
}
function AppText({ children, color = Themes.colors.text, size = 16 }: AppTextProps) {
    return (
        <Text style={{ ...styles.text, color, fontSize: size }}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Lemon-Milk",
        textAlign: "center",
    }
})

export default AppText