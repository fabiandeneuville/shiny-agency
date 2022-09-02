import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/index';
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    background-color: ${({isDarkMode}) => (isDarkMode ? colors.backgroundDark : 'white')}
  }
`

function GlobalStyle(){

    const { theme } = useContext(ThemeContext)

    return (
        <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
    )
}

export default GlobalStyle;