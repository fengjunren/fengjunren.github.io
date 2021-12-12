function GetRequest() {
    const url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
       let str = url.substr(1);
       let strs = str.split("&");
       for(let i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
       }
    }
    return theRequest;
 }

 function wordHighLight(hightLightWords) { // 目前只能匹配一个，不能全部高亮
   let evt = {
     // source: PDFFindBar, // PDFFindBar的实例，不确定是干嘛用的？
     type: '',  // 这里默认应该是空的
     // 这里能默认跳转到query的位置，刚好能满足要求
     query: hightLightWords, // 高亮的关键词
     phraseSearch: false, // 支持整段文字匹配,如果时多个词的匹配只能是false
     caseSensitive: false, // 默认为false,搜索时忽略大小写
     highlightAll: true, // 设为true即关键词全部高亮
     // findPrevious: true,
   };
   PDFViewerApplication.findController.executeCommand('find' + evt.type, {//搜索执行函数
     query: evt.query,
     phraseSearch: evt.phraseSearch,
     caseSensitive: evt.caseSensitive,
     highlightAll: evt.highlightAll,
     findPrevious: evt.findPrevious,
   });
 }

 function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}
function b64Decode(str) {
    return decodeURIComponent(atob(str));
}