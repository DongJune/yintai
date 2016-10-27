function getclass(b,a){
	if (document.getElementsByClassName) {
		return a.getElementsByClassName(b);
	}else{
        var f=a.getElementsByTagName("*")
        var k=[]
        for (var i = 0; i < f.length; i++) {
        	if (checkclass(f[i].className,b)) {

             	k.push(f[i])
        	};
        };
           return k;
	}
}

// 判断类名中是否有相同元素

function checkclass(tagclass,aclass)
{
       var dd=tagclass.split(" ")  
       //将class名拆分成数组的形式    
      for (var i = 0; i < dd.length; i++) 
      // 对拆分成数组的类名进行遍历
    {
      // 判断所输入的名字是否有和数组类名相同的一组
        if (dd[i]==aclass) {
          // 有就返回ture，终止循环
          return true;
        };
       
      };
      // 循环一遍如果没有直接走false
       return false;
}

function checkclass(getclass,aclass){
	var s=getclass.split(" ")
	for (var i = 0; i < s.length; i++) {
		if (s[i]==aclass) {
			return true;
		};
	};
	return false;
}



function $(select,range){
    range=range||document;
    // 设置range的默认值
    // 判断字符的类型是字符串还是函数
    // 字符串
	if (typeof  select=="string"){
// 判断字符串的第0个值#是ID 
		if (select.charAt(0)=="#") {
	 	return document.getElementById(select.substr(1))
	 }
// .是类 
	 else if (select.charAt(0)==".") {
             return  getclass(select.substr(1),range)
	 }
// 标签
	 else if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(select)) {
          return range.getElementsByTagName(select)
	 };
	 }
   // 函数加载
		else if (typeof  select=="function")
		 {window.onload=select;
		 };
}
function getstyle(obj,sttr){  
  if (obj.currentStyle) {
    return obj.currentStyle[sttr]
    
  }else{
       return getComputedStyle(obj,null)[sttr]
    
  }
}