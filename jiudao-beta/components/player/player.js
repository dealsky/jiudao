// components/player/player.js
Component({
  properties: {
    cover: {
      type: String
    },
    url: {
      type: String,
      observer: function(newVal) {
        this.listenUrl(newVal)
      }
    }
  },
  data: {
    playStatus: 'pause'
  },
  methods: {
    listenUrl: function (newVal) {
      if (this.data.audio) {
        this.data.audio.destroy()
      }

      let audio = wx.createInnerAudioContext()
      audio.src = newVal
      audio.loop = true
      this.data.audio = audio
    },
    tooglePlay: function() {
      const audio = this.data.audio
      if (this.data.playStatus === 'pause') {
        audio.play()
        this.setData({
          playStatus: 'play'
        })
      } else {
        audio.pause()
        this.setData({
          playStatus: 'pause'
        })
      }
    }
  }
})
