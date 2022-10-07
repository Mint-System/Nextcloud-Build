const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'en-US',
    title: 'Nexctloud Development',
    description: 'Nextcloud development environment.',
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/nextcloud-development',
        docsBranch: 'master',
        editLink: true,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Mint System', link: 'https://www.mint-system.ch' }
        ],
    }),
    plugins: [
        searchPlugin(),
    ],
}