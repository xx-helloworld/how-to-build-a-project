module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: "/how-to-build-a-project/",
    host: "0.0.0.0",
    themeConfig: {
        sidebar: 'auto',
        // locales: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'foo', link: '/foo/' },
            { text: 'bar', link: '/bar/' }
        ],
        sidebar: {
            // fallback
            '/foo/': [{
                title: "foo title",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'workspaces',
                    'typescript',
                    'typescript-jest'
                ]
            }
            ]
        },
        // }
    }
}