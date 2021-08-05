import { useState, useEffect } from 'react'
import QuizSession from './components/QuizSession'
LinearProgress
import { LinearProgress } from '@material-ui/core'
import templateAsks from './asks.json'

export default function quiz() {
  const [indexAnswer, setIndexAnswer] = useState(0)
  const [countAnswersRight, setCountAnswersRight] = useState(0)
  const [finishedQuiz, setFinishedQuiz] = useState(false)

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

  return (
    <div>
      {/* <h1>Right {countAnswersRight}</h1> */}
      <span>
        {indexAnswer + 1} / {templateAsks.length}
      </span>
      <LinearProgress
        variant="determinate"
        value={!finishedQuiz ? (indexAnswer * 100) / templateAsks.length : 100}
      />
      {!finishedQuiz && (
        <QuizSession
          ask={templateAsks[indexAnswer].ask}
          answers={templateAsks[indexAnswer].answer}
          rightAnswer={templateAsks[indexAnswer].right}
          onEnd={handlerAnswer}
        />
      )}
      {finishedQuiz && (
        <div>
          <div>FIM Você Acertou {countAnswersRight}</div>
          <div>
            Recomendo para você o curso completo de tempo verbal no inglês
          </div>
          <div>
            Pois não adianta saber as palavras mais não saber montar frases com
            elas
          </div>
          <button>
            <a href="https://formuladafluencia.vercel.app/">CONHECER O CURSO</a>
          </button>
        </div>
      )}
    </div>
  )
}
