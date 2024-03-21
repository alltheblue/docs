# ETE

?> 为页面测试而生， 彻底解决页面测试的繁琐操作，提升测试乐趣！

<iframe src="//player.bilibili.com/player.html?aid=759967057&bvid=BV1764y1v7is&cid=392078147&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" framespacing="0"  height="600"  style=”width: 100%;height: 500px; max-width: 100%;align:center;padding:20px 0;” > </iframe>

## 优势

1. 测试脚本通过录制实现，上手简单，效率高
2. 上手方便，不需要额外的编码能力，使用多种方式定位dom
3. 测试文件管理复用方便，维护成本低

## 解决痛点

市面上的 ete 测试框架很多，但对许多测试人员的编码能力有一定的要求，而且随着业务复杂度的提高，每一次迭代都可能导致重新编写测试脚本修改，可维护性很差，迁移能力较弱，测试成本高，结合以上问题，我们对 ete 测试框架做了二次封装，尽可能减少对测试人员编码的要求，满足日常多场景的测试，需要测试人员在 chrome 浏览器在开启 eTest 脚本录制工具，进行操作，便可生成测试人员想要的测试脚本，解放测试人员的臃肿烦躁的重复测试场景，让 ete 测试变的充满乐趣。使测试人员有更多的精力做更深层次的测试。

## 流程设计图

#### 浏览器录制脚本流程图

![logo](../img/chrome.png)

ete 测试，需要依赖操作者操作，收集录制脚本信息，所以需要安装 chrome 插件，通过启用插件，收集用户操作信息，生成 ete 测试需要的脚本文件。

!> Chrome 插件下载方式 [eTest 插件商店下载](https://chrome.google.com/webstore/detail/etest/nkjmdclbdiljcaeepkclamgboojhdnhi?hl=zh-CN) 或者 [eTest github 下载](https://github.com/alltheblue/docs/releases)

#### ETE 执行脚本流程图

![logo](../img/etetest.png)

## 支持功能

1. 支持 iframe 多嵌套操作 , 支持动态 iframe 插入问题 :heavy_check_mark:
2. 支持关闭 alert 提示 :heavy_check_mark:
3. 支持等待 dom 元素显示 :heavy_check_mark:
4. 支持页面断言操作，数字类型的大于小于等于操作 :heavy_check_mark:
5. 支持生成测试报告 :heavy_check_mark:
6. 支持运行时页面请求错误收集 :heavy_check_mark:
7. 支持延时操作处理 :heavy_check_mark:
8. 支持运行自动化无头模式 :heavy_check_mark:
9. 支持自动等待网络加载完成后操作 :heavy_check_mark:
10. 支持阻止默认事件后，依然可以获取事件操作 :heavy_check_mark:
11. 支持事件被阻止依旧可以收集 :heavy_check_mark:
12. 支持断言错误自动截图 :heavy_check_mark:
13. 支持在线修改 json 数据 :heavy_check_mark:
14. 支持用例拖拽排序 :heavy_check_mark:
15. 支持导出性能优化报告（lighthouse） :heavy_check_mark:
16. 支持收集浏览器的前进后退刷新操作 :heavy_check_mark:
17. 支持多 tab 页间的切换 :heavy_check_mark:
18. 支持测试用例每一步的操作截图 :heavy_check_mark:
19. 支持高级配置自定义对输入、断言修改 :heavy_check_mark:
20. 支持获取页面的文本设置当前执行的变量 :heavy_check_mark:
21. 支持自动收集页面滚动数据 :heavy_check_mark:
22. 支持页面快捷键操作 :heavy_check_mark:
23. 支持测试用例分组维护 :heavy_check_mark:
24. 支持测试文件重命名修改 :heavy_check_mark:
25. 支持导入导出文件信息 :heavy_check_mark:
26. 支持设置缓存信息 :heavy_check_mark:
27. 支持可视区域生成图片对比生成测试结果 :heavy_check_mark:
28. 支持测试脚本按步骤调试 :heavy_check_mark:
29. ete自动化测试报告，断言错误 支持视频回放查看结果 :heavy_check_mark:
30. 支持在鉴权、登录请求下收集网站性能信息 :heavy_check_mark:
31. 支持测试用例拖拽功能 :heavy_check_mark:
32. 支持自定义函数、自定义插件扩展:heavy_check_mark:
33. 支持多浏览器切换运行自动化测试 Chrome\Edge :heavy_check_mark:
34. 支持测试报告图片放大预览:heavy_check_mark:
35. 支持接口返回自定义请求值校验:heavy_check_mark:
35. 支持mock请求返回值:heavy_check_mark:
36. 支持文件上传:heavy_check_mark:

## 快速开始

### 下载 chrome 插件

!> Chrome 插件下载方式 [eTestv1.3.5 github 下载](https://github.com/alltheblue/docs/releases/tag/untagged-f15d163a3542ae9bd384)

### 设置插件开启无痕模式

![录制脚本文件](../img/ete/ete22.jpeg '::etest-col-5')

打开浏览器`管理扩展程序`选择`eTest`插件，点击`详情`，打开`在无痕模式下启用`，即可。

![录制脚本文件](../img/ete/ete23.jpeg '::etest-col-8')
![录制脚本文件](../img/ete/ete21.png '::etest-col-8')

### 录制脚本文件

![录制脚本文件](../img/chrome/chrome01.png '::etest-col-8')

打开右上角的 chrome 插件 点击小图标出现 `start` 状态，表示已启动测试脚本录制

?> 由于在脚本回放打开的是无痕浏览模式，所以在录制脚本的时候请先清除历史记录和缓存数据，以保证回放的时候的正确性，或者开启无痕模式录制脚本信息

![录制脚本文件](../img/chrome/chrome02.png '::etest-col-8')

点击网页操作，eTest 插件提示 `添加一条操作事件` ，说明 eTest 插件正在记录用户在页面的操作。

!> 点击时间， 文本框，下拉框改变 都会触发该动作

![录制脚本文件](../img/chrome/chrome03.png '::etest-col-8')

选中文本，鼠标右键，选择期望的断言结果

#### 断言值

根据用户选中的文本自动判断 `string`或者 `number`类型，然后自动生成需要的测试用例菜单列表，

**注意**

- 选择文本时，会自动选择当前标签内的全部内容。
- 如果选中的文本是含有两个相邻标签的内容，则会默认选中第一个标签的全部内容。
- 如果选中的文本内部包含多个标签 则会判断满足一定条件 最多 3 个子标签并且小于 200 字以内。

##### 事件

1. load: 刷新
1. click:单击事件
1. dbclick:双击事件
1. hover:鼠标 hover
1. scroll:滚动至此
1. 生成全局变量

!> 高级用法 `生成全局变量` 在需要的一些场景需要对页面的值做输入处理

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

!> 如果测试脚本用例小于 2 条，则不会生成脚本信息

### 生成脚本文件

通过`chrome`插件生成的脚本文件如下格式：

```json
[
  {
    "active": true,
    "audible": false,
    "autoDiscardable": true,
    "discarded": false,
    "favIconUrl": "https://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg",
    "groupId": -1,
    "height": 882,
    "highlighted": true,
    "id": 83891737,
    "incognito": false,
    "index": 64,
    "mutedInfo": { "muted": false },
    "openerTabId": 83891734,
    "pinned": false,
    "selected": true,
    "status": "complete",
    "title": "百度一下，你就知道",
    "url": "https://www.baidu.com/",
    "width": 1680,
    "windowId": 83891251,
    "action": "start",
    "indexNum": 0,
    "date": 1678243527820,
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    "cookies": [
      {
        "domain": "www.baidu.com",
        "expirationDate": 1711066469,
        "hostOnly": true,
        "httpOnly": false,
        "name": "MSA_WH",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "3901244"
      }
    ],
    "localStorage": {
      "BAIDU_PRIVATE": "16ww496207",
      "squarePop": "1",
      "___ds_storage__eqid": "xxx|1679995377511",
      "index_ls_qid": "xxx"
    },
    "sessionStorage": {
      "BAIDU_PRIVATE": "xxx"
    },

    "isMobile": false,
    "hasTouch": false,
    "deviceScaleFactor": 1,
    "type": "start"
  },
  {
    "x": 505.5,
    "y": 211.671875,
    "url": "https://www.baidu.com/",
    "date": 1678243529332,
    "height": 44,
    "xpath": "//*[@id=\"kw\"]",
    "width": 550,
    "value": "",
    "clientX": 695,
    "clientY": 234,
    "selector": "document > html > body > div > div > div > div > div > form > span > input",
    "iframe": "",
    "indexNum": 1,
    "innerHtml": "",
    "localName": "input",
    "localNameType": "text",
    "type": "click"
  },
  {
    "x": 505.5,
    "y": 211.671875,
    "url": "https://www.baidu.com/",
    "date": 1678243539976,
    "height": 38,
    "xpath": "//*[@id=\"kw\"]",
    "width": 471,
    "value": "你好",
    "clientX": 695,
    "clientY": 234,
    "selector": "document > html > body > div > div > div > div > div > form > span > input",
    "iframe": "",
    "indexNum": 2,
    "innerHtml": "",
    "localName": "input",
    "localNameType": "text",
    "type": "change"
  },
  {
    "x": 725,
    "y": 15,
    "url": "https://www.baidu.com/",
    "date": 1678243540156,
    "height": 40,
    "xpath": "//*[@id=\"su\"]",
    "width": 112,
    "value": "百度一下",
    "clientX": 783,
    "clientY": 36,
    "selector": "document > html > body > div > div > div > div > div > form > span > input",
    "iframe": "",
    "indexNum": 3,
    "innerHtml": "",
    "localName": "input",
    "localNameType": "submit",
    "type": "click"
  },
  {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    "isMobile": false,
    "hasTouch": false,
    "deviceScaleFactor": 1,
    "type": "start",
    "active": true,
    "audible": false,
    "autoDiscardable": true,
    "discarded": false,
    "favIconUrl": "https://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg",
    "groupId": -1,
    "height": 882,
    "highlighted": true,
    "id": 83891737,
    "incognito": false,
    "index": 64,
    "mutedInfo": { "muted": false },
    "openerTabId": 83891734,
    "pinned": false,
    "selected": true,
    "status": "complete",
    "title": "百度一下，你就知道",
    "url": "https://www.baidu.com/s?wd=%E4%BD%A0%E5%A5%BD&rsv_spt=1&rsv_iqid=0xece676f10009f696&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_dl=tb&rsv_sug3=10&rsv_sug1=10&rsv_sug7=101&sug=%25E4%25BD%25A0%25E5%25A5%25BD%2520%25E6%259D%258E%25E7%2584%2595%25E8%258B%25B1&rsv_n=1&rsv_btype=i&prefixsug=%25E4%25BD%25A0%25E5%25A5%25BD&rsp=0&inputT=9238&rsv_sug4=10826",
    "width": 1680,
    "windowId": 83891251,
    "action": "replacePage",
    "indexNum": 4,
    "date": 1678243540180
  },
  {
    "xpath": "//html",
    "iframe": "",
    "selector": "document",
    "scrollTop": 594,
    "scrollLeft": 0,
    "type": "scrollWin",
    "url": "https://www.baidu.com/s?wd=%E4%BD%A0%E5%A5%BD&rsv_spt=1&rsv_iqid=0xece676f10009f696&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_dl=tb&rsv_sug3=10&rsv_sug1=10&rsv_sug7=101&sug=%25E4%25BD%25A0%25E5%25A5%25BD%2520%25E6%259D%258E%25E7%2584%2595%25E8%258B%25B1&rsv_n=1&rsv_btype=i&prefixsug=%25E4%25BD%25A0%25E5%25A5%25BD&rsp=0&inputT=9238&rsv_sug4=10826",
    "indexNum": 5,
    "date": 1678243545352
  }
]
```

#### 关键 key

| key        | 描述                                                                |
| ---------- | ------------------------------------------------------------------- |
| url        | 当前打开的 URL 地址信息                                             |
| x          | 获取当前操作的 dom 位置 X 轴坐标                                    |
| y          | 获取当前操作的 dom 位置 Y 轴坐标                                    |
| width      | 当前录制的浏览器的宽度或者 获取当前操作的 dom 的宽度                |
| height     | 当前录制的浏览器的高度或者 获取当前操作的 dom 的高度                |
| xpath      | 获取当前操作的 dom 的唯一地址                                       |
| selector   | 获取当前操作的 dom 的路径信息                                       |
| clientX    | 获取当前操作的 dom 距离浏览器视口的 X 轴距离                        |
| clientY    | 获取当前操作的 dom 距离浏览器视口的 Y 轴距离                        |
| type       | 获取当前操作的 dom 操作类型 click、change、scrollWin、load、dbclick |
| date       | 当前操作的 dom 操作录入的时间                                       |
| iframe     | 当前网页是否嵌有 iframe 地址                                        |
| indexNum   | 当前测试用例的索引                                                  |
| scrollTop  | 如果触发了 `type`为`scrollWin`需要记录滚动的上下位置                |
| scrollLeft | 如果触发了 `type`为`scrollWin`需要记录滚动的左右位置                |

### ete 录入脚本&启动

![ete 设置](../img/ete/ete26.jpeg '::etest-col-8')

打开集成测试 `创建项目`然后`点击项目 进入ETE`,可以通过点击新增 导入文件或者创建分组

!> **注意**：导入文件会覆盖项目下的 ete 之前维护的脚本文件，请谨慎操作

![ete 设置](../img/ete/ete27.jpeg '::etest-col-8')

新建分组，有利于分类归纳维护测试脚本文件，

![ete 设置](../img/ete/ete28.jpeg '::etest-col-8')

上传测试脚本文件后可以按照分组归纳，如果需要调整分组，文件排序 按住 `分组`, `文件` 拖动即可实现排序,

!> 注意：测试的文件需按顺序执行，如果出现断层则会影响测试结果。

![ete 设置](../img/ete/ete24.jpeg '::etest-col-8')

测试文件上传时默认 `选中`; 如果没有勾选选中，在执行测试用例的过程中，则不被执行当前测试文件 支持 `分组`、`单个脚本`勾选

![ete 设置](../img/ete/ete29.jpeg '::etest-col-8')

对`分组`、`脚本`的 `删除` 、`重命名` 操作，对后续的展示测试报告的时，更加友好

![ete 设置](../img/ete/ete04.jpeg '::etest-col-8')

运行 ete 测试过程中，如果需要停止任务，可点击 `停止运行`，结束此次运行，运行结束后，生成测试报告`报告名称` 是项目名称加当前时间拼接成的，模式分为`自动`和`手动` 两种模式，自动：是定时任务运行的；手动：是用户自己运行的用例；

!> 注意：首次运行自动化前，请检查本地是否按装chrome 浏览器

### 测试结果

![ete 设置](../img/ete/ete04.jpeg '::etest-col-8')

测试报告列表，会展示一些关键信息 ,`断言结果`,`请求错误`,`页面错误`,`用时` 汇总信息

![ete 设置](../img/ete/ete30.jpg '::etest-col-8')

展示测试报告详情，解析也页面 `断言结果`、 `请求接口错误` 、`页面错误` ，如果断言结果发生； 错误，则会**截图**展示错误结果，方便开发者查看断言错误原因；断言结果通过分组+ 脚本名称+ 脚本索引，可以更加快速的定位到测试脚本信息，页面在执行的过程中，出现了请求错误，则会抓取请求地址以及错误类型，展现在页面上； 页面错误：在运行 ete 过程中出现的错误，加载超时、找不到元素等，都会被列举出来。

### 全局配置

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

### 录制文件上传

测试用例中有些测试场景需要支持文件上传，针对这个测试用例，可能需要开发者code代码

```javascript
{
	"xpath": "//*[@id="page-content"]/div/div/div[1]/div/div[1]/div[1]/div/div[1]/input",
  "filePath": "/Users/xxx/Desktop/desktop/myproject/load.png",
  "type": "upload",
 	"iframe": "",
 	"selector": "document",
 	"url": "https://www.xiaomiyoupin.com/",
}
```

#### 关键 key

| key        | 描述                                                                |是否必填|
| ---------- | ------------------------------------------------------------------- |--------|
| url        | 当前打开的 URL 地址信息                                             | Y   |
| filePath   | 上传文件路径地址，支持绝对路径，或者默认桌面文件                      |Y   |
| type       | 获取当前操作的 dom 操作类型 upload                                |Y   |
| xpath      | 获取当前操作的 dom 的唯一地址                                       |Y    |
| selector   | 获取当前操作的 dom 的路径信息                                       |N    |
| iframe     | 当前网页是否嵌有 iframe 地址                                        |N  |



!> 如果修改的测试用例信息过多，建议重新录制脚本信息，防止文件执行过程报错，影响测试结果。

![ete 添加全局配置](../img/ete/ete25.jpg '::etest-col-8')

1. 无头模式：配置启动测试是否自动在无头模式下运行 默认是 `fasle`
2. 开启调试：配置开启调试模式后，仅在手动执行下生效，需要通过快捷键`ctrl+f`执行下一步默认是 `fasle`
3. 性能分析： 浏览器测试时，是否收集性能分析报告，**定时任务不会开启性能分析** 默认是 `fasle`
4. 行为快照： 对于页面的每一步操作都会生成快照,待用力执行完毕后，会自动导出到桌面，**定时任务不会开启行为快照** ，默认是 `fasle`
5. 设置缓存：`cookies`、`localStorage`中，这种情况只要开启此功能，会在开启页面的时候将数据塞进浏览器中，对 `sessionStorage`缓存无效，并且多个脚本同一个 `key`不同的`value`有优先使用第一个，
   `cookies`、`localStorage`中，这种情况只要开启此功能，会在开启页面的时候将数据塞进浏览器中，对 `sessionStorage`缓存无效，并且多个脚本同一个 `key`不同的`value`有优先使用第一个，
6. 开启高级配置：`开启高级配置` 需要再`高级配置`中，配置环境变量，不开启`高级配置 `中的配置的变量不被生效
7. 开启插件配置：`开启插件配置` 需要再`高级配置`中，配置插件配置，不开启`高级配置 `中的插件配置不被生效
8. 开启环境配置： ：`开启环境配置：` 需要再`高级配置`中，配置环境配置，不开启`高级配置 `中的插件配置不被生效
9. 超时时间：浏览器在操作时，等待下一个操作的最长时间 默认是 `60s`
10. 延迟时间：由于一些特色场景需要设置长时间等待，最大不得超过`60s`， `延迟时间`与 `超时时间`同时设置延迟时间不得超过超时时间

![添加全局配置](../img/ete/ete19.jpeg '::etest-col-8')

### 高级配置

#### 环境配置

对于多环境的测试问题，可以通过配置环境域名来实现在不同的环境下执行测试用例，但是需要保证在执行的测试用例的数据是一致的

![高级配置](../img/ete/ete31.jpeg '::etest-col-8')

首先配置需要区分的环境变量

![高级配置](../img/ete/ete32.jpeg '::etest-col-8')

添加需要配置的替换的环境名称

![高级配置](../img/ete/ete33.jpeg '::etest-col-8')

启用环境变量

#### 变量配置

再执行自动化测试任务中有些入参是不能重复提交的，这就导致了我们录入的脚本信息，再跑定时任务的过程中，需要自定义配置入参

![高级配置](../img/ete/ete34.jpeg '::etest-col-8')

1. 手动新增环境变量
2. 来源分为`手动设置`（可以自定义配置环境变量）、 `页面取值`（通过录制脚本，获取需要取值的文本作为环境变量使用，可以修改）
3. 测试可以对于生成的环境变量取值是否符合预期

变量名称： 必填 唯一长度不能超过 20 位
取值方式：非必填 测试工具提前内置的函数
固定值：非必填 `取值方式` 为`固定值`时显示该文本，可录入该值
合并方式： 分为 `前缀`、`后缀`、`替换` ，默认后缀；

##### 取值方式

1.  固定值:自定义一个固定的值
2.  页面取值： 脚本录制生成的变量（页面取值），自定义不可设置,
3.  随机字母 2 位,
4.  随机字母 4 位,
5.  随机字母 6 位,
6.  随机字母 8 位',
7.  随机数 2 位',
8.  随机数 4 位',
9.  随机数 6 位',
10. 随机数 8 位',
11. 日期:分秒
12. 日期:时分
13. 日期:月日时
14. 日期:月日时分
15. 日期:年月日时分
16. 日期:年月日时分秒

![高级配置](../img/ete/ete35.jpeg '::etest-col-8')

系统可设置环境变量的值为`value`，点击`value`既可以设置变量，选择需要设置的变量名称 保存即可

#### 插件配置

为了增强 ETE 测试功能，满足更多的测试场景，我们引入了扩展功能，方便测试自身设定的场景，我们提供自定义插件来满足需求；通过可插拔的使用方式，提升 ete 的扩展能力，全方位覆盖测试场景 可以参考[plugin](/application/plugin)。

![高级配置](../img/ete/ete36.jpeg '::etest-col-8')

![高级配置](../img/ete/ete37.jpeg '::etest-col-8')

选择 插件需要执行的生命周期

![高级配置](../img/ete/ete38.jpeg '::etest-col-8')

?> 配置完成高级配置后，必须在全局配置开启 `开启高级配置`、`开启插件配置`、`开启环境配置` 总开关，否则高就配置就不会生效，
