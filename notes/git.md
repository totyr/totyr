//see http://git-scm.com/docs  
$git --version,--help//查看版本，帮助

$git init dirName//创建版本库  
$git config --unset --global user.name//清空属性  
$git config --global user.name ""//配置用户名   
$git config --global user.email ""//配置邮箱  
$git config --global core.autocrlf false//禁用自动转换   
$git config --global [system.]alias.ci commit //为命令起别名  
$git config --global color.ui true //命令行颜色  
$git clone git地址 [本地目录]  
$ git status //查看git当前版本库的状态           
$git pull //=fetch+merge      
$git add [-A]|filename//添加所有文件或特定文件    
$git commit [-m"commit message"]//提交缓冲区并备注信息   
$git push [origin master]   
