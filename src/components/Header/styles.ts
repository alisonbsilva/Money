import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;

  justify-content: space-between;
  align-items: center;
`
export const NewTransactionBurron = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
export const BoxLogo = styled.div`
  background-color: ${(props) => props.theme['gray-600']};
  display: flex;
  flex-direction: column;
  padding: 3px 10px;
  font-weight: bold;
  border-radius: 6px;
  font-size: 1.2rem;
  span {
    margin-left: 10px;
    color: ${(props) => props.theme['green-700']};
  }
  strong {
    font-weight: 400;
  }
`
