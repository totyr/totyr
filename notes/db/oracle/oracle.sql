-- 字符串转行
select regexp_substr('a,b,c','[^,]+', 1, level) from dual
connect by regexp_substr(a,b,c', '[^,]+', 1, level) is not null;

--记录中转行
select a.<othercolumn>,REGEXP_SUBSTR(a.<needsubstr>,'[^<splitstr>]+',1,l) AS pid
  from  <table> a,
    (SELECT LEVEL l FROM DUAL CONNECT BY LEVEL<(
          select max(regexp_count(j.<needsubstr>,'<splitstr>'))+2
          from dbo.<table> j
          where j.<needsubstr> is not null
    )
  ) b
  WHERE l <=regexp_count(a.<needsubstr>,',')+2
  and a.<needsubstr> is not null;
                         
                         
--递归写法
select id,name,pid
,level
,sys_connect_by_path(name, '/') name_tree
,connect_by_root id as root
,connect_by_isleaf as isleaf
from table t
start with  t.pid is null
connect by pid = prior id;
                         
--递归示例：查到当前部门及子部门
 with a (org_code,sub_code)as(
         select org_code as org_code,org_code as sub_code
         from dbo.org_info
         --where--start with
         union all
         select a.org_code,b.org_code
         from dbo.org_info b,a
         where b.pid=a.sub_code
  )
 select * from a;
                         
--遍历写法
for i in(select job_name from(select 'a' as job_name from dual)a) loop
    DBMS_OUTPUT.PUT_LINE(i.job_name);
end loop;
