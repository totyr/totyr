##iframe操作
###iframe刷新  
  1.document.frames('iframename').location.reload()    
  2.document.all.iframename.document.location.reload()  
  3.ifrmid.window.location.reload()  
  4.window.open(document.all.ifrmname.src,'ifrmname','')//可跨域
  5.document.getElementById("iframname").src='url'//替换url  
