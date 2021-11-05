# ETE

?> 为页面测试而生， 彻底解决页面测试的繁琐操作，提升测试乐趣！

<iframe src="//player.bilibili.com/player.html?aid=759967057&bvid=BV1764y1v7is&cid=392078147&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" framespacing="0"  height="600"  style=”width: 100%;height: 500px; max-width: 100%;align:center;padding:20px 0;” > </iframe>

## 解决痛点

市面上的 ete 测试框架很多，但对许多测试人员的编码能力有一定的要求，而且随着业务复杂度的提高，每一次迭代都可能导致重新编写测试脚本修改，可维护性很差，迁移能力较弱，测试成本高，结合以上问题，我们对 ete 测试框架做了二次封装，尽可能减少对测试人员编码的要求，满足日常多场景的测试，需要测试人员在 chrome 浏览器在开启 eTest 脚本录制工具，进行操作，便可生成测试人员想要的测试脚本，解放测试人员的臃肿烦躁的重复测试场景，让 ete 测试变的充满乐趣。使测试人员有更多的精力做更深层次的测试。

## 流程设计图

#### 浏览器录制脚本流程图

![logo](../img/chrome.png)

ete 测试，需要依赖操作者操作，收集录制脚本信息，所以需要安装 chrome 插件，通过启用插件，收集用户操作信息，生成 ete 测试需要的脚本文件。

!> Chrome 插件下载方式 [eTest 插件商店下载](https://chrome.google.com/webstore/detail/etest/nkjmdclbdiljcaeepkclamgboojhdnhi?hl=zh-CN) 或者 [eTest github 下载](https://github.com/onepiece-smile/docs/releases)

#### ETE 执行脚本流程图

![logo](../img/etetest.png)

## 支持功能

1. 支持 iframe 多嵌套操作 , 支持动态 iframe 插入问题 :heavy_check_mark:
2. 支持关闭 alert 提示 :heavy_check_mark:
3. 支持等待 dom 元素显示 :heavy_check_mark:
4. 支持页面断言操作，数字类型的大于小于等于操作 :heavy_check_mark:
5. 支持生成测试报告 :heavy_check_mark:
6. 支持运行时页面错误收集 :heavy_check_mark:
7. 支持延时操作处理 :heavy_check_mark:
8. 支持无头模式 :heavy_check_mark:
9. 支持录屏回放、 :heavy_check_mark:
10. 支持等待网络加载完成后操作 :heavy_check_mark:
11. 解决 xpath 查找 svg 问题 :heavy_check_mark:
12. 支持阻止默认事件后，依然可以获取事件操作 :heavy_check_mark:
13. 打包内置浏览器 :heavy_check_mark:
14. 支持多页录制 :heavy_check_mark:
15. 支持事件被阻止依旧可以收集 :heavy_check_mark:
16. 支持错误截图 :heavy_check_mark:
17. 支持在线修改 json 数据 :heavy_check_mark:
18. 支持用例拖拽排序 :heavy_check_mark:
19. 支持导出性能优化报告（lighthouse） :heavy_check_mark:
20. 支持执行操作之前记录跟踪 :white_check_mark:

## 快速开始

### 下载 chrome 插件

!> Chrome 插件下载方式 [eTest 插件商店下载](https://chrome.google.com/webstore/detail/etest/nkjmdclbdiljcaeepkclamgboojhdnhi?hl=zh-CN) 或者 [eTest github 下载](https://github.com/onepiece-smile/docs/releases)

### 录制脚本文件

![录制脚本文件](../img/chrome/chrome01.png '::etest-col-8')

打开右上角的 chrome 插件 点击小图标出现 `start` 状态，表示已启动测试脚本录制

![录制脚本文件](../img/chrome/chrome02.png '::etest-col-8')

点击网页操作，eTest 插件提示 `添加一条操作事件` ，说明 eTest 插件正在记录用户在页面的操作。

!> 点击时间， 文本框，下拉框改变 都会触发该动作

![录制脚本文件](../img/chrome/chrome03.png '::etest-col-8')

选中文本，鼠标右键，选择期望的断言结果

#### 断言值

根据用户选中的文本自动判断 `string`或者 `number`类型，然后自动生成需要的测试用例菜单列表，

?> 1. 选择文本时，会自动选择当前标签内的全部内容。 2. 如果选中的文本是含有两个相邻标签的内容，则会默认选中第一个标签的全部内容。

##### 事件

1. click:单击事件
1. dbclick:双击事件
1. hover:鼠标 hover
1. scroll:滚动至此

##### 文本断言

1. include:包含当前值
1. exclude:不包含当前值

##### 数字断言

1. greater：大于当前值
1. equal：等于 当前值
1. less：小于当前值

##### 属性值断言(class、id、data、 type....)

1. include:包含当前值
1. exclude:不包含当前值

![属性值断言](../img/chrome/chrome05.jpeg '::etest-col-8')

点击右上 eTest 图标，结束测试脚本录制，并且生成测试脚本文件，下载到本地

?> 如果测试脚本用例小于 2 条，则不会

### ete 设置启动

![ete 设置](../img/ete/ete01.jpeg '::etest-col-8')

打开集成测试 `点击上传json` 按钮,上传测试脚本，支持批量上传文件，上传后的文件支持拖动排序，

!> 注意：测试的文件需按顺序执行，如果出现断层则会影响测试结果。

![ete 设置](../img/ete/ete03.jpeg '::etest-col-8')

测试文件支持默认 `选中`; 如果没有选中，在执行测试用例的过程中，则不被执行

![ete 设置](../img/ete/ete04.jpeg '::etest-col-8')

运行 ete 测试过程中，如果需要停止任务，可点击 `停止运行`，结束此次运行，运行结束后，生成测试报告`报告名称` 是项目名称加当前时间拼接成的，模式分为`自动`和`手动` 两种模式，自动：是定时任务运行的；手动：是用户自己运行的用例；

![ete 设置](../img/ete/ete05.jpeg '::etest-col-8')

展示测试报告详情，解析也页面 `断言结果`、 `请求接口错误` 、`页面错误` ，断言结果错误，则会**截图**展示错误结果，方便用户查看断言错误原因；页面在执行的过程中，出现了请求错误，则会抓取请求地址以及错误类型，展现在页面上； 页面错误：在运行 ete 过程中出现的错误，加载超时、找不到元素等，都会被列举出来。

![ete 设置](../img/ete/ete11.jpeg '::etest-col-8')

设置`性能分析`后，ete 在测试结束时也会导出页面性能的分析报告，开发人员可以通过分析报告，参考[web.dev](https://web.dev/performance-scoring/?utm_source=lighthouse&utm_medium=node)完成对页面的性能优化，提升了页面的加载性能的优化。

![ete 设置](../img/ete/ete08.jpeg '::etest-col-8')

点击 `文件名称`,弹出测试用例详细信息，可以对 测试用例文件进行简单的编辑操作，如`assertions` 表示断言信息，`assertions.action`表示断言结果, 如果熟悉[**断言** ](#断言值)可直接修改断言信息，保存运行提高测试的执行效率

```json
{
  "editable": false,
  "frameId": 0,
  "linkUrl": "http://news.baidu.com/",
  "menuItemId": "include",
  "pageUrl": "https://www.baidu.com/",
  "selectionText": "新闻",
  "type": "assert",
  "xpath": "//*[@id=\"s-top-left\"]",
  "iframe": "",
  "assertions": {
    "value": "新闻",
    "action": "include"
  },
  "indexNum": 12
}
```

!> 如果修改的测试用例信息过多，建议重新录制脚本信息，防止文件执行过程报错，影响测试结果。

### 添加全局配置

![添加全局配置](../img/ete/ete12.png '::etest-col-8')

1. 无头模式：配置启动测试是否自动在无头模式下运行 默认是 `fasle`
<!-- 2. 开启录制：配置启动测试是否录制浏览器操作视频 默认是 `fasle` -->
2. 性能分析： 浏览器测试时，是否收集性能分析报告， 默认是 `fasle`
3. 超时时间： 浏览器在操作时，等待下一个操作的最长时间 默认是 `30s`
