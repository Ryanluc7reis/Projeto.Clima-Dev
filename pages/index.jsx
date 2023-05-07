import styled from 'styled-components'

import BackgroundWithChildren from '../src/components/layout/backgroundWithChildren/BackgroundWithChildren'
import Logo from '../src/components/logo/Logo'
import  InputWithSuggestions  from '../src/components/form/inputWithSuggestion/InputWithSuggestions'

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
// para utilizar um componente q ja foi criado no styled-components :
const StyledInput = styled(InputWithSuggestions)`
  width: 100%;
  box-sizing: border-box;
`
const InputContainer = styled.div`
  @media (min-width: 750px){ /* definindo esses  parâmetro para quando a tela tiver PELO MENOS 750px,abaixo disso fica normal sem nenhum parâmetro */
    width: 150%;
  }
  z-index: 100;

`

export default function HomePage() {
  return (
    <BackgroundWithChildren>
      <StyledDiv>
        <Logo showImage type="vertical" />
        <InputContainer>
          <StyledInput placeholder='Digite o nome de sua cidade'  />
        </InputContainer>
      </StyledDiv>
    </BackgroundWithChildren>
    
  ) 
}