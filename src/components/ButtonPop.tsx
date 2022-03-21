import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'
import InputPhone from './InputPhone'
import { useState } from 'react'
import axios from 'axios'

interface IProps {
  colorButton: string
  buttonTitle: string
  href?: string
  //JSX.Element
  children: JSX.Element
}

const Content = styled.div`
  /* height: 300px; */
  width: min(80vw, 400px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  * {
    font-family: 'Roboto', sans-serif;
  }
  .title {
    font-size: 1.7rem;
    font-weight: bold;
    color: #2f76d2;
  }

  img.loading {
    width: 100px;
    height: 100px;
  }

  .inputs-container {
    width: 80%;
  }

  button {
    border: none;
    background: #a5a5a5;
    color: #494949;
    font-size: min(4vw, 17px);
    border-radius: 20px;
    width: min(90%, 500px);
    height: 40px;
    margin-top: 20px;
    transition: all 0.2s;
    transform: scale(0.95);

    &:hover {
      cursor: not-allowed;
    }
  }

  button.already {
    background: #00bb3e;
    color: #fff;
    &:hover {
      background: #10be4a;
      color: #fff;
      cursor: pointer;
      transform: scale(1);
    }
  }
`

const StyledPopup = styled(Popup)`
  &-content {
    margin: auto;
    background: white !important;
    /* height: min(90vh, 400px); */

    padding: 40px;
    border-radius: 10px;
  }
  &-arrow {
    color: rgb(255, 255, 255);
  }
  [role='tooltip'].popup-content {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  }

  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  [data-popup='tooltip'].&-overlay {
    background: transparent;
  }
`

export default function ButtonPop({ href, children }: IProps) {
  const [infoAlready, setInfoAlready] = useState<boolean>(false)
  const [phoneData, setPhoneData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleClickButton(href: string) {
    setIsLoading(true)
    try {
      await axios.put(`/api/user/${phoneData}`)
    } catch (err) {
      console.log(err)
    }
    location.href = href
  }

  return (
    <StyledPopup trigger={children} modal>
      <Content>
        <div className="title">
          {!isLoading ? 'Quase lá.. 😀' : 'verificando vagas...'}
        </div>
        {isLoading && (
          <img
            className="loading"
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="loading"
          />
        )}
        {!isLoading && (
          <>
            <div className="inputs-container">
              <InputPhone
                onChange={value => {
                  if (value.length >= 14) {
                    setPhoneData(value)
                    setInfoAlready(true)
                  } else setInfoAlready(false)
                }}
              />
            </div>
            <button
              onClick={() => href && infoAlready && handleClickButton(href)}
              className={infoAlready ? 'already' : ''}
            >
              {!infoAlready ? 'Coloque seu whatsapp' : 'Quero me cadastrar'}
            </button>
          </>
        )}
      </Content>
    </StyledPopup>
  )
}
