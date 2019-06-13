const API_BASE_URL = 'http://bl.7yue.pro/v1'
const appkey = 'RdshydjBvcYZhMZC'

const request = (url, method, data) => {
  let _url = API_BASE_URL + url

  let contentType = 'application/json'
  if (method === 'get') {
    contentType = 'application/x-www-form-urlencoded'
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': contentType,
        'appkey': appkey
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete() {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function(callback) {
  var Promise = this.constructor;
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(
        function() {
          return value;
        }
      );
    },
    function(reason) {
      Promise.resolve(callback()).then(
        function() {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request,

  // 期刊
  // 获取最新一期
  latestClassic: () => {
    return request('/classic/latest', 'get', {})
  },
  // 获取当前一期的下一期
  nextClassic: (index) => {
    return request(`/classic/${index}/next`, 'get', {})
  },
  // 获取某一期详细信息
  classicDetail: (id, type) => {
    return request(`/classic/${type}/${id}`, 'get', {})
  },
  // 获取当前一期的上一期
  prevClassic: (index) => {
    return request(`/classic/${index}/previous`, 'get', {})
  },
  // 获取点赞信息
  classicFavorInfo: (id, type) => {
    return request(`/classic/${type}/${id}/favor`, 'get', {})
  },
  // 获取我喜欢的期刊
  myClassicFavor: (start, count) => {
    return request('/classic/favor', 'get', {
      start,
      count
    })
  },

  // 点赞
  // 进行点赞
  like: (artId, type) => {
    return request('/like', 'post', {
      art_id: artId,
      type
    })
  },
  // 取消点赞
  cancelLike: (artId, type) => {
    return request('/like/cancel', 'post', {
      art_id: artId,
      type
    })
  }
}