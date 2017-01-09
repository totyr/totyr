-- 字符串转行
select regexp_substr('a,b,c','[^,]+', 1, level) from dual
connect by regexp_substr(a,b,c', '[^,]+', 1, level) is not null;
                         
--递归写法
select id,name,pid
,level
,sys_connect_by_path(name, '/') name_tree
,connect_by_root id as root
,connect_by_isleaf as isleaf
from table t
start with  t.pid is null
connect by pid = prior id;
