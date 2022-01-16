import { useRef, useEffect, useState } from 'react'

interface Props {
  ask: string[]
  answers: string[]
  rightAnswer: number
  onEnd: ({ didRight }: { didRight: boolean }) => void
  alreadyAnswered?: boolean
}
import Style from './index.style'

export default function QuizSession({
  ask,
  answers,
  rightAnswer,
  onEnd,
}: Props) {
  const listRef = useRef<null | HTMLDivElement>(null)
  const [canAnswer, setCanAnswer] = useState(true)

  function handleClick(event: any) {
    const indexAnswer = Number(event.currentTarget.getAttribute('data-index'))
    if (indexAnswer === rightAnswer) {
      event.currentTarget.classList.add('correct')
    } else {
      event.currentTarget.classList.add('incorrect')
      listRef?.current?.children[rightAnswer].classList.add('correct')
    }
    setCanAnswer(false)
    onEnd({ didRight: indexAnswer === rightAnswer })
  }

  useEffect(() => {
    listRef?.current?.childNodes.forEach(el => {
      const element = el as HTMLElement
      element.classList.remove('correct')
      element.classList.remove('incorrect')
    })
    setCanAnswer(true)
  }, [ask])

  return (
    <Style>
      <div className="quiz-session">
        {ask?.map((linha, index) => (
          <h1 className="ask" key={index}>
            {linha}
          </h1>
        ))}
        <div className="list" ref={listRef}>
          {answers?.map((answer, index) => (
            <div
              onClick={canAnswer ? handleClick : () => {}}
              data-index={index}
              className="item"
              key={index}
            >
              <span>{answer}</span>
            </div>
          ))}
        </div>
      </div>
    </Style>
  )
}
