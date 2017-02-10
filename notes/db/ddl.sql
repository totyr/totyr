--添加唯一约束oracle
ALTER TABLE "table_name" ADD CONSTRAINT "constraint_name" UNIQUE(column_name);

--删除非空约束pg
alter table "table_name" alter column "column_name"  drop  not null;
