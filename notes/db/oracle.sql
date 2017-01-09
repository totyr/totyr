-- 字符串转行
select regexp_substr('a,b,c','[^,]+', 1, level) from dual
connect by regexp_substr(a,b,c', '[^,]+', 1, level) is not null
