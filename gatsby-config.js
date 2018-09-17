module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/data/posts`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/data/projects`
            }
        },
        'gatsby-transformer-remark'
    ]
}