# 压力测试

<iframe src="//player.bilibili.com/player.html?aid=976602317&bvid=BV1i44y1e74h&cid=437420996&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" framespacing="0"  height="600"  style=”width: 100%;height: 500px; max-width: 100%;align:center;padding:20px 0;” > </iframe>

## 解决痛点

ab 压力测试同 api 测试一样，对测试人员的编码能力有一定的要求，而且如果不在项目上线前做压力测试，就无法精确计算 qps，导致上线后无法确定是否需要加服务器，造成不要的成本浪费，压测可以很好的为计算项目的 qps 提供参考指标，真正做到上线有数。

## 流程图

![logo](../img/ab.jpeg)

## 功能列表

1.  支持多并发压测 :heavy_check_mark:
2.  支持生成测试结果 :heavy_check_mark:
3.  支持全局/分组 变量设置 :heavy_check_mark:
4.  支持压测选择 :heavy_check_mark:
5.  支持停止当前任务 :heavy_check_mark:
6.  支持 https 测试 :heavy_check_mark:
7.  支持接口延迟执行 :heavy_check_mark:
8.  支持定时任务 :heavy_check_mark:

## 快速开始

![快速开始](../img/ab/ab01.jpeg '::etest-col-8')

导入数据，需要压力测试的接口需来自于 `API`接口测试数据，所以做接口的压力测试需要首先完善`API`接口测试，导入的接口列表数据与`API`测试共享数据，如果`API`接口改变，会自动同步到`压力测试`，修改参数，返回结果可以参考 [API 接口文档](application/api.md)。

![快速开始](../img/ab/ab02.jpeg '::etest-col-8')

全局参数设置：

1. 请求 总量：压力测试总的请求最大量；当达到之后测试会结束。
2. 模拟客户端数量：客户端并行启动数量。
3. 每秒并发量：每个客户端每秒发送多少请求。
4. 单个超时时间：每个生成请求的超时时间，0 为禁止超时（默认）

参数配置遵循填写一个必须完成其他的必填项输入，如果不填写则会使用分组，或者接口配置；而全局配置 、 分组配置 、接口配置全部填写后，会优先使用接口配置，而不是合并操作。

!> **配置优先级** ：全局配置 < 分组配置 < 接口配置

![快速开始](../img/ab/ab04.jpeg '::etest-col-8')
![快速开始](../img/ab/ab06.png '::etest-col-8')

单个接口同样支持压力测试，对压力测试需要的参数，同样与`API接口`测试共享参数配置。压测结果显示的结果
单个最小耗时，最大耗时，平均耗时，以及访问时平均相应百分比。

!> 如果需要更改接口请求参数，需要在`API`接口测试中修改

![快速开始](../img/ab/ab05.jpeg '::etest-col-8')

![快速开始](../img/ab/ab07.jpeg '::etest-col-8')
