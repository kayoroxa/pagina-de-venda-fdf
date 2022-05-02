import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { ContainerListIsNot } from './styles-list-is-not'

interface IProps {}
const ListIsNot = ({}: IProps) => {
  return (
    <ContainerListIsNot>
      <div className="is">
        <div className="title">
          Esse curso
          <br />
          <span>é para você que...</span>
        </div>
        <div className="list">
          <div className="item">
            <AiFillCheckCircle />
            <span>Não tem um nível avançado</span>
          </div>
          <div className="item">
            <AiFillCheckCircle />
            <span>Já tentou aprender mas não conseguiu</span>
          </div>
          <div className="item">
            <AiFillCheckCircle />
            <span>Nunca tentou mas quer começar com pé direito</span>
          </div>
          <div className="item">
            <AiFillCheckCircle />
            <span>Quer aprender inglês de maneira rápida</span>
          </div>
          <div className="item">
            <AiFillCheckCircle />
            <span>
              Quer focar na fala e entender, e não apenas teoria e gramatica
            </span>
          </div>
          <div className="item">
            <AiFillCheckCircle />
            <span>Ainda não se considera bom no inglês</span>
          </div>
          <div className="item">
            <AiFillCheckCircle />
            <span>
              Quer aprender inglês utilizando muito do que você já sabe no
              português
            </span>
          </div>

          {/* <div className="item">
              <AiFillCheckCircle />
              Quer aprender inglês sem precisar gastar muito dinheiro
            </div>
            <div className="item">
              <AiFillCheckCircle />
              Precisa de um passo a passo, livre de falhas
            </div> */}
        </div>
      </div>

      <div className="not">
        <div className="title">
          Mas,
          <br />
          <span> não é para você que...</span>
        </div>
        <div className="list">
          <div className="item">
            <MdCancel />
            <span>Tem um inglês muito avançado</span>
          </div>
          <div className="item">
            <MdCancel />
            <span>
              NÃO QUER assistir um curso de inglês sem precisar sair de casa
            </span>
          </div>
          <div className="item">
            <MdCancel />
            <span>Não tem internet</span>
          </div>
          <div className="item">
            <MdCancel />
            <span>Está satisfeito em nunca aprender uma nova lingua</span>
          </div>
          <div className="item">
            <MdCancel />
            <span>
              Não está disposto a tirar um pouco de tempo do seu dia para
              praticar
            </span>
          </div>
        </div>
      </div>
    </ContainerListIsNot>
  )
}

export default ListIsNot
