import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 37px 0;
  font-weight: 400;
  font-size: 20px;
  gap : 7px;
`
const StyledContainer = styled.div`
  background-color: ${props => props.theme.white};
  width: 100%;
  height: 80px;
  text-align: center;
`
export default function Footer() {
  return (

    <StyledContainer> 
      <StyledFooter>
          Criado por <b>Ryan Lucas</b>   durante o <b>DevChallenge 01 - SejaDev</b>
      </StyledFooter> 
    </StyledContainer>     
  )
     
}