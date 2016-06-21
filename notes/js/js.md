##js传递类型
###JS中基本类型是按值传递的，对象类型是按共享传递的。

最早由Barbara Liskov. 在1974年的GLU语言中提出。该求值策略被用于Python、Java、Ruby、JS等多种语言。
该策略的重点是：调用函数传参时，函数接受对象实参引用的副本(既不是按值传递的对象副本，也不是按引用传递的隐式引用)。 它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。如下面例子中，不可以通过修改形参o的值，来修改obj的值。
然而，虽然引用是副本，引用的对象是相同的。它们共享相同的对象，所以修改形参对象的属性值，也会影响到实参的属性值。

##iframe操作
###iframe刷新  
  1.document.frames('iframename').location.reload()    
  2.document.all.iframename.document.location.reload()  
  3.ifrmid.window.location.reload()  
  4.window.open(document.all.ifrmname.src,'ifrmname','')//可跨域
  5.document.getElementById("iframname").src='url'//替换url 
  
