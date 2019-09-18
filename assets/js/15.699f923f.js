(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{333:function(t,a,e){"use strict";e.r(a);var s=e(24),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("在初学时注释过"),e("a",{attrs:{href:"/backend/nginx/explain-the-main-configuration-file-of-nginx"}},[t._v("配置文件")]),t._v("，就以为是详解了～")]),t._v(" "),e("p",[t._v("其实每个参数都有比较复杂的用法，详情可见 Nginx 的 "),e("a",{attrs:{href:"https://nginx.org/en/docs/dirindex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("directives"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"listen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listen","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#listen",target:"_blank",rel:"noopener noreferrer"}},[t._v("listen"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("需要监听的端口。")]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[t._v("在官网的链接中需要注意的是：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Syntax（语法），语法没啥好说的。")])]),t._v(" "),e("li",[e("p",[t._v("Context（上下文），上下文即大括号 "),e("code",[t._v("{}")]),t._v(" 的范围内，如 listen 仅可以写在 server 上下文中，不能写在 http 和 location 的上下文中。")])])])]),t._v(" "),e("h2",{attrs:{id:"server-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-name","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name",target:"_blank",rel:"noopener noreferrer"}},[t._v("server_name"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("此处为是 core module 的介绍，其余模块与之相关的也有很多。")]),t._v(" "),e("p",[t._v("这边比较重要的是 Server 的匹配顺序：")]),t._v(" "),e("ol",[e("li",[t._v("精确匹配；")]),t._v(" "),e("li",[e("code",[t._v("*")]),t._v(" 在前的泛域名；")]),t._v(" "),e("li",[e("code",[t._v("*")]),t._v(" 在后的泛域名；")]),t._v(" "),e("li",[t._v("按文件中的顺序匹配正则表达式域名；")]),t._v(" "),e("li",[t._v("default server  "),e("Badge",{attrs:{text:"重点",type:"error"}}),t._v("。未声明时指向文件第一个 server。")],1)]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[t._v("在之前有多个项目时，有部分应用限制 IP 访问，结果我在删除原项目地址后，忘记关闭 DNS 解析了，恰好限制访问的应用 server 又排在第一个，时隔好久访问自己的域名才发现裸奔很久了 😭。")])]),t._v(" "),e("h3",{attrs:{id:"_1-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 示例")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlisten    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 listen 后追加，而非 server_name")]),t._v("\n\tserver_name  www.shanyuhai.top shanyuhai.top"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_2-注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 注意")]),t._v(" "),e("p",[t._v("在部分文章中注意到，如果你想要提高自己的网站的知名度，那么还需要配合 301 进行跳转，否则该项设置会导致搜索引擎收录他人的站点，而非你的。")]),t._v(" "),e("h2",{attrs:{id:"rewrite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rewrite","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite",target:"_blank",rel:"noopener noreferrer"}},[t._v("rewrite"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("该指令可以用于修改访问的 URL，对应的语法为：")]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[t._v("rewrite regex replacement [flag]")])]),t._v(" "),e("p",[t._v("flag 具有以下参数：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("flag")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("last")]),t._v(" "),e("td",[t._v("使用更改的 URI 匹配新位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("break")]),t._v(" "),e("td",[t._v("停止处理当前的指令集。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("redirect")]),t._v(" "),e("td",[t._v("返回 302 （临时）重定向。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("permanent")]),t._v(" "),e("td",[t._v("返回 301 （永久）重定向。")])])])]),t._v(" "),e("p",[t._v("近期在升级站点到 https 时就用到了该语法：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("rewrite ^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" https://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" permanent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 及 Certbot 自动配置的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blog.shanyuhai.top"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# managed by Certbot")]),t._v("\n")])])]),e("h2",{attrs:{id:"location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#location",target:"_blank",rel:"noopener noreferrer"}},[t._v("location"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("可以注意到 "),e("code",[t._v("Context:\tserver, location")]),t._v("，也就是 location 可以嵌套，该项之前都没有注意到过。比较特殊的是 "),e("code",[t._v("@")]),t._v(" 前缀定义命名位置。这样的位置不用于常规请求处理，而是用于请求重定向，它们不能嵌套。")]),t._v(" "),e("p",[t._v("location 的匹配规则与常规的不一致，非正序匹配，也非倒序匹配，而是：")]),t._v(" "),e("blockquote",[e("p",[t._v("为了找到与给定请求匹配的位置，nginx首先检查使用前缀字符串（前缀位置）定义的位置。其中，选择并记住具有最长匹配前缀的位置。然后按照它们在配置文件中的出现顺序检查正则表达式。正则表达式的搜索在第一次匹配时终止，并使用相应的配置。如果未找到与正则表达式的匹配，则使用先前记住的前缀位置的配置。")])]),t._v(" "),e("h2",{attrs:{id:"auth-basic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth-basic","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("auth_basic"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("最基础的就是使用 allow、deny 来限制访问的 IP，如果对资源的私密性要求并不是那么高，那可以使用 auth_basic 来为对应的资源添加密码。")]),t._v(" "),e("h3",{attrs:{id:"_1-安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 安装依赖")]),t._v(" "),e("p",[t._v("环境为 Ubuntu Server 18.04。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/src/nginx/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" htpasswd -c /usr/local/src/nginx/passwd nginx_test "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建密码文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若缺乏依赖则提示，安装即可")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apache2-utils\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" htpasswd -c /usr/local/src/nginx/passwd nginx_test\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据提示输入密码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /usr/local/src/nginx/passwd "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])]),e("h3",{attrs:{id:"_2-配置-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 配置 Nginx")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Context:\thttp, server, location, limit_except")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选上下文如上")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/nginx/conf.d/blog.conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 server 上下文中添加")]),t._v("\nauth_basic "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入密码"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nauth_basic_user_file /usr/local/src/nginx/passwd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -s reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -t\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问 blog.shanyuhai.top 验证")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);