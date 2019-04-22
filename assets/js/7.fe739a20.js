(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{215:function(t,e,r){"use strict";r.r(e);var a=r(2),o=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog","aria-hidden":"true"}},[t._v("#")]),t._v(" changelog")]),t._v(" "),r("h2",{attrs:{id:"monorepo-项目支持-changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-项目支持-changelog","aria-hidden":"true"}},[t._v("#")]),t._v(" monorepo 项目支持 changelog")]),t._v(" "),r("p",[t._v("由于\bmonorepo的特殊性, changelog的实现会比较复杂, 一个changelog可能包含多个repo的内容; \b而又存在fix, feat等多个因素的存在; \b需求比较多, 我还是拿【lerna-changelog](https://github.com/lerna/lerna-changelog)举例.")]),t._v(" "),r("h2",{attrs:{id:"实现效果-changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现效果-changelog","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现效果 "),r("a",{attrs:{href:"https://github.com/xx-helloworld/how-to-build-a-project/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("changelog"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"_1-0-7-alpha-7-2019-04-22"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-7-alpha-7-2019-04-22","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.0.7-alpha.7 (2019-04-22)")]),t._v(" "),r("h4",{attrs:{id:"new-feature"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-feature","aria-hidden":"true"}},[t._v("#")]),t._v(" 🚀 New Feature")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("typescript-jest")]),t._v(", "),r("code",[t._v("typescript")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/xx-helloworld/how-to-build-a-project/pull/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("#3"),r("OutboundLink")],1),t._v(" it`s a pr test ("),r("a",{attrs:{href:"https://github.com/xxholly32",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xxholly32"),r("OutboundLink")],1),t._v(")")])])])]),t._v(" "),r("h4",{attrs:{id:"bug-fix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-fix","aria-hidden":"true"}},[t._v("#")]),t._v(" 🐛 Bug Fix")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("typescript")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/xx-helloworld/how-to-build-a-project/pull/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("#4"),r("OutboundLink")],1),t._v(" fix(typescript): a pr test too ("),r("a",{attrs:{href:"https://github.com/xxholly32",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xxholly32"),r("OutboundLink")],1),t._v(")")])])]),t._v(" "),r("li",[r("code",[t._v("typescript-jest")]),t._v(", "),r("code",[t._v("typescript")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/xx-helloworld/how-to-build-a-project/pull/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("#3"),r("OutboundLink")],1),t._v(" it`s a pr test ("),r("a",{attrs:{href:"https://github.com/xxholly32",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xxholly32"),r("OutboundLink")],1),t._v(")")])])])]),t._v(" "),r("h4",{attrs:{id:"committers-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#committers-1","aria-hidden":"true"}},[t._v("#")]),t._v(" Committers: 1")]),t._v(" "),r("ul",[r("li",[t._v("xx ("),r("a",{attrs:{href:"https://github.com/xxholly32",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xxholly32"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("h2",{attrs:{id:"技术约束"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术约束","aria-hidden":"true"}},[t._v("#")]),t._v(" 技术约束")]),t._v(" "),r("h3",{attrs:{id:"需要都采用pr的形式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需要都采用pr的形式","aria-hidden":"true"}},[t._v("#")]),t._v(" 需要都采用pr的形式")]),t._v(" "),r("p",[r("code",[t._v("lerna-changelog")]),t._v("的约束条件是所有的提交时按照pr的形式去做的, 我主要看的还是"),r("code",[t._v("vue-cli")]),t._v(", 他们也是最近几个版本才切的 "),r("code",[t._v("lerna-changelog")]),t._v("; \b纯有pr的好处是代码提交与审核分离, 而不是dev一次在\b\b\b性提交到master, 并且比较推荐更多人使用pr; \b连\bmaster权限的人也是使用pr功能.")]),t._v(" "),r("h3",{attrs:{id:"需要有label标签和github-token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需要有label标签和github-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 需要有label标签和github_token")]),t._v(" "),r("p",[t._v("【labels】(https://github.com/xx-helloworld/how-to-build-a-project/labels) 需要用标签来过滤提交和changelog, 也需要用github_token, 其实内部实现是根据所有的issues标签来鉴定changelog, 官方有issues说明是可以支持bitbucket和gitlab等.")]),t._v(" "),r("p",[t._v("\b\b好处是master审核人员可以区分, 到底这个commit是fix还是feat, 只需要选label就可以了.")]),t._v(" "),r("h2",{attrs:{id:"未实现功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#未实现功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 未实现功能")]),t._v(" "),r("p",[t._v("无法实现单个repo的版本升级, 待研究")])])},[],!1,null,null,null);e.default=o.exports}}]);