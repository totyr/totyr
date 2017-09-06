--sql block pg
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
DO LANGUAGE plpgsql $$
declare name type:=value;
    BEGIN
       --sql
    END;
$$;
commit;


--分割字符串成行Oracle
select a.id, 
REGEXP_SUBSTR(a.pid ,'[^,]+',1,l) AS x
from table_name a,
(SELECT LEVEL l FROM DUAL CONNECT BY LEVEL<=3) b
WHERE l <=LENGTH(a.pid) - LENGTH(REPLACE(a.pid,',',''))+1
order by a.id desc


--分页写法oracle

select * from(
select a.*,row_number()over(order by <column> desc ) as rn
from <table> a
where 1=1
) b where b.rn between 1 and 10;
