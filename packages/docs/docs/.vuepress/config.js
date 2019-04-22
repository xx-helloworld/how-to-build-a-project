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
            
          ]
        },
        {
          title: "demo",
          collapsable: false,
          children: [
            "/demo/workspaces",
            "/demo/typescript",
            "/demo/typescript-jest",
            "/demo/publish",
            "/demo/changelog"
          ]
        }
      ]
    }
  },

  plugins: [["@vuepress/back-to-top", true]]
};
