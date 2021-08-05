// import './index.css'

export default function QuizInfo() {
  return (
    <>
      <div className="info-box">
        <div className="info-tile">
          <span>Algumas regras do quiz</span>
        </div>
        <div className="info-list">
          <div className="info">
            1. Você tem apenas <strong>15 segundos</strong> para responder cada
            resposta
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
          <button className="quit">Sair Do Quiz</button>
          <button className="restart">Reiniciar o Quiz</button>
        </div>
      </div>
    </>
  )
}
