import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'


const GlobalStyle = createGlobalStyle`
  html,body{
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.white};  
    font-family: sans-serif; 
  }
  * {
    box-sizing: border-box ; // nao importe o quanto vc aumente o padding ,ele utilzara somente o espaço disponivel
 }
`
 

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>   
    )
}

