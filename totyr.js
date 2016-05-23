var totyr={
  patterns: {
        int: /^\d+$/,//整型数字
        number: /^(-?\d+)(\.\d+)?$/ //数字类型
    },
  getRequestParams: function () {
       var url = location.search; //获取url中"?"符后的字串
       var theRequest = new Object();
       if (url.indexOf("?") != -1) {
           var str = url.substr(1);
           if (str.indexOf("&") != -1) {
               strs = str.split("&");
               for (var i = 0; i < strs.length; i++) {
                   theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
               }
           } else {
               theRequest[str.split("=")[0]] = unescape(str.split("=")[1]);
           }
       }
       Utils.URLParams = theRequest;
       return theRequest;
   },
    //判断元素是否是数组
    isArray: function (value) {
        //ECMAScript5将Array.isArray()正式引入JavaScript，目的就是准确地检测一个值是否为数组。IE9+、 Firefox 4+、Safari 5+、Opera 10.5+和Chrome都实现了这个方法。但是在IE8之前的版本是不支持的。
        if (typeof Array.isArray === "function") {
            return Array.isArray(value);
        } else {
            return Object.prototype.toString.call(value) === "[object Array]";
        }
    },
   //获取浏览器类型及其版本号,AddByL00293360_20160328
   getBrowserInfo: function () {
       var ua = navigator.userAgent.toLowerCase();
       var s;
       //IE只能判断11以下
       (s = ua.match(/msie ([\d.]+)/)) ? Utils.browser.ie = s[1] :
       (s = ua.match(/trident\/7.0/)) ? Utils.browser.ie =11:
       (s = ua.match(/firefox\/([\d.]+)/)) ? Utils.browser.firefox = s[1] :
       (s = ua.match(/chrome\/([\d.]+)/)) ? Utils.browser.chrome = s[1] :
       (s = ua.match(/opera.([\d.]+)/)) ? Utils.browser.opera = s[1] :
       (s = ua.match(/version\/([\d.]+).*safari/)) ? Utils.browser.safari = s[1] : 0;
       return Utils.browser;
   }
}
