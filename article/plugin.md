对于 ete、api、 压力测试来说，由于项目的复杂度不同，流程不同，我们虽然尽可能的穷举所有的测试场景，但是对于特殊的测试流程依旧无法更好的支持，如果对于一些特殊的测试场景做兼容处理，那么我们会陷入无限期的需求开发迭代，就无法抽身对自动化测试做其他功能的开发，最后我们会被这些特殊的需求而缠身，最终导致项目因为过于臃肿，而维护成本上升，BUG 量急剧上升。

为了彻底解决根本问题，我们做了大量的技术方案调研，参考市面上的优秀开源项目设计方案，最终我们参考`webpack`的 plugin 功能，通过`tapable`来管理插件，大大提高了自动化的测试工具的使用场景，也给使用者更多的想象空间。

## 思路

![WechatIMG361.jpeg](https://upload-images.jianshu.io/upload_images/15080768-87d9c9d3d595d4ef.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

对于 ete、api、 压力测试，每个测试执行阶段都会向外暴露生命周期，开发者只需要了解每个生命周期暴露的参数和接收的参数，在插件扩展编辑器里按照要求自定以自己的插件即可。

![WechatIMG360.jpeg](https://upload-images.jianshu.io/upload_images/15080768-3e21c0fcae255be2.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后通过`高级配置`挂载到指定的生命周期，在运行项目前开启`开启插件配置 `，在运行项目的时候，会优先初始化插件配置，把插件挂载到相应的生命周期，当执行到当前生命周期的时候，内部会开辟一块沙箱执行插件，防止插件错误导致程序崩溃；这样就可以的实现测试场景的控制，大大的提高了测试工具的灵活性、实用性。

## 举例（ETE）

### ETE 插件执行流程图

![ete.jpeg](https://upload-images.jianshu.io/upload_images/15080768-ae67dc5ece148da9.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 生命周期钩子

1. 初始化参数前(initBefore)：自定义是否需要执行、 自定义 api、 修改配置参数(设置 无头模式，性能分析，行为快照，开启调试，高就配置，插件，超时时间)。
2. 初始化参数后(initAfter)：自定义是否需要执行、 自定义 api、修改配置参数(设置 无头模式，性能分析，行为快照，开启调试，高就配置，插件，超时时间)。
3. 单步执行前(stepBefore)：单个定义过滤执行用例（满足条件）、单个修改参数（在文件中查找）、链接数据库断言、单个自定义断言、自定义 api。
4. 单步执行后(stepAfter)：单个修改断言、单个替换断言、链接数据库断言、自定义 api。
5. 报告&推送消息前(resultBefore)：批量修改测试报告、批量修改推送信息、定义推送规则、自定义推送 api
6. 报告&推送消息后(resultAfter)：自定义 api

### 插件模版

```javascript
function myselfPlugin(config, callBack) {
    const itemInfor = {
        config: config.config,
        params: config.item,
        sendNotice: false,
        report: '',
        isEllipsis: false,
        isReplace: false
    };
    callBack(null, itemInfor);
}
```

#### 参数

##### config

| 参数       | 说明                               | 类型    | 默认值 | 有效使用周期                                     |
| ---------- | ---------------------------------- | ------- | ------ | ------------------------------------------------ |
| config     | 项目配置信息和项目信息             | object  | -      | ALL                                              |
| params     | 单个执行参数信息                   | object  | -      | stepBefore、stepAfter                            |
| content    | 每一次执行用例测试的 html 页面内容 | string  | -      | stepBefore、stepAfter                            |
| report     | 测试报告结果                       | Array   | -      | stepBefore、stepAfter、resultBefore、resultAfter |
| lifeCycle  | 周期名称                           | string  | -      | ALL                                              |
| sendNotice | 是否在执行完毕后发生消息           | boolean | -      | resultBefore、resultAfter                        |

#### callBack(param1,param2) `tapable`暴露的周期函数

##### param1

| 参数   | 说明                                             | 类型        | 默认值 | 有效使用周期 |
| ------ | ------------------------------------------------ | ----------- | ------ | ------------ |
| param1 | 如果参数不为 null,则返回执行错误并且停止执行测试 | null string | -      | ALL          |

##### param2(插件修改返回值)

| 参数       | 说明                     | 类型    | 默认值 | 有效使用周期                        |
| ---------- | ------------------------ | ------- | ------ | ----------------------------------- |
| config     | 项目配置信息和项目信息   | object  | -      | initBefore、initAfter               |
| params     | 单个执行参数             | object  | -      | stepBefore、stepAfter               |
| report     | 测试报告结果             | Array   | -      | stepBefore、stepAfter、resultBefore |
| sendNotice | 是否在执行完毕后发生消息 | boolean | -      | resultBefore                        |
| isEllipsis | 是否省略执行本次测试用例 | boolean | false  | stepBefore                          |
| isReplace  | 是否是替换测试报告       | boolean | false  | stepBefore、stepAfter               |

## 结尾

引入插件功能后，大大的提高了测试工具的灵活性、实用性；也为我们节省的时间去好好打磨[eTest 测试工具](https://onepiece-smile.github.io/docs/#/)，以及做垂直功能的开发，持续提升 eTest 测试工具专业化，提升[eTest 测试工具](https://onepiece-smile.github.io/docs/#/)使用体验，请持续关注 🙏🙏🙏🙏!!!
