import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Box } from 'rebass'
import { ThemeProvider, injectGlobal } from 'styled-components'

import theme from 'theme'

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

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        font-weight: inherit;
        text-rendering: optimizeLegibility;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-font-smoothing: antialiased;
    }

    body {
        color: ${theme.colors.black};
        font-family: ${theme.font};
        font-size: ${theme.fontSizes[2]}px;
        font-weight: 400;
        margin: 0;
        overflow-x: hidden;
        padding: 0;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

`

const name = 'Victor Truong'
const title = name
const description = ''
const image = ''
const url = 'https://ifvictr.com'

const Layout = ({ children }) => (
    <Fragment>
        <Helmet
            defaultTitle={name}
            titleTemplate={`%s — ${name}`}
            meta={[
                { charSet: 'utf-8' },
                { name: 'description', content: description },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: theme.colors.primary },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:description', content: description },
                { name: 'twitter:domain', content: url },
                { name: 'twitter:image:src', content: image },
                { name: 'twitter:title', content: title },
                { property: 'og:description', content: description },
                { property: 'og:image', content: image },
                { property: 'og:image:height', content: 512 },
                { property: 'og:image:width', content: 512 },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:site_name', content: name },
                { property: 'og:title', content: title },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: url }
            ]}
        />
        <ThemeProvider theme={theme}>
            <Box children={children} />
        </ThemeProvider>
    </Fragment>
)

export default Layout
