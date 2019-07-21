(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{264:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm","aria-hidden":"true"}},[a._v("#")]),a._v(" nvm")]),a._v(" "),t("p",[a._v("用于解决多版本共存问题，可以使用最新的版本来测试新出的特性，也可以使用 "),t("code",[a._v("LTS")]),a._v(" 来支撑稳定的业务，便于切换版本。")]),a._v(" "),t("h3",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 测试")]),a._v(" "),t("p",[a._v("正常情况下测试：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nvm --version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -bash: nvm: command not found")]),a._v("\n")])])]),t("p",[a._v("这是因为环境变量还未生效，执行 "),t("code",[a._v("source ~/.bashrc")]),a._v(" 使环境变量生效，然后重新测试。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nvm --version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 0.34.0")]),a._v("\n")])])]),t("h2",{attrs:{id:"nrm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nrm","aria-hidden":"true"}},[a._v("#")]),a._v(" nrm")]),a._v(" "),t("p",[a._v("用于解决 npm 镜像访问慢的问题，提供测速，便于切换源。")]),a._v(" "),t("p",[a._v("npm 自身是提供了切换源的配置的，但是多个源切换起来很麻烦。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" registry https://registry.npmjs.org/\n")])])]),t("h3",{attrs:{id:"_1-安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 安装")]),a._v(" "),t("p",[a._v("nrm 也是 "),t("code",[a._v("Node.js")]),a._v(" 模块，所以在安装它之前需要先安装完 npm。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --global nrm\n")])])]),t("h3",{attrs:{id:"_2-查看源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看源","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 查看源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nrm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# * npm ---- https://registry.npmjs.org/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  cnpm --- http://r.cnpmjs.org/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  taobao - https://registry.npm.taobao.org/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  nj ----- https://registry.nodejitsu.com/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  npmMirror  https://skimdb.npmjs.com/registry/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  edunpm - http://registry.enpmjs.org/")]),a._v("\n")])])]),t("h3",{attrs:{id:"_3-测速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-测速","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 测速")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nrm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# * npm ---- 1837ms")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  cnpm --- 1050ms")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  taobao - 125ms")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  nj ----- Fetch Error")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  npmMirror  3027ms")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  edunpm - Fetch Error")]),a._v("\n")])])]),t("h3",{attrs:{id:"_4-切换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-切换源","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 切换源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nrm use taobao\n")])])]),t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[a._v("#")]),a._v(" npm")]),a._v(" "),t("p",[a._v("核心，用于解决 "),t("code",[a._v("Node.js")]),a._v(" 模块安装问题，其本身也是一个模块。")]),a._v(" "),t("h3",{attrs:{id:"_1-查看可安装版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看可安装版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 查看可安装版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nvm ls-remote\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v10.13.0   (LTS: Dubnium)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ...")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v10.15.3   (Latest LTS: Dubnium)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v11.0.0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ...")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v11.11.0")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 安装")]),a._v(" "),t("p",[a._v("选择上方最新的 LTS 版本，如果需要对 Nodejs 进一步测试的话可以选择最新版本。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" v10.15.3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# LTS")]),a._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" v11.11.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 最新版")]),a._v("\n")])])]),t("h3",{attrs:{id:"_3-测试结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试结果","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 测试结果")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("node -v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v10.15.3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" -v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 6.4.1")]),a._v("\n")])])]),t("h3",{attrs:{id:"_4-切换版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-切换版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 切换版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nvm use v11.11.0 \nnode -v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v11.11.0")]),a._v("\n")])])]),t("h3",{attrs:{id:"_5-查看可用版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看可用版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 查看可用版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地")]),a._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 远程")]),a._v("\nnvm ls-remote\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm 文档"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nrm 文档"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=n.exports}}]);