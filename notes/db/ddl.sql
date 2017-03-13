--添加唯一约束oracle
ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> UNIQUE(column_name);

--删除非空约束pg
alter table <table_name> alter column <column_name>  drop  not null;


--注释
--添加注释oracle
comment on table <table_name> is '';
comment on column <table_name>.<column_name> is '';

--启用/禁用日志oracle
alter table <table_name> logging/nologging;

--清理表空间
--此命令为Oracle 10g新增功能，再执行该指令之前必须允许行移动alter table table_name enable row movement;
alter table table_name shrink space
