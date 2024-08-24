import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import JokerItem from './JokerItem'
import AppButton from '../themes/buttons/Button'
import AppText from '../themes/Text'
import AnswerItem from './AnswerItem'
import Themes from '../../constants/Themes'
import { useSelector } from 'react-redux'
import { appActions, appSelectors } from '@jessy/application'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useAppDispatch } from '../../configs/store'
import { Answer } from '@jessy/domain'
import { decodeHtmlEntities } from '../../utils/helpers'

const QuestionCard = () => {

  const {
    currentQuestionSelector,
    answersSelector,
    selectedAnswerSelector,
    hasAnsweredSelector
  } = appSelectors

  const { validateAnswer, goToNextQuestion } = appActions;

  const answers = useSelector(answersSelector);
  const currentQuestion = useSelector(currentQuestionSelector);
  const selectedAnswer = useSelector(selectedAnswerSelector);
  const hasAnsweredQuestion = useSelector(hasAnsweredSelector);


  const dispatch = useAppDispatch();

  // usecase ??
  const shouldCheckAnswer = (answer: Answer) => {
    return selectedAnswer === answer;
  }

  return (
    <View style={styles.questionCard}>
      <View style={styles.questionContainer}>
        {currentQuestion && <AppText color='black'>{decodeHtmlEntities(currentQuestion.label)}</AppText>}
      </View>
      <View style={{ flex: 1 }}>
        {answers && answers.length && answers.map((answer, index) => (
          <AnswerItem
            key={index}
            text={answer}
            letter={String.fromCharCode(65 + index)}
            shouldCheckAnswer={shouldCheckAnswer(answer)}
          />
        ))}
        {!hasAnsweredQuestion
          ? <AppButton
            disabled={!Boolean(selectedAnswer)}
            onPress={() => dispatch(validateAnswer(selectedAnswer))}
            color={Themes.colors.primary}>
            <AppText color='white'>Valider</AppText>
          </AppButton>
          : <AppButton
            onPress={() => dispatch(goToNextQuestion())}
            color={Themes.colors.primary}>
            <AppText color='white'>Suivant</AppText>
          </AppButton>
        }


      </View>
      <View style={styles.jokersContainer}>
        <JokerItem label="50/50" icon={<MaterialIcons name="question-answer" size={22} color="inherit" />} onPress={() => { }} />
        <JokerItem label="Passer" icon={<MaterialIcons name="keyboard-double-arrow-right" size={24} color="inherit" />
        } onPress={() => { }} />
      </View>
    </View>
  )
}

export default QuestionCard
const styles = StyleSheet.create({
  questionCard: {
    height: "80%",
    backgroundColor: '#E4EFE6',
    borderRadius: 5,
    marginVertical: 25,
    padding: 20,
  },
  questionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: Themes.colors.background
  },
  jokersContainer: {
    display: "flex",
    flexDirection: 'row',
    gap: Themes.spacing.sm
  },
})