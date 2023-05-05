import styled from 'styled-components'
import BackgroundWithChildren from '../src/components/layout/backgroundWithChildren/BackgroundWithChildren'

const StyledDiv = styled.div`
  background-color: red;
`

export default function HomePage() {
  return (
    <BackgroundWithChildren>
      <StyledDiv>Home Page</StyledDiv>
    </BackgroundWithChildren>
    
  ) 
}