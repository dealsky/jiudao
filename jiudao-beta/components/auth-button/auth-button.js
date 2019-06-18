// components/auth-button/auth-button.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    getUserInfo: function(e) {
      if (e.detail.errMsg === 'getUserInfo:ok') {
        this.triggerEvent('success', e.detail)
      }
    }
  }
})
