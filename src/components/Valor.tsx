import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: flex;
  position: relative;
  justify-content: center;
  .price-wrapper {
    display: flex;
    position: relative;
  }

  font-size: 20px;
  .left {
    color: orange;
    display: flex;
    flex-direction: column;
  }
  .right {
    margin-left: 10px;
    font-size: 60px;
    color: #05b305;
    top: -5;
    /* position: relative; */
    b {
      bottom: 0;
    }
  }
`

export default function Valor() {
  return (
    <Container>
      <div className="price">
        <b style={{ color: 'black' }}>De 2.000</b>
        <div className="price-wrapper">
          <div className="left">
            <b>Por apenas</b>
            <b style={{ fontSize: '25px' }}>12x de R$</b>
          </div>
          <div className="right">
            <b>38,68</b>
          </div>
        </div>
      </div>
    </Container>
  )
}
