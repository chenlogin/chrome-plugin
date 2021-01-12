;(function() {
    var fn = function() {
    	//通过chrome.extension.getBackgroundPage()与扩展程序背景页脚本background.js取得联系
        //调用其中的bgInfo.getInfo()取得相关信息，刷新弹窗页面popup.html的内容
        var info = chrome.extension.getBackgroundPage().bgInfo.getInfo();
        var	content = document.getElementsByClassName("content")[0];
        var tpl = "";
        if(info && info.resource) {
            var resource = info.resource;
            tpl += `<div class="menu">`;
            for(var i=0; i < resource.length; i++){
                tpl += `<div class="item"><a target="_blank" href="${resource[i].url}">${resource[i].name}</a></div>`;   
            }
            tpl += `</div>`;
        } else {

            tpl = '<div>尚无任何可用信息......</div>';
        }
        if(content){
            content.innerHTML = tpl;
        }
    };
    fn();
})();