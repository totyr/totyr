String.prototype.lengthx=function(){
 if(this==null) return null;
  if (typeof this != "string"){
    this += "";
  }
 return this.replace(/[^\x00-\xff]/g,"1").length;
}
