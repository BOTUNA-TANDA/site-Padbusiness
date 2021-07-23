module.exports = {
    siteMetadata: {
        title: ``,
        description: `PAD Business Network est une plateforme pour le renforcement des capacités des africains et ses descendants partout dans le monde.`,
        author: `@greenbetech.com`,
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
            options: {
                path: `${__dirname}/locales`,
                name: `locale`,
            }
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`,
                languages: [`fr`, `en`, `nl`],
                defaultLanguage: `fr`,
                siteUrl: `http://locahost:8000`,
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false,
                    },
                    keySeparator: false,
                    nsSeparator: false,
                },
                pages: [
                    {
                        matchPath: `/:lang?/blog/:uid`,
                        getLanguageFromPath: true,
                        excludeLanguages: ['es'],
                    },
                    {
                        matchPath: `/preview`,
                        languages: ['fr']
                    },
                ]

            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:100,200,300,400,500,600,700,800,900`,
                ],
                display: 'swap'
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `PAD Business Network`,
                short_name: `Pad Biz`,
                start_url: `/`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
