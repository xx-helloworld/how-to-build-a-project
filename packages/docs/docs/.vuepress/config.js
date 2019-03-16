const path = require("path");
module.exports = {
  title: "How to build a project",
  description: "Just playing around",
  base: "/how-to-build-a-project/",
  host: "0.0.0.0",
  themeConfig: {
    sidebar: "auto",
    // locales: {
    nav: [{ text: "doc", link: "/" }],
    sidebar: {
      "/": [
        {
          title: "开个头",
          collapsable: false,
          children: [
            "/doc/before",
            "/doc/why",
            "/doc/workspaces",
            "/doc/typescript",
            "/doc/typescript-jest"
          ]
        },
        {
          title: "ui-demo",
          collapsable: false,
          children: ["/uidemo/button"]
        }
      ]
    }
  },

  plugins: [
    ["@vuepress/back-to-top", true]
  ]
};
