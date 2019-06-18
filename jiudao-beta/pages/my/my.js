// pages/my/my.js

const userInfoUtil = require('../../utils/userinfo.js')

Page({
  data: {

  },
  onLoad: function() {
    this.getUserInfo()
  },
  getUserInfo: function() {
    userInfoUtil.getUserInfo().then((userInfo) => {
      this.normalizaUserInfo(userInfo)
    }).catch((message) => {
      console.log(message)
    })
  },
  authorizedSuccess: function(e) {
    this.normalizaUserInfo(e.detail.userInfo)
  },
  normalizaUserInfo: function(userInfo) {
    this.setData({
      avatar: userInfo.avatarUrl,
      nickname: userInfo.nickName
    })
  }
})