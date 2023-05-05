import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;

`
const StyledImage = styled.div`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`
function BackgroundWithChildren({ children, image }) {
  return (
    <StyledFlex>
      {children} 
      <StyledImage image={image}/>        
    </StyledFlex>
    
  )
}
BackgroundWithChildren.defaultProps ={
  image:'/background.png'
}
export default BackgroundWithChildren