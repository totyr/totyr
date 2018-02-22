var tyUtils={
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
               theRequest[str.split("=")[0].toLowerCase()] = unescape(str.split("=")[1]);
           }
       }
       tyUtils.URLParams = theRequest;
       return theRequest;
   },
   setQueryParamValue:function(queryString, key, newValue) {  
    var replaced = false;  
    var newParam = key + '=' + newValue;  
    var result = queryString.replace(new RegExp('(^|&)' + key + '=(.*?)(?=$|&)', 'g'), function (s, p1, p2) {  
      replaced = true;  
      return p1 + newParam;  
    });  
    return replaced && result || queryString && (queryString + '&' + newParam) || newParam;  
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
   //获取浏览器类型及其版本号
   getBrowser: function () {
        var browser = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        //IE只能判断11以下
        (s = ua.match(/msie ([\d.]+)/)) ? browser = { type: 'ie', ver: s[1] } :
        (s = ua.match(/trident\/7.0/)) ? browser = { type: 'ie', ver: 11 } :
        (s = ua.match(/chrome\/([\d.]+)/)) ? browser = { type: 'chrome', ver: s[1] } :
        (s = ua.match(/firefox\/([\d.]+)/)) ? browser = { type: 'firefox', ver: s[1] } :
        (s = ua.match(/opera.([\d.]+)/)) ? browser = { type: 'opera', ver: s[1] } :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? browser = { type: 'safari', ver: s[1] } : 0;
        return browser;
    },
     checkInput: function () {
        $(document).off("input", "input").on("input", "input", function () {
            var ds = this.dataset;
            if (ds && ds.dataType && $.trim(this.value) != '') {
                var pat =
                    ds.dataType == "int" ? new RegExp('(-?\\d{1,' + (ds.dataLength || 9) + '})') :
                    ds.dataType == "number" ? new RegExp('(-?\\d{1,' + ((ds.dataLength || 37) - (ds.precision || 2)) + '})(\\.\\d{0,' + (ds.precision || 2) + '})?') :
                    ds.pat != null ? new RegExp(ds.pat) : null;
                if (pat) {//如果类型存在
                    var num = this.value.match(pat);
                    if (num != null) num = num[0];
                    if (this.value != num) this.value = num == null ? "" : num;
                }
            }
        });
    },
     dateFormat: function (format, date) {
        if (!date) date = new Date();
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    formatFloat: function (src, pos,replaceStr) {
        //不能直接拿src运算，因为' '可能会被视为０
        replaceStr=replaceStr||'';
        if (isNaN(src)||src==null||(src+'').trim()=='') {
            return replaceStr;
        }
        pos = pos || 2;
        if (typeof (pos) == "undefined" || pos < 0)
            return src;
        if (pos == 0)
            return Math.round(src);
        return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
    },
    //广播收听者集合
   broadcastReceiver: [],
  //广播类型
   broadcastType: {
       esc: 'esc',
       click: 'click'
    },
   //收听广播
   listenToBroadcast: function(o) {
     var list = tyUtils.broadcastReceiver;
     //url
     if(!o.url){
       o.url=''//当前页面,以防止无效调用
     }
     if(!o.uri){
        o.uri=o.url//收听者主键，以防重复注册
     }
     //删除重复注册
     for (var i = 0; i < list.length; i++) {
         var receiver = list[i];
          if (o.broadcastType == receiver.broadcastType && o.uri==receiver.uri) {
              //删除重复注册的历史事件
               list.splice(i, 1);
               i--;
              }
          }
      list.push(d);
   },
 //发送广播
   broadcasting: function(broadcastType, e) {
        var url=tyUtils.getUri();
        var list = tyUtils.broadcastReceiver;
        for (var i = 0; i < list.length; i++) {
             if (list[i].url == url && ist[i].broadcastType == broadcastType  && list[i].handler) {
                 list[i].handler(e);
              }
           }
   },
  registBroadEvent:function(){
     //监听取消事件
     $(window).keyup(function(e) {
         if (e.keyCode == 27) { //此处代表按的是键盘的Esc键
            tyUtils.broadcasting(tyUtils.broadcastType.esc, e);
        }
     });
 //监听点击事件
   $(window).click(function(e) {
      tyUtils.broadcasting(tyUtils.broadcastType.click, e);
    });
  },
  
  //初始化工具类
  init:function(){
      //注册广播事件
      tyUtils.registBroadEvent();
  }
}
tyUtils.init();
