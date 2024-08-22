import { PropsWithChildren } from "react"
import { DimensionValue, Pressable, StyleSheet } from "react-native"
import Themes from "../../../constants/Themes"

interface AppButtonProps extends PropsWithChildren {
    color?: string
    width?: DimensionValue
    disabled?: boolean
    onPress?: () => void
}


function AppButton({ children, color = Themes.colors.primary, width = "100%", disabled = false, onPress }: AppButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={{ ...styles.button, backgroundColor: color, width }}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
    }
})

export default AppButton