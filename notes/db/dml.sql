--sql block
--[postgres]
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
DO LANGUAGE plpgsql $$
declare name type:=value;
    BEGIN
       --sql
    END;
$$;
commit;


--分割字符串成行
--[oracle]
 select x.id ,regexp_substr(x.str, '[^,]+', 1, level) splitedStr  
  from  x 
connect by x.id = prior id  
       and prior dbms_random.value is not null  
       and level <= regexp_count(str, '[^,]+')


--分页写法
--[oracle]
select * from(
select a.*,row_number()over(order by <column> desc ) as rn
from <table> a
where 1=1
) b where b.rn between 1 and 10;


--全文搜索
--[oracle]
--查询脚本内容1 FUNCTION/JAVA SOURCE/PACKAGE/PACKAGE BODY/PROCEDURE
SELECT * FROM ALL_SOURCE  where TYPE='PROCEDURE'  AND TEXT LIKE '%0997500%';
