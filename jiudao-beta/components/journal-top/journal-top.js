// components/journal-top.js
Component({
  properties: {
    info: {
      type: Object
    }
  },
  data: {

  },
  methods: {
    toogleLike: function(e) {
      this.triggerEvent('tooglelike', e.detail)
    }
  }
})
