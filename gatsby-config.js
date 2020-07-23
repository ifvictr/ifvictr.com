require('dotenv').config()

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
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: process.env.AIRTABLE_API_KEY,
                tables: [
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: 'Events',
                        tableView: 'Grid view'
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: 'Projects',
                        tableView: 'Grid view',
                        // Fix: Airtable doesn't deliver empty columns: https://github.com/jbolda/gatsby-source-airtable/issues/47
                        defaultValues: {
                            Is_hidden: false
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-ghost',
            options: {
                apiUrl: process.env.GHOST_API_URL,
                contentApiKey: process.env.GHOST_CONTENT_API_KEY
            }
        },
        'gatsby-transformer-remark'
    ]
}
