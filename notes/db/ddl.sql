--添加唯一约束oracle
ALTER TABLE "table_name" ADD CONSTRAINT "constraint_name" UNIQUE(column_name);

--删除非空约束pg
alter table "table_name" alter column "column_name"  drop  not null;


--注释
--添加注释oracle
comment on table "table_name" is '';
comment on column "table_name"."column_name" is '';
