import styled from 'styled-components'

interface IProps {
  variant: 'outlined' | 'fill'
}

export const ContainerButton = styled.div<IProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px min(80px, 17vw);
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  border-radius: 40px;
  background: ${({ variant }) =>
    variant === 'outlined' ? '#f3f4f7' : '#556cd6'};

  color: ${({ variant }) => (variant === 'outlined' ? '#556cd6' : '#fff')};
  border: 1px solid #556cd6;

  cursor: pointer;
  font-size: min(1.5rem, 5.5vw);
  font-weight: 600;

  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  :hover {
    background: #3a57d9;
    color: #f3f4f7;
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  }
`
