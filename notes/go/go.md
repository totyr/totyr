# Get Go  
文档:https://golang.org/doc/  
下载go:https://golang.org/dl/
## window安装
* 将\go目前添加到goroot变量中
* 将\go\bin添加到path变量中

## Go与其他语言不同
* 清晰并且简洁  
Go 努力保持小并且优美，你可以在短短几行代码里做许多事情；  
* 并行  
Go 让函数很容易成为非常轻量的线程。这些线程在 Go 中被叫做 gorou
tines a；  
* Channel
这些 goroutines 之间的通讯由 channel[24, 32] 完成；  
* 快速  
编译很快，执行也很快。目标是跟 C 一样快。编译时间用秒计算；  
* 安全  
当转换一个类型到另一个类型的时候需要显式的转换并遵循严格的规
则。Go 有垃圾收集，在 Go 中无须 free()，语言会处理这一切；  
* 标准格式化  
Go 程序可以被格式化为程序员希望的（几乎）任何形式， 但是官方格式
是存在的。标准也非常简单： gofmt 的输出就是官方认可的格式；  
* 类型后置  
类型在变量名的后面，像这样 var a int，来代替 C 中的 int a；  
* UTF-8  
任何地方都是 UTF-8 的，包括字符串以及程序代码。你可以在代码中使
用 Φ = Φ + 1；

# 语法
## 保留字
break default func interface select case defer go map struct chan else goto package switch const fallthrough if range type continue for import return var

## 内建函数
close new panic complex delete make recover real len append print imag cap copy println

## 基本数据类型

bool string  
int  int8  int16  int32/rune  int64  
uint uint8/byte uint16 uint32 uint64 uintptr  
float32 float64 complex64 complex128
