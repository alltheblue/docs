# 快速开始

## 新建项目

<img src="../docs/img/group/group02.jpeg" class="etest-col-8" />

点击 **新建项目** 创建需要测试的项目名称，如果对 [**定时任务** ](#定时任务配置)配置了定时任务，如果需要及时收到测试结果，可以配置[**钉钉推送**](#设置钉钉推送)

!> 目前支持钉钉消息推送，后续计划引入企业微信

## 设置钉钉推送

### 创建钉钉项目群

<img src="../docs/img/dingding/ding01.jpeg" class="etest-col-8" />
<img src="../docs/img/dingding/ding02.jpeg" class="etest-col-8" />

### 引入项目只能助手

<img src="../docs/img/dingding/ding04.jpeg" class="etest-col-8" />
<img src="../docs/img/dingding/ding05.jpeg" class="etest-col-8" />
<img src="../docs/img/dingding/ding06.jpeg" class="etest-col-8" />
<img src="../docs/img/dingding/ding07.jpeg" class="etest-col-8" />
<img src="../docs/img/dingding/ding08.jpeg" class="etest-col-8" />

安全配置勾选 `加签` ,然后妥善保存密钥， [**新建项目** ](#新建项目)中的 钉钉消息推送需要该值

<img src="../docs/img/dingding/ding09.jpeg" class="etest-col-8" />

复制 url 连接，获取 url 的参数 token

## 定时任务配置

<img src="../docs/img/task/task01.jpeg" class="etest-col-8" />
<img src="../docs/img/task/task02.jpeg" class="etest-col-8" />

支持 ete、api、压力三种功能；项目支持多选；可以配置重复执行（每周一、每周二、04 时、23 时），或者仅当前的某一时刻执行（16 时），如果没有勾选，说明当天的指定时间内运行定时任务

!> 如果定时任务执行过程中，网络错误或者服务器问题，导致的错误，自动间隔 30 分钟在执行一次

## 支持功能

1. 支持获取当前网络状态 :heavy_check_mark:
2. 监控 eTest 后台系统报错收集 :heavy_check_mark:
3. 支持请求错误数据收集汇总 :heavy_check_mark:
4. 支持定时测试任务 :heavy_check_mark:
5. 设置定时任务错误阀值 80% :heavy_check_mark:
6. 旧版本强制更新 :heavy_check_mark:

## 暂不支持

1. 页面元素拖拽 :white_check_mark:
2. 下拉框多选问题 :white_check_mark:
3. redio 操作有点问题 需要点击到 click :white_check_mark:
4. 快捷键输入 :white_check_mark:
5. 多 tab 页面交互操作 :white_check_mark:
