module.exports = {
  getUserInfo: () => {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => {
                resolve(res.userInfo)
              },
              fail: () => {
                reject('get userInfo fail')
              }
            })
          } else {
            reject('no auth')
          }
        }
      })
    })
  }
}