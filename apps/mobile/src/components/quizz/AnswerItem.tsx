import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Themes from '../../constants/Themes'
import { appActions, appSelectors } from '@jessy/application'
import { useAppDispatch } from '../../configs/store'
import { useSelector } from 'react-redux'

interface AnswerItemProps {
  text: string
  letter: string
  shouldCheckAnswer: boolean
}

const AnswerItem = ({ letter, text, shouldCheckAnswer }: AnswerItemProps) => {
  const dispatch = useAppDispatch()
  const { selectAnswer } = appActions
  const { hasAnsweredSelector, currentQuestionSelector } = appSelectors

  const hasAnsweredQuestion = useSelector(hasAnsweredSelector)
  const currentQuestion = useSelector(currentQuestionSelector)

  const isRightAnswer = (text: string): boolean => {
    return currentQuestion.correctAnswer === text
  }

  return (
    <BouncyCheckbox
      size={16}
      onPress={() => dispatch(selectAnswer(text))}
      disabled={shouldCheckAnswer || hasAnsweredQuestion}
      iconStyle={{ display: 'none' }}
      textComponent={
        <>
          <View></View>
          <Text style={{ ...answerStyle(shouldCheckAnswer).answerText, fontSize: 10 }}>{text}</Text>
          <Text style={{ ...answerStyle(shouldCheckAnswer).answerText, fontSize: 13 }}>
            {letter}
          </Text>
        </>
      }
      isChecked={shouldCheckAnswer}
      style={answerStyle(shouldCheckAnswer, hasAnsweredQuestion, isRightAnswer(text)).answer}
    />
  )
}

export default AnswerItem

const answerStyle = (isChecked: boolean, hasAnswered?: boolean, isRightAnswer?: boolean) => {
  const dynamicStyle = () => {
    if (hasAnswered && isRightAnswer) {
      return {
        anwser: {
          borderColor: Themes.colors.primary,
          backgroundColor: Themes.colors.primary
        }
      }
    } else if (hasAnswered && isChecked && !isRightAnswer) {
      return {
        anwser: {
          borderColor: Themes.colors.danger,
          backgroundColor: Themes.colors.danger
        }
      }
    } else if (isChecked) {
      return {
        anwser: {
          borderColor: Themes.colors.primary,
          backgroundColor: Themes.colors.secondary
        }
      }
    }
  }
  return StyleSheet.create({
    answer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 12,
      marginVertical: 5,
      borderRadius: 10,
      borderWidth: 1,
      ...dynamicStyle()?.anwser
    },
    answerText: {
      textAlign: 'center',
      color: '#000000'
    }
  })
}
