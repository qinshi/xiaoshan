const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function ask(text, callback){
  var url = "https://127.0.0.1/ask";
  wx.request({
    url: url,
    success: callback,
  })


}
module.exports = {
  formatTime: formatTime,
  ask: ask,
}
