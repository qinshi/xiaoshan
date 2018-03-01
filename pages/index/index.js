//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    word: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    scrollTop: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    words:[
      {
        title: '<a href="http://qq.com">是是是</a>',
        sender:'user'
      },
      {
        title: '456',
        sender:'ai'
        }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    if (this.data.word == '')
      return;
    var newWord = { 
      title: this.data.word,
      sender: 'user' 
      };
    this.data.words.push(newWord);
    var responseWord = this.getResponseWord(this.data.word);
    this.data.words.push(responseWord);

    this.setData({
      word: '',
      words:this.data.words,
      scrollTop: this.data.scrollTop + 200,
    })
  },
  getResponseWord: function(word) {
    return {
      title: 'response',
      sender:'ai'
    }

  },
  userInput: function (e) {
    this.setData({
      word: e.detail.value
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
