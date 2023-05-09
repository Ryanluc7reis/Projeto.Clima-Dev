import styled from 'styled-components'

import Navbar from '../../../src/components/navbar/Navbar'
import Container from '../../../src/components/container/Container'

const Body = styled.div`
background-color: ${props => props.theme.grey};
min-height: 100vh;
`
export default function IngoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          Conteudo
        </Container>       
      </Body>
    </>
  )
}