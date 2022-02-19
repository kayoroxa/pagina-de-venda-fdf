import styled from 'styled-components'

interface SProps {
  notColor?: boolean
}

export const Container = styled.div<SProps>`
  width: 100%;
  /* height: 100%; */
  /* background: blue; */
  display: flex;
  position: relative;
  justify-content: center;
  .price {
    width: 80%;
  }
  .price-wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
  }

  font-size: 20px;
  .left {
    color: ${({ notColor }) => !notColor && 'orange'};
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 15px;
    * {
      line-height: 16px;
    }
  }
  .right {
    margin-left: 10px;
    font-size: min(300%, 60px);
    color: ${({ notColor }) => !notColor && '#5fb100'};
    line-height: 1.15;
    top: -5;
    /* position: relative; */
    b {
      bottom: 0;
    }
  }
  .oldValue {
    text-align: center;
    margin-bottom: 10px
    font-weight: lighter;
    color: #bbbbbb;
    font-size: 1rem;
  }

  .bottom {
    color: ${({ notColor }) => !notColor && 'orange'};
    text-align: center;
    width: 100%;
    margin: 0;
    font-size: 17px;
  }
`
interface Props {
  removeOldValue?: boolean
  notColor?: boolean
}

export default function Valor({ removeOldValue, notColor }: Props) {
  return (
    <Container notColor={notColor}>
      <div className="price">
        <div className="price-wrapper">
          {!removeOldValue && (
            <div className="oldValue">
              <span>De </span>
              <span style={{ textDecoration: 'line-through' }}>
                <>R$ 58 / mês</>
              </span>
              <span> por</span>
            </div>
          )}
          <div className="left">
            <b>
              <span style={{ fontSize: '1.5rem' }}>R$ </span>
              <span style={{ fontSize: '4rem' }}>31</span>
              <span style={{ fontSize: '1.5rem' }}>/mês</span>
              {/* 31,<span style={{ fontSize: '40px' }}>86</span> */}
            </b>
          </div>
          <div className="right">
            {/* <b>Por apenas</b> */}
            {/* <b style={{ fontSize: '25px' }}>12x de R$</b> */}
          </div>
        </div>
        <p className="bottom">
          Plano anual
          {/* Ou <strong>R$327,00</strong> a vista. */}
        </p>
      </div>
    </Container>
  )
}
