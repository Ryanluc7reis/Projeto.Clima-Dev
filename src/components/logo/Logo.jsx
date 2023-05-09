import styled from 'styled-components'

const Img = styled.img`

`
const StyledDiv = styled.div`

`
const VerticalText = styled.h1`
  font-size: 80px;
  color: ${props => props.theme.black};
  line-height: 70px;
  text-align: end;
  margin-right: 50px;
  margin-top: -50px;
`
const HorizontalText = styled.h1`
  font-size: 40px;

`
const PrimaryColor = styled.span`
color: ${props => props.theme.primary};
margin-right: 50px;
text-transform: uppercase; // força a palavra se tornar maiuscula
`
export default function Logo({ showImage, type }) {
  return(
    <div>
      {showImage && <Img src="/woman.svg" /> }
      {type === 'vertical' && 
      <VerticalText>
        Clima <br /><PrimaryColor>Dev</PrimaryColor>
      </VerticalText>      
      }
      {
        type === 'horizontal' &&
        <HorizontalText>Clima<PrimaryColor>Dev</PrimaryColor></HorizontalText>
      }
    </div>
    
  )
}
Logo.defaultProps = {
  type: 'horizontal'
}