// components/like/like.js
Component({
  properties: {
    count: {
      type: Number
    },
    status: {
      type: Number
    }
  },
  data: {

  },
  methods: {
    toogleLike: function() {
      this.triggerEvent('toogle', this.data.status)
    }
  }
})
