// components/journal/journal.js

const stringUtil = require('../../utils/string.js')
const category = require('../../utils/category.js')
const api = require('../../api/main.js')

Component({
  properties: {
    journal: {
      type: Object,
      observer: function(newVal, oldVal) {
        this.handleData(newVal, oldVal)
      }
    },
    control: {
      type: Boolean,
      value: false
    },
    next: {
      type: Boolean,
      value: false
    },
    prev: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    handleData: function(newVal, oldVal) {
      const dateNumberArr = newVal.pubdate.split('-')
      const journalTopInfo = {
        fav_nums: newVal.fav_nums,
        index: newVal.index,
        like_status: newVal.like_status,
        year: stringUtil.removePrefixZero(dateNumberArr[0]),
        month: stringUtil.removePrefixZero(dateNumberArr[1])
      }

      this.setData({
        category: category.map(newVal.type),
        journalTopInfo
      })
    },
    clickControl: function(e) {
      const status = e.currentTarget.dataset.status
      if (status === 'prev' && !this.data.prev) {
        return
      }
      if (status === 'next' && !this.data.next) {
        return
      }
      this.triggerEvent(status)
    },
    toogleLike: function(e) {
      const id = this.data.journal.id
      const type = this.data.journal.type
      const status = e.detail
      if (status) {
        api.cancelLike(id, type).then(() => {
          this.refreshLike(id, type)
        })
      } else {
        api.like(id, type).then(() => {
          this.refreshLike(id, type)
        })
      }
    },
    refreshLike: function (id, type) {
      api.classicFavorInfo(id, type).then((res) => {
        this.setData({
          ['journalTopInfo.fav_nums']: res.fav_nums,
          ['journalTopInfo.like_status']: res.like_status
        })
      })
    }
  }
})