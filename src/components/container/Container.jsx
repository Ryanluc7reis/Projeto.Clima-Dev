import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 0 15px;
  margin: 0 30px;
  width: 100%;
  
  @media (min-width: 768px) { // telas acima de 768px ,vc deixa width 90%
    width: 90%;
  }
  @media (min-width: 1500px) { 
    width: 1440px;
  }
`

const Container = ({ children }) => <StyledContainer>{ children }</StyledContainer>

export default Container