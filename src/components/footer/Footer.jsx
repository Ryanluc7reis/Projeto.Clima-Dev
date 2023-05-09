import styled from 'styled-components'
import Container from '../container/Container'

const StyledFooter = styled.div`
  background-color: ${props => props.theme.white};
  text-align: center;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
`
export default function Footer() {
  return (
    <StyledFooter>
     Criado por <b>Ryan Lucas</b>durante o <b>DevChallenge 01 - SejaDev</b>
    </StyledFooter>
  )

}