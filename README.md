# pdd-coupon

### 券多省钱通 —— 拼多多领券小程序（多多金宝）

![小程序码](./2.png)

![截图](./1.png)

### 使用方法

`该小程序使用微信原生+云函数开发。`

* 申请多多进宝应用，不做详细叙述，申请地址：[https://jinbao.pinduoduo.com/](https://jinbao.pinduoduo.com/)、[https://open.pinduoduo.com/](https://open.pinduoduo.com/)
* 在微信开发者工具中导入项目`wechat-xcx`文件夹，并开启云开发。
* 修改`env.js`的配置。
* 修改`functions\pquery\pdd\utils.js`里拼多多相关的配置参数。上传云函数。

### 其他问题

* 如果遇到领券 搜索接口报错，需要用这个接口[https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.rp.prom.url.generate](https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.rp.prom.url.generate)对`pid`备案一次，channel_type: 10。之后就不会提示权限问题。

如有疑问，请提issue或微信联系：sgxiang