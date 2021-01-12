
var bgInfo = new function() {

    var _this = this, info = { };
    
    _this.setInfo = function(id) { 
        var resource = [
            {name: "github首页",url : "http://github.com/chenlogin"},
            {name: "JSON解析及转译",url : "http://www.json.cn/"},
            {name: "图片压缩",url : "http://tinypng.com/"},
            {name: "Can I Use",url : "https://caniuse.com/"}
        ]
        info = { resource };
        return info;
    };

    _this.setStatus = function(i) {
        var status = { 0: '未登录', 1: '已登录', 2: '已退出登录' };
        if(status[i]) info.status = status[i];
    };
      
    _this.getInfo = function() {   
        return _this.setInfo();
    };
};

//监听来自content_scripts.js的消息并作出响应
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    var f = bgInfo[request.cmd];
    if(typeof f === 'function') {
        f(request.par);
    }
    sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});