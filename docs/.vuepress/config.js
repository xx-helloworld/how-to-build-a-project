module.exports = {
    title: 'How to build a project',
    description: 'Just playing around',
    base: "/how-to-build-a-project/",
    host: "0.0.0.0",
    themeConfig: {
        sidebar: 'auto',
        // locales: {
        nav: [
            { text: 'doc', link: '/' }
        ],
        sidebar: {
            // fallback
            '/': [{
                title: "开个头",
                collapsable: false,
                children: [
                    '/doc/why',
                    '/doc/workspaces',
                    '/doc/typescript',
                    '/doc/typescript-jest'
                ]
            }
            ]
        },
        // }
    }
}