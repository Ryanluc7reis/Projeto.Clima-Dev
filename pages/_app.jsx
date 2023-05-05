import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.white};
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

