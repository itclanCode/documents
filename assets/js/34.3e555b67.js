(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{294:function(_,v,a){"use strict";a.r(v);var r=a(7),e=Object(r.a)({},function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"准备环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备环境","aria-hidden":"true"}},[_._v("#")]),_._v(" 准备环境")]),_._v(" "),a("p",[_._v("首先需要安装虚拟机，此处选用 "),a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[_._v("VirtualBox"),a("OutboundLink")],1),_._v("。")]),_._v(" "),a("p",[_._v("接着需要准备好 manjaro 的 ISO 文件，此处选用 "),a("a",{attrs:{href:"https://manjaro.org/download/kde/",target:"_blank",rel:"noopener noreferrer"}},[_._v("kde"),a("OutboundLink")],1),_._v(" 版本。")]),_._v(" "),a("h2",{attrs:{id:"虚拟机中加载-manjaro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机中加载-manjaro","aria-hidden":"true"}},[_._v("#")]),_._v(" 虚拟机中加载 manjaro")]),_._v(" "),a("ol",[a("li",[_._v("虚拟机安装完成后，点击新建；")]),_._v(" "),a("li",[_._v("输入名称，并选择 "),a("code",[_._v("Arch Linux")]),_._v(" 版本；")]),_._v(" "),a("li",[_._v("接下来是分配内存，当然是越大越好；")]),_._v(" "),a("li",[_._v("选择创建虚拟硬盘；")]),_._v(" "),a("li",[_._v("虚拟硬盘文件类型选择默认的 VDI；")]),_._v(" "),a("li",[_._v("虚拟硬盘控件选择动态分配即可；")]),_._v(" "),a("li",[_._v("虚拟硬盘的大小推荐 30G 以上；")]),_._v(" "),a("li",[_._v("接着就创建好一个空壳了；")]),_._v(" "),a("li",[_._v("还需要进一步配置虚拟机，选择对应的虚拟机点击设置；")]),_._v(" "),a("li",[_._v("选择 "),a("code",[_._v("系统 > 处理器")]),_._v(" 可以选择 CPU 的数量，同样是越多越好，但是不要影响到电脑本身，量力而为；")]),_._v(" "),a("li",[_._v("选择 "),a("code",[_._v("存储 > 控制器")]),_._v(" 可以选择 ISO 文件，选择之前下载的 Manjaro ISO 文件，切记不要装成其余的了；")]),_._v(" "),a("li",[_._v("点击 OK，这样就基础配置好了，如果你想要虚拟机拥有本地网络的话，可以在网络中修改为 "),a("code",[_._v("桥接网卡")]),_._v(" 。")])]),_._v(" "),a("h2",{attrs:{id:"安装-manjaro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-manjaro","aria-hidden":"true"}},[_._v("#")]),_._v(" 安装 Manjaro")]),_._v(" "),a("p",[_._v("启动后会进入欢迎界面，修改下时区，键盘位置，语言，当然比较重要的是记得把驱动选择为闭源（nofree），这些完成后选择 Boot 就可以启动了。")]),_._v(" "),a("p",[_._v("进入系统后，会重新进行一些配置，比较重要的就是分区了，虚拟机的话会有一个完整的分区可供选择，直接选择抹除磁盘就可以了。")]),_._v(" "),a("p",[_._v("如果是实体机器的话，如果不需要双系统存在也可以选择抹除磁盘。")]),_._v(" "),a("p",[_._v("双系统的话就需要手动分区了，选中你之前空出来的那个硬盘块。核心的分区有三个：")]),_._v(" "),a("ol",[a("li",[_._v("首先是内核，启动引导，选择 "),a("code",[_._v("/boot")]),_._v(" 然后分配给 512MB 即可，你要再给多一点也没有问题。它平时并不参与运行，尽在启动和内核升级时会用到；")]),_._v(" "),a("li",[_._v("接着是交换分区，选择 "),a("code",[_._v("Swap")]),_._v(" 然后分配给 20GB 即可。虽然现在电脑的内存已经很大了，但是为了以防万一还是分吧，主要是当你电脑休眠时一些临时文件。")]),_._v(" "),a("li",[_._v("最后是主要的一项了， "),a("code",[_._v("/")]),_._v(" 将剩余的控件全部分给它吧。虽然有很多人会进一步分一个 "),a("code",[_._v("/home")]),_._v("，但个人觉得没有必要。")])]),_._v(" "),a("p",[_._v("最后，安装速度与你的网速、电脑性能成正比，如果你等待半天都无法安装成功，那么可以直接把网线拔了（因为会默认进行系统软件更新），稍等片刻就会安装成功了。")])])},[],!1,null,null,null);v.default=e.exports}}]);