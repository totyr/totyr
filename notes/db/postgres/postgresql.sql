--ps 9.3引入函数:format(formatstr text [, formatarg "any" [, ...] ])
--格式字符串%[position][flags][width]type
--position 指变量位置
--width指显示的宽度, 当宽度大于实际字符串时用空格补齐, 当宽度小于实际字符串长度时不会截断字符串, 相当于width不起作用
--type指字符串类型, 目前可以使用s, I, L. 分别表示字符串, identified, 和literal
select format('%s,%I,%L','str','asdfa','literal')
