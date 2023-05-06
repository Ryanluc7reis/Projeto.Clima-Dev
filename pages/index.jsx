import styled from 'styled-components'

import BackgroundWithChildren from '../src/components/layout/backgroundWithChildren/BackgroundWithChildren'
import Logo from '../src/components/logo/Logo'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;


  @media (max-width: 500px){
    min-width: 100%;
  }
`

export default function HomePage() {
  return (
    <BackgroundWithChildren>
      <StyledDiv>
        <Logo showImage type="vertical" />
        <input />
      </StyledDiv>

    </BackgroundWithChildren>
    
  ) 
}