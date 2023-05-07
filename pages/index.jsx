import styled from 'styled-components'

import BackgroundWithChildren from '../src/components/layout/backgroundWithChildren/BackgroundWithChildren'
import Logo from '../src/components/logo/Logo'
import  Input  from '../src/components/form/inputs/Input'

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
        <Input placeholder='Digite o nome de sua cidade'  />
      </StyledDiv>

    </BackgroundWithChildren>
    
  ) 
}