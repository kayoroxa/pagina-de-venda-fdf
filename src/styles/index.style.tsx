import styled from 'styled-components'

const MainStyle = styled.div`
  max-width: 100% !important;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20vh;
  .title {
    width: min(90%, 700px);
    /* height: 20vh; */
    /* background-color: red; */
    margin-top: min(20px, 3vh);
    margin-bottom: min(20px, 3vh);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      margin: 0;
      font-size: max(2.5vw, 25px);
    }
    span {
      color: red;
    }
  }
  .video {
    width: min(93%, 700px);
    position: relative;
    margin: auto;
    /* height: 50vh; */
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 0 6px 0;
    margin-bottom: 3vh;
    border-radius: 10px;
    /* height: 0; */
    overflow: hidden;
    /* padding-bottom: 54%; */
  }

  .video::after {
    padding-top: 54.5%;
    display: block;
    content: '';
  }

  .video iframe {
    /* position: absolute; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .more {
    max-width: min(93%, 500px);
    margin: auto;
    /* height: 60vh; */
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    margin-bottom: 3vh;
    border-radius: 10px;
  }
  .fixed {
    width: 100vw;
    height: 13vh;
    /* background-color: green; */
    position: fixed;
    bottom: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .garantia {
    max-width: min(93%, 800px);
    border-radius: 10px;
    font-size: max(2.5vw, 17px);
    .grid {
      padding: 10px 20px;
      text-align: center;
      img {
        max-width: 100%;
        margin: auto;
      }
    }
  }

  .ao-redor {
    padding: 4px;
    margin: 10px;

    > * {
      max-width: 100%;
    }
  }

  .separado {
    margin-top: min(30px, 4vh);
    margin-bottom: min(30px, 4vh);
  }

  .other-background {
    color: white;
    width: 100vw;
    text-align: center;
    background-color: #50abff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export default MainStyle
