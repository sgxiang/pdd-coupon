
//app.js
import env from "./env";
App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        env: env.wxCloudEnv,
        traceUser: true,
      });
    }
  },
  globalData: {
  }
})