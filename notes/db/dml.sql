--分割字符串成行Oracle
select a.id, 
REGEXP_SUBSTR(a.pid ,'[^,]+',1,l) AS x
from table_name a,
(SELECT LEVEL l FROM DUAL CONNECT BY LEVEL<=3) b
WHERE l <=LENGTH(a.pid) - LENGTH(REPLACE(a.pid,',',''))+1
order by a.id desc


--分页写法oracle

select * from(select rownum as rn,t.* from(
(select rownum as rnn,t.* from table_name t order by projectcode desc)t))t
where rn<20 and rn>=10
