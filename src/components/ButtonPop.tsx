import axios from 'axios'
import { useState } from 'react'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'
import InputPhone from './InputPhone'

interface IProps {
  colorButton: string
  buttonTitle: string
  href?: string
  //JSX.Element
  children: JSX.Element
  showPopup?: boolean
  affiliated?: boolean
}

const Content = styled.div`
  /* height: 300px; */
  width: min(70vw, 400px);
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
    width: 90%;
  }

  button.submit {
    border: none;
    background: #a5a5a5;
    color: #494949;
    font-size: min(4vw, 17px);
    border-radius: 20px;
    width: min(90%, 500px);
    height: 60px;
    margin-top: 20px;
    transition: all 0.2s;
    transform: scale(0.95);

    &:hover {
      cursor: not-allowed;
    }
  }

  button.submit.already {
    background: #00bb3e;
    color: #fff;
    &:hover {
      background: #10be4a;
      color: #fff;
      cursor: pointer;
      transform: scale(1);
    }
  }

  button.close-button {
    position: absolute;
    top: 10px;
    right: 10px;

    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    transform: scale(0.95);
    color: #838383;
    border: none;
    background: none;
    font-weight: bold;
    border: solid 1px #999999;
    font-size: 9px;
    &:hover {
      background: #a5a5a5;
      color: #fff;
      transform: scale(1);
    }
  }
`

const StyledPopup = styled(Popup)`
  &-content {
    /* todo o box */
    z-index: 99999 !important;
    margin: auto;
    background: white !important;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 40px;
    border-radius: 10px;
  }
  @media only screen and (max-width: 768px) {
    &-content {
      height: min(60vh);
    }
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

export default function ButtonPop({
  href,
  children,
  showPopup = true,
  affiliated,
}: IProps) {
  const [infoAlready, setInfoAlready] = useState<boolean>(false)
  const [phoneData, setPhoneData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  async function handleClickButton(href: string) {
    setIsLoading(true)
    try {
      await axios.put(`/api/user/${affiliated ? 'A-' + phoneData : phoneData}`)
    } catch (err) {
      console.log(err)
    }
    location.href = href
  }
  if (showPopup === false) {
    //return children with href
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {children}
      </a>
    )
  }

  return (
    <StyledPopup
      trigger={children}
      modal
      closeOnDocumentClick={false}
      open={open}
    >
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
                  if (value.length >= 15) {
                    setPhoneData(value)
                    setInfoAlready(true)
                  } else setInfoAlready(false)
                }}
              />
            </div>
            <button
              onClick={() => href && infoAlready && handleClickButton(href)}
              className={infoAlready ? 'submit already' : 'submit'}
            >
              {!infoAlready ? 'Coloque seu whatsapp 👆' : 'Quero me cadastrar'}
            </button>
          </>
        )}
        <button
          type="button"
          className="close-button"
          onClick={() => setOpen(o => !o)}
        >
          X
        </button>
      </Content>
    </StyledPopup>
  )
}
