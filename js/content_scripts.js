(function() {
    var init = function() {
        if(location.href.indexOf('github.com') >= 0) {
            
            send('setStatus', function (response) {
                console.log('sendMessage response:',response);
            });
        }
    };
    var send = function(cmd, par, cb){
        if(typeof par == 'function'){
            cb = par;
            par = '';
        }
        //给后台脚本background.js发送消息
        chrome.runtime.sendMessage({ cmd, par }, cb);
    };
    init();
})();　　