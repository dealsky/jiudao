// pages/classic/classic.js

const api = require('../../api/main.js')

Page({
  data: {

  },
  onLoad: function () {
    this.fetchData()
  },
  onShareAppMessage: function () {

  },
  fetchData: function() {
    api.latestClassic().then(res => {
      this.data.latestIndex = res.index
      this.handleData(res)
    })
  },
  handleData: function(res) {
    this.setData({
      journal: res,
      prev: res.index !== 1,
      next: res.index !== this.data.latestIndex
    })
  },
  prevJournal: function() {
    const index = this.data.journal.index
    api.prevClassic(index).then(res => {
      this.handleData(res)
    })
  },
  nextJournal: function() {
    const index = this.data.journal.index
    api.nextClassic(index).then(res => {
      this.handleData(res)
    })
  }
})
