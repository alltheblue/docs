# API

<iframe src="//player.bilibili.com/player.html?aid=249999447&bvid=BV16v411N7En&cid=392077714&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" framespacing="0"  height="600"  style=”width: 100%;height: 500px; max-width: 100%;align:center;padding:20px 0;” > </iframe>

## 解决痛点

## 流程图

![logo](../img/apiliucheng.png)

## 功能列表

1.  支持接口断言类型检测 :heavy_check_mark:
1.  支持存储变量 :heavy_check_mark:
1.  支持导出 interface :heavy_check_mark:
1.  支持导出测试报告 :heavy_check_mark:
1.  支持自定义返回成功值修改 :heavy_check_mark:
1.  支持自定义函数 :heavy_check_mark:
1.  支持分组选择 :heavy_check_mark:
1.  支持接口、分组拖拽排序 :heavy_check_mark:
1.  支持全局配置请求头，分组配置请求头请求参数 :heavy_check_mark:
1.  支持分组，单个接口复制 :heavy_check_mark:
1.  支持关联性接口测试 :heavy_check_mark:
1.  支持导入导出 API 文件 :heavy_check_mark:
1.  上传下载数据包 :white_check_mark:
1.  修改 content-type 值 :white_check_mark:

<img src="../docs/img/api/api09.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api12.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api13.jpeg" class="etest-col-7" />

## 快速开始

### 新建分组&设置

<img src="../docs/img/api/api03.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api04.jpeg" class="etest-col-7" />

### 添加全局配置

<img src="../docs/img/api/api01.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api02.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api10.jpeg" class="etest-col-7" />

### 添加接口

<img src="../docs/img/api/api07.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api08.jpeg" class="etest-col-7" />

### 断言

<img src="../docs/img/api/api05.jpeg" class="etest-col-7" />
<img src="../docs/img/api/api06.jpeg" class="etest-col-7" />

<!-- ConfigAsert = [
{ title: '类型检测 number', id: 'number' },
{ title: '类型检测 string', id: 'string' },
{ title: '类型检测 boolean', id: 'boolean' },
{ title: '类型检测 undefined', id: 'undefined' },
{ title: '类型检测 null', id: 'null' },
{ title: '类型检测 array', id: 'array' },
{ title: '类型检测 object', id: 'object' },
];
ConfigType = [
{ title: '结果值大于', id: 'greater' },
{ title: '结果值等于', id: 'equal' },
{ title: '结果值小于', id: 'less' },
{ title: '结果值包含', id: 'include' },
{ title: '结果值不包含', id: 'exclude' },
{ title: '结果值的长度大于', id: 'greaterLength' },
{ title: '结果值的长度等于', id: 'equalLength' },
{ title: '结果值的长度小于', id: 'lessLength' },
]; -->

### 变量设置

-   [x] 生成变量：
-   [ ] 自定义返回值：

#### 高级设置

!> 自定义函数 主要解决工作流测试和一些变量需要经过计算才能得到

```javascript
/**
 * [自定义执行函数]
 * @param    {[any]}               value  [当前选择字段的value值]
 * @param    {[array]}             apilist [api 接口列表]
 * @return   {[Array]}             [] [arr[0]返回处理后的value；arr[1]返回下一个需要执行的Api；arr[2]数组返回一个需要判断执行的接口列表]
 */
function myselfFun(value) {
    let newValue = '';
    let runApi = '';
    let ApiData = ['api001', 'api002'];
    if (value) {
        newValue = value;
        runApi = ApiData[newValue];
    } else {
        newValue = 0;
        runApi = ApiData[newValue];
    }
    return [newValue, runApi, ApiData];
}
```

### 导出&导出文件

<img src="../docs/img/api/api14.jpeg" class="etest-col-7" />
