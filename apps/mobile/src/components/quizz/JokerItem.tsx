import { StyleSheet, Text, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'
import Themes from '../../constants/Themes'
import AppText from '../themes/Text'
import { Icon } from '@expo/vector-icons/build/createIconSet';

interface JokerItemProps {
    label: string
    icon: React.JSX.Element
    onPress: () => void
}

const JokerItem = ({ label, icon, onPress }: JokerItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            {icon}
            <AppText color='white' size={12}>{label}</AppText>
        </Pressable>
    )
}

export default JokerItem

const styles = StyleSheet.create({
    button: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        padding: 5,
        borderRadius: 10,
        backgroundColor: Themes.colors.secondary,
        color: "white"
    },
    text: {
        fontSize: 14
    }
})