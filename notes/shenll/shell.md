#Shell简介
#方法 
SHFileOperation()能做些什么 

查找当前特定文件中特定字符(包含子目录)      
grep -Hnirw "Hello" *.sql    
查找特定文件中特定字符(包含子目录)  
find -name "*.sql" | xargs grep -Hnirw --color=always "pub_project_info_rel"  




link:http://tianmoboping.blog.163.com/blog/static/15739532200872611113848/
