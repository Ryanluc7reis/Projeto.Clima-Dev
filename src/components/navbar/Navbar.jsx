import styled from 'styled-components'

import Logo from '../logo/Logo'
import Container from '../container/Container'

const StyledNavBar = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
`
export default function Navbar() {
  return (
    <StyledNavBar>
       <Container>
          <Logo />
       </Container>
    </StyledNavBar>
  )
}