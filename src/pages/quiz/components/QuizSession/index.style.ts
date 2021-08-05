import styled from 'styled-components'

export default styled.div`
  .quiz-session {
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: sans-serif;
    border: solid lightblue 2px;
    text-align: center;
  }
  h1.ask {
    margin: 0;
  }
  .list {
    position: relative;
    width: 450px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    margin: 5px auto 0;
  }

  .list .item {
    display: flex;
    background: aliceblue;
    padding: 10px 20px;
    margin: 5px 0;
    transition: 0.2s;
    border-radius: 10px;
    border: solid #84c5fe 2px;
  }

  .item span {
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .item:hover {
    background: #66a2e9;
    color: white;
    cursor: pointer;
  }

  .item.incorrect {
    background: #f44336;
    color: white;
  }

  .item.correct {
    background: #4caf50;
    color: white;
  }
`
