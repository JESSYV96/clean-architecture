import { StyleSheet, Pressable, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Themes from '../../../constants/Themes'

interface CircularButtonProps extends PropsWithChildren {
    color?: string
    size?: number
    onPress?: () => void
}

const CircularButton = ({ children, size = 44, color = Themes.colors.primary, onPress }: CircularButtonProps) => {
    return (
        <Pressable
            onPress={onPress} style={{
                ...styles.button,
                height: size,
                width: size,
                borderRadius: size / 2,
                backgroundColor: color
            }}>
            {children}
        </Pressable>
    )
}

export default CircularButton

const styles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    }
})