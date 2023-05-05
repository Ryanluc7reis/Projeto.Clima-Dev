import styled from 'styled-components'
import BackgroundWithChildren from '../src/components/layout/backgroundWithChildren/BackgroundWithChildren'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.white};
  min-width: 400px;

  @media (max-width: 500px){
    min-width: 100%;
  }
`

export default function HomePage() {
  return (
    <BackgroundWithChildren>
      <StyledDiv>Home Page</StyledDiv>
    </BackgroundWithChildren>
    
  ) 
}