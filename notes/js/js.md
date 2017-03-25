##  标示符
####  由字母开头，包含字母、数字、下划线。不能使用js保留字。　　　
    abstract boolean break byte case catch char class const continue debugger default delete do double
    else enum export extends false final finally float for function goto if implements import in instanceof log
    native new null package private protected public return short static super switch synchronized
    this throw throws transient true try typeof var volatile void while with
##  语法
####  下列值被当做假false,其他对象为真true
  false,null,undefined,空字符串'',数字0,数字NaN

#### 反射　
typeof(Object)检查对象类型,一共有六种类型:"number"、"string"、"boolean"、"object"、"function"、"undefined" 
hasOwnProperty(string)检查是否是对象独有属性,不会检查原型链。
## js传递类型
### JS中基本类型是按值传递的，对象类型是按共享传递的。

最早由Barbara Liskov. 在1974年的GLU语言中提出。该求值策略被用于Python、Java、Ruby、JS等多种语言。
该策略的重点是：调用函数传参时，函数接受对象实参引用的副本(既不是按值传递的对象副本，也不是按引用传递的隐式引用)。 它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。如下面例子中，不可以通过修改形参o的值，来修改obj的值。
然而，虽然引用是副本，引用的对象是相同的。它们共享相同的对象，所以修改形参对象的属性值，也会影响到实参的属性值。

## iframe操作
### iframe刷新  
  1.document.frames('iframename').location.reload()    
  2.document.all.iframename.document.location.reload()  
  3.ifrmid.window.location.reload()  
  4.window.open(document.all.ifrmname.src,'ifrmname','')//可跨域
  5.document.getElementById("iframname").src='url'//替换url 
  
