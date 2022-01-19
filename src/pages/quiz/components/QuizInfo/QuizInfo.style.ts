import styled from 'styled-components'

export default styled.div`
  * {
    font-family: sans-serif;
    font-weight: 600;
    /* font-size: 2rem; */
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .info-title {
    font-size: 40px;
    text-align: center;
  }
  .info-sub-title {
    font-size: 20px;
    text-align: center;
  }
  .info-list {
    .info {
      padding: 10px;
      background: white;
      margin: 10px 0;
      border-radius: 20px;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    button {
      cursor: pointer;
      border: none;
      padding: 10px 30px;
      border-radius: 20px;
      font-size: 30px;
      box-shadow: -3px 3px rgba(0, 0, 0, 0.8);
      margin: 20px 0 10px 0;
    }
    a {
      text-decoration: none;
      color: black;
    }
    .start {
      background: lightgreen;
      text-transform: uppercase;
    }
  }
  @media (hover: hover) and (pointer: fine) {
    .buttons button:hover {
      * {
        color: white;
      }
      color: white;
      background: #66a2e9;
    }
  }

  .upper {
    text-transform: uppercase;
  }
`
