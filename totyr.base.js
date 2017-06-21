String.prototype.getLen=function(){
 if(this==null) return null;
 return this.replace(/[^\x00-\xff]/g,"1").length;
}
