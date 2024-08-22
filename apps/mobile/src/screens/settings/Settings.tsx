import { StyleSheet, Text, View } from 'react-native';
import DefautLayout from '../../layouts/DefautLayout';
import { Picker } from '@react-native-picker/picker';
import { Difficulty, Effect } from "@jessy/domain"
import { useSelector } from 'react-redux';
import { appActions, appSelectors } from '@jessy/application';
import { useAppDispatch } from '../../configs/store';

const SettingsScreen = () => {
    const { difficultySelector, effectSelector } = appSelectors
    const { selectDifficulty, selectEffect } = appActions;

    const dispatch = useAppDispatch();

    const difficuly = useSelector(difficultySelector);
    const effect = useSelector(effectSelector);

    return (
        <DefautLayout>
            <View>
                <Text>Difficulté :</Text>
                <Picker
                    selectedValue={difficuly}
                    onValueChange={(itemValue) => {
                        dispatch(selectDifficulty(itemValue))
                    }}>
                    {Object.entries(Difficulty).map((difficulty) => (
                        <Picker.Item key={difficulty[0]} label={difficulty[0]} value={difficulty[1]} />
                    ))}
                </Picker>
            </View>

            <View>
                <Text>Effet :</Text>
                <Picker
                    selectedValue={effect}
                    onValueChange={(itemValue) => {
                        dispatch(selectEffect(itemValue))
                    }}>
                    {Object.entries(Effect).map((effect) => (
                        <Picker.Item key={effect[0]} label={effect[0]} value={effect[1]} />
                    ))}
                </Picker>
            </View>
        </DefautLayout>
    )
}

export default SettingsScreen