import styled from 'styled-components'

const StyledInput = styled.input`
padding: 20px;
width: 100%;
border-radius: 10px;
background-color: ${props => props.theme.backgroundInput};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: 0;
outline: none;
color: #9c9c9c;
font-weight: bold;
`

 function Input( {...props} ) {
  return (
    <StyledInput {...props} />
  )
}
export default Input