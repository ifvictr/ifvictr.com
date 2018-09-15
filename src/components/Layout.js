import React from 'react'
import { Box } from 'rebass'
import { ThemeProvider, injectGlobal } from 'styled-components'
import theme from '../theme'

injectGlobal`
    @font-face {
        font-family: Poppins;
        font-weight: 300;
        src: url(/fonts/Poppins-Light.ttf) format('truetype');
    }
    @font-face {
        font-family: Poppins;
        font-weight: 400;
        src: url(/fonts/Poppins-Regular.ttf) format('truetype');
    }
    @font-face {
        font-family: Poppins;
        font-weight: 700;
        src: url(/fonts/Poppins-Bold.ttf) format('truetype');
    }

    *, *:before, *:after {
        box-sizing: border-box;
        font-weight: inherit;
        text-rendering: optimizeLegibility;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: ${theme.font};
        font-size: ${theme.fontSizes[2]}px;
        font-weight: 300;
        margin: 0;
        overflow-x: hidden;
        padding: 0;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

`

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Box>{children}</Box>
    </ThemeProvider>
)

export default Layout