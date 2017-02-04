--分割字符串成行Oracle
select a.id, 
REGEXP_SUBSTR(a.pid ,'[^,]+',1,l) AS x
from table_name a,
(SELECT LEVEL l FROM DUAL CONNECT BY LEVEL<=3) b

WHERE l <=LENGTH(a.pid) - LENGTH(REPLACE(a.pid,',',''))+1
order by a.id desc
