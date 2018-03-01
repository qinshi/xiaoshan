//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    messages: [{'speaker': 'i', 'msg': 'test'}],
  },
  onLoad: function () {
    // const setData = response => this.setData({log: response})
    // util.ask("你好", setData);
    this.siriSpeech("hello");
    this.iSpeech("我是小明");
  },
  iSpeech: function(msg) {
    this.data.messages.push({ 'speaker': 'i', 'msg': msg });
    this.setData({'messgaes': this.data.messages});
  },
  siriSpeech: function(msg) {
    this.data.messages.push({ 'speaker': 'siri', 'msg': msg }); 
    this.setData({ 'messgaes': this.data.messages });
  },
})
