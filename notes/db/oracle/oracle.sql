-- 字符串转行
select regexp_substr('a,b,c','[^,]+', 1, level) from dual
connect by regexp_substr(a,b,c', '[^,]+', 1, level) is not null
--递归写法
select e.id,e.pid,e.name,level
from table e
start with  e.pid is null
connect by prior e.id = e.pid;
