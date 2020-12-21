export default {
  // 微信云函数配置，云开发的环境ID
  wxCloudEnv: "",
  // 跳转外卖券
  waimai: {
    appId: "wxbc8391c07266a8f5",
    path: "/pages/index/index",
  },
  // 其他小程序
  otherMiniPrograms: [
    {
      icon: "/images/waimai.png",
      name: "外卖领券",
      appId: "wxbc8391c07266a8f5",
      path: "/pages/index/index",
    },
    {
      icon: "/images/gyrl.png",
      name: "光阴日历",
      appId: "wx7fcb1d8c63c98fc8",
      path: "/pages/index/index",
    },
  ],
  // 拼多多appid
  pddAppId: "wx32540bd863b27570",
  // 首页子分类进去的详情页顶部banner图片地址
  subTypeBannerImage: {
    shot:
      "cloud://ddlq-3g4f48et11eabade.6464-ddlq-3g4f48et11eabade-1304228075/s-hot.jpg",
    s19:
      "cloud://ddlq-3g4f48et11eabade.6464-ddlq-3g4f48et11eabade-1304228075/s-19.jpg",
    spp:
      "cloud://ddlq-3g4f48et11eabade.6464-ddlq-3g4f48et11eabade-1304228075/s-pp.jpg",
  },
};
