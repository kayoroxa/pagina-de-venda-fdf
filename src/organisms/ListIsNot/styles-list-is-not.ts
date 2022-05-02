import styled from 'styled-components'

export const ContainerListIsNot = styled.div`
  padding-bottom: 10px;
  width: min(90%, 860px);

  font-size: 1.03rem;

  display: flex;
  flex-wrap: wrap;

  gap: 40px;
  justify-content: center;

  > * {
    width: max(43%, 300px);
  }

  .title {
    width: 100%;
    /* text-align: center; */
    padding: 10px 0px;
    margin-bottom: 20px;
    font-size: min(1.2rem, 5.5vw);
    font-weight: 600;
    * {
      font-family: 'Maven Pro', sans-serif;
    }
  }

  .list {
    width: 100%;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .item {
      display: flex;
      align-items: center;
      span {
        margin: 0px !important;
        flex: 1;
      }
    }
  }

  .title span {
    padding: 4px 8px;

    font-weight: 600;
    color: #f3f4f7;
    margin: 0px;
  }

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  .is {
    svg {
      fill: #45ac5d;
    }
    .title span {
      background: #45ac5d;
    }
  }

  .not {
    svg {
      fill: red;
    }
    .title span {
      background: red;
    }
  }
`
