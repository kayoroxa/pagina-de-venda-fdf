import { useState, useMemo } from 'react'
import QuizSession from './components/QuizSession'
LinearProgress
import { LinearProgress } from '@material-ui/core'
import templateAsksJson from './asks.json'
import QuizContainerStyle from './QuizContainer.style'
import QuizInfo from './components/QuizInfo'
import _ from 'lodash'

export default function quiz() {
  const templateAsks = useMemo(() => _.sampleSize(templateAsksJson, 10), [])
  const [indexAnswer, setIndexAnswer] = useState(0)
  const [countAnswersRight, setCountAnswersRight] = useState(0)
  const [finishedQuiz, setFinishedQuiz] = useState(false)
  const [started, setStarted] = useState(false)

  const handlerAnswer = ({ didRight }: { didRight: boolean }) => {
    const trueSize = indexAnswer + 1 < templateAsks.length
    if (didRight) {
      setCountAnswersRight(countAnswersRight + 1)
    }
    setTimeout(() => {
      setIndexAnswer(trueSize ? indexAnswer + 1 : indexAnswer)
      setFinishedQuiz(trueSize ? false : true)
    }, 1000)
  }

  const handleStart = () => {
    setStarted(true)
  }
  return (
    <QuizContainerStyle>
      {!started && <QuizInfo option="start-info" handleStart={handleStart} />}
      {started && (
        <span>
          {indexAnswer + 1} / {templateAsks.length}
        </span>
      )}
      {started && (
        <LinearProgress
          variant="determinate"
          value={
            !finishedQuiz ? (indexAnswer * 100) / templateAsks.length : 100
          }
        />
      )}

      {!finishedQuiz && started && (
        <QuizSession
          ask={templateAsks[indexAnswer].ask}
          answers={templateAsks[indexAnswer].answer}
          rightAnswer={templateAsks[indexAnswer].right}
          onEnd={handlerAnswer}
        />
      )}
      {finishedQuiz && started && (
        <QuizInfo option="end-info" countAnswersRight={countAnswersRight} />
      )}
    </QuizContainerStyle>
  )
}
