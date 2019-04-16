module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './static/favicon.png',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/data/projects`
            }
        },
        {
            resolve: 'gatsby-source-ghost',
            options: {
                apiUrl: 'https://cms.ifvictr.com',
                contentApiKey: '865ddc4a0575e2adb5735966b5'
            }
        },
        'gatsby-transformer-remark'
    ]
}