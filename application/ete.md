# ETE

?> 为页面测试而生， 彻底解决页面测试的繁琐操作，提升测试乐趣！

<iframe src="//player.bilibili.com/player.html?aid=759967057&bvid=BV1764y1v7is&cid=392078147&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" framespacing="0"  height="600"  style=”width: 100%;height: 500px; max-width: 100%;align:center;padding:20px 0;” > </iframe>

## 解决痛点

## 设计流程图

### 浏览器录制脚本流程图

?> ete 测试，需要依赖操作者操作，收集录制脚本信息，所以需要安装 chrome 插件，通过启用插件，收集用户操作信息，生成 ete 测试需要的脚本文件。

[eTest 插件商店下载](https://chrome.google.com/webstore/detail/etest/nkjmdclbdiljcaeepkclamgboojhdnhi?hl=zh-CN) [eTest github 下载](https://github.com/onepiece-smile/docs/releases)

![logo](../img/chrome.png)

### ETE 执行脚本流程图

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

## 快速开始

### 下载 chrome 插件

[eTest 插件商店下载](https://chrome.google.com/webstore/detail/etest/nkjmdclbdiljcaeepkclamgboojhdnhi?hl=zh-CN)

[eTest 插件 github 下载](https://github.com/onepiece-smile/docs/releases)

### 录制脚本文件

<img src="../docs/img/chrome/chrome01.png"  class='etest-col-8' />
<img src="../docs/img/chrome/chrome02.png"  class='etest-col-8' />
<img src="../docs/img/chrome/chrome03.png"  class='etest-col-8' />
<img src="../docs/img/chrome/chrome04.jpeg"  class='etest-col-2' />
<img src="../docs/img/chrome/chrome05.jpeg"  class='etest-col-8' />

        事件 单击事件：click
        事件 双击事件：dbclick
          事件 鼠标hover：'hover
          事件 滚动至此：scroll


        文本断言
            '包含 %s', 'include'},
            '不包含 %s',  'exclude'}

        //number
               大于 ,  greater
              等于   equal
               小于 less


        //属性断言 class、id、 data....
                         包含 `include ,
                   不包含exclude

### ete 设置启动

<img src="../docs/img/ete/ete01.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete02.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete03.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete04.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete05.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete06.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete07.jpeg" class="etest-col-8" />
<img src="../docs/img/ete/ete08.jpeg" class="etest-col-8" />

### 添加全局配置

<img src="../docs/img/ete/ete09.jpeg" class="etest-col-8" />
