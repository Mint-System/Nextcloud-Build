import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'


export default defineUserConfig({
    lang: 'en-US',
    title: 'Nextcloud Build',
    description: 'The Mint System Nextcloud development environment.',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/nextcloud-build',
        docsBranch: 'main',
        editLink: true,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Help', link: '/task' },
            { text: 'Mint System', link: 'https://www.mint-system.ch' }
        ],
    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 10
        }),
    ],
})
