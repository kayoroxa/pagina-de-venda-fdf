import QuizInfoStyle from './QuizInfo.style'

interface Prop {
  handleStart?: () => void
  option: 'start-info' | 'end-info'
  countAnswersRight?: number
}

export default function QuizInfo({
  handleStart,
  option,
  countAnswersRight,
}: Prop) {
  if (option === 'start-info')
    return (
      <QuizInfoStyle>
        <div className="info-box">
          <div className="info-title">
            <span>Algumas regras do quiz</span>
          </div>
          <div className="info-list">
            <div className="info">
              1. Você tem apenas <strong>15 segundos</strong> para responder
              cada resposta
            </div>
            <div className="info">
              2. Você só pode selecionar 1 vez, não pode mudar a resposta
            </div>
            <div className="info">3. Só existe 1 resposta certa</div>
            <div className="info">
              4. Você não pode sair do Quiz enquanto tiver rolando
            </div>
          </div>
          <div className="buttons">
            <button className="start" onClick={handleStart}>
              Iniciar
            </button>
          </div>
        </div>
      </QuizInfoStyle>
    )
  else if (countAnswersRight !== undefined)
    return (
      <QuizInfoStyle>
        <h1>FIM!!</h1>
        <div className="info-title upper">
          <span>
            Você {countAnswersRight < 3 && 'só '}Acertou{' '}
            {String(countAnswersRight).replace('0', 'nada 😢')}
          </span>
        </div>
        <div className="info-sub-title">
          <p>
            Recomendo para você o curso completo para montar frase em qualquer
            tempo verbal
          </p>
          <p>
            Pois não adianta saber as palavras mais não saber montar frases com
            elas
          </p>
        </div>
        <div className="buttons">
          <button className="start">
            <a href="https://formuladafluencia.vercel.app/">CONHECER O CURSO</a>
          </button>
        </div>
      </QuizInfoStyle>
    )
  else return <div>ERROR</div>
}
