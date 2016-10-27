// 自动轮播
$(function(){
// banner部分
// 找到最大的容器
// var ahref=boxs[0].getElementsByTagName('a')
// 从容器中找到需要浏览的内容
// var lis=uls1[0].getElementsByTagName('li')
//顶层
  var my=$('.top-left2')
// console.log(my)
// var aas=$('.aas')
  var aas1=$('.aas')
// console.log(aas)
for (var i = 0; i < my.length; i++) {
  my[i].index=i;
my[i].onmouseover=function(){
 aas1[this.index].style.display="block"

}

};
for (var i = 0; i < aas1.length; i++) {
  aas1[i].index=i;
  aas1[i].onmouseover=function(){
  this.style.display="block"
}
aas1[i].onmouseout=function(){
  this.style.display="none"
}
};
var nav1=$('.top-right4')[0]
  console.log(nav1)
  var ones1=$('.ones')[0]
  hover(nav1,function(){
    nav1.style.background='#fff'
    ones1.style.display="block"
  },function(){
    nav1.style.background=''
    ones1.style.display="none"
  })


//导航
  var maxbox=$('.banner-box')[0]
  var imgbox=$(".box-wheel",maxbox)[0]
  var imgs=$('img',imgbox)
  var uls=$('.uls',maxbox)[0]
  var lis=$('li',uls)
  // console.log(lis)
  var index=0;
  var iw=parseInt(getstyle(imgs[0],"width"))
var left=$('.left',maxbox)[0];
var right=$('.right',maxbox)[0];
// console.log(left)
  // console.log(iw)
  imgbox.style.width=iw*imgs.length+"px"
  // console.log(imgbox.style.width)
  // console.log(imgbox.style.width)
lis[0].style.background="#a50000";
left.style.opacity=0;
right.style.opacity=0;

  function move(){
      index++;
      if (index==imgs.length) {index=0};
      animate(imgbox,{left:-index*iw},200)
      for (var i = 0; i < imgs.length; i++) {
        lis[i].style.background="";
      };
      lis[index].style.background="#a50000";
  }
var t=setInterval(move,3000)
maxbox.onmouseover=function(){
      left.style.opacity=0.85;
right.style.opacity=0.85;
  clearInterval(t)
}
maxbox.onmouseout=function(){
      left.style.opacity=0;
right.style.opacity=0;
  t=setInterval(move,1000)
}

right.onclick=function(){
  move();
}
left.onclick=function(){
  index--;
  if (index<0) {index=imgs.length-1};
  animate(imgbox,{left:-index*iw},200)
      for (var i = 0; i < imgs.length; i++) {
        lis[i].style.background="";
      };
      lis[index].style.background="#a50000";
}

 for (var i = 0; i < lis.length; i++) {
      lis[i].index=i;
      lis[i].onclick=function(){  
         for (var i = 0; i < lis.length; i++) {
        lis[i].style.background="";
      }
      index=this.index;
       animate(imgbox,{left:-index*iw},200)
      this.style.background="#a50000";
        
    };

}

var banr=$('.banner-right')[0]
banr.onmouseover=function(){
  animate(banr,{right:20},200)
  banr.style.zIndex=30;
}
banr.onmouseout=function(){
  animate(banr,{right:0},200)
}


var banl=$('.bannerleft')[0]
// // console.log(banl)
var banb=$('.bannerleft-box',banl)
var xuan1=$('.xuan1',banl)
for (var q = 0; q < banb.length; q++) {
  banb[q].index=q;

   banb[q].onmouseover=function(){
   xuan1[this.index].style.display='block'
    // xuan11.style.display='block'
    xuan1[this.index].style.zIndex=60;
   }
    banb[q].onmouseout=function(){
    xuan1[this.index].style.display='none'
     // xuan11.style.display='none'
    xuan1[this.index].style.zIndex=0;
   }
   

};
for (var p = 0; p < xuan1.length; p++) {
  xuan1[p].index=p;
 xuan1[p].onmouseover=function(){
    xuan1[this.index].style.display='block'
     // xuan11.style.display='block'
     banb[this.index].style.background="#e70050"
    xuan1[this.index].style.zIndex=60;
   }
    xuan1[p].onmouseout=function(){
    xuan1[this.index].style.display='none'
     // xuan11.style.display='none'
    xuan1[this.index].style.zIndex=0;
      banb[this.index].style.background=""
   }


};
// banner结束

// tab部分
   var linkbox=getclass('tab1top',document);
   // 找到HTML里的link类
   var links=linkbox[0].getElementsByTagName('a');
   var jiao1=getclass("tab-jiao",linkbox[0])
   // 从lingk类中找到a标签
    var lists=getclass('list',document);
       function tab1(q){
    var lists=getclass('list',document)[q];
    var listtu=$('.listtu',lists)

   xian(listtu,220,260)
   }
       function xian(li,w,h){
       for (var i = 0; i < li.length; i++) {
    li[i].onmouseover=function(){
     var bt=$('.bt',this)[0]
     var bl=$('.bl',this)[0]
     var br=$('.br',this)[0]
     var bb=$('.bb',this)[0]
     animate(bt,{width:w},500)
      animate(bl,{height:h},500)
       animate(bb,{width:w},500)
        animate(br,{height:h},500)
    //  console.log (bt)
        
    }
   li[i].onmouseout=function(){
     var bt=$('.bt',this)[0]
     var bl=$('.bl',this)[0]
     var br=$('.br',this)[0]
     var bb=$('.bb',this)[0]
     animate(bt,{width:0},500)
      animate(bl,{height:0},500)
       animate(bb,{width:0},500)
        animate(br,{height:0},500)
    //  console.log (bt)   
    }
    };
    }
  for (var i = 0; i < 3; i++) {
    tab1(i)
  };
    // console.log(listtu)
    // 找到list标签
     links[0].style.borderBottomColor="#e5004f"
     links[0].style.fontSize="20px";
      links[0].style.fontWeight="bold";
      jiao1[0].style.opacity=1;
// 给link[0]加一个默认值
     for (var i = 0; i < links.length; i++) 
// 对link进行一次遍历
     {
        // 将link的下标赋给一个属性明叫index
     	    links[i].index=i;

// console.log(lists)
// 点击事件
     	links[i].onmouseover=function(){
// 对list进行遍历，保证list的内容被隐藏
     		for (var j = 0; j < lists.length; j++) {
     			lists[j].style.display="none";
              links[j].style.borderBottomColor=""
              links[j].style.fontSize=""
            links[j].style.fontWeight="";
              jiao1[j].style.opacity=0;
              // 将a标签的颜色隐藏
     		};
// 通过link和list的下标相同将link的下标给了list点击是显示对应的内容
            lists[this.index].style.display="block"; 
            this.style.borderBottomColor="#e5004f";
            this.style.fontSize="18px";
             this.style.fontWeight="bold";
             jiao1[this.index].style.opacity=1;
            // 给标签的背景加色 
     	}
     };

// 图片边框变化


     // tab部分结束

     // 银泰百货count开始
var countright=getclass('count-right',document)
var right1=getclass("cuont-righttop",countright[0])
var jiao=getclass("cuont-righttopjiao",countright[0])
// console.log(jiao)
 var countright2=getclass('count-rightbottom',countright[0])
 // console.log(countright2)
 right1[0].style.fontWeight="bold";
 countright2[0].style.display="block";
 jiao[0].style.opacity=1;
right1[0].style.borderBottomColor="#e70050"
for (var i = 0; i < right1.length; i++) {
  right1[i].index=i;


   right1[i].onmouseover=function(){
    for (var j = 0; j < right1.length; j++) {
      countright2[j].style.display="none";
      right1[j].style.fontWeight="";
      right1[j].style.borderBottomColor=""
      jiao[j].style.opacity=0;
    };

   countright2[this.index].style.display="block";
    this.style.fontWeight="bold"
    this.style.borderBottomColor="#e70050"
     jiao[this.index].style.opacity=1;
   }
    };
var remen=$('.remen-box')
for (var j = 0; j < remen.length; j++) {
   xian(remen,190,245)

};
  // var a=0;
function diaoyong(a){
  // var middle=getclass('ss-middle',document)[0]
var middlebox=getclass('ss-middle1',document)
var middlejian=getclass('ss-middlejian',document)
var round=getclass('ss-middleround',document)
var imgmiddlebox=middlebox[a].getElementsByTagName('img')
var jiantou=middlejian[a].getElementsByTagName('div')
var ssli=round[a].getElementsByTagName('li')
  ssli[0].style.background="#e6175e"
 imgmiddlebox[0].style.display='block'
 jiantou[0].style.opacity=0;
 jiantou[1].style.opacity=0;
imgmiddlebox[0].onmouseover=function(){
 jiantou[0].style.opacity=0.85;
 jiantou[1].style.opacity=0.85;
}
imgmiddlebox[0].onmouseout=function(){
 jiantou[0].style.opacity=0;
 jiantou[1].style.opacity=0;
}
jiantou[0].onmouseover=function(){
 jiantou[0].style.opacity=0.85;
 jiantou[1].style.opacity=0.85;
}
jiantou[0].onmouseout=function(){
 jiantou[0].style.opacity=0;
 jiantou[1].style.opacity=0;
}
jiantou[1].onmouseover=function(){
 jiantou[0].style.opacity=0.85;
 jiantou[1].style.opacity=0.85;
}
jiantou[1].onmouseout=function(){
 jiantou[0].style.opacity=0;
 jiantou[1].style.opacity=0;
}
  var a=0;
 for (var i = 0; i < ssli.length; i++) {
     ssli[i].index=i; 
  ssli[i].onclick=function(){ 
  for (var j = 0; j < ssli.length; j++) {
      ssli[j].style.background=''
      imgmiddlebox[j].style.display='none'
    };
     this.style.background="#e6175e"   
    imgmiddlebox[this.index].style.display="block"

     }
    }

  jiantou[1].onclick=function(){  
    a++;
    if (a==imgmiddlebox.length) {a=imgmiddlebox.length-1}; 
    for (var i = 0; i < imgmiddlebox.length; i++) {
      ssli[i].style.background=""   
      imgmiddlebox[i].style.display="none"
    };
     ssli[a].style.background="#e6175e"   
    imgmiddlebox[a].style.display="block"
     }
// 左键

 jiantou[0].onclick=function(){ 
       a--;
       if (a==-1) {a=0};
    for (var i = 0; i < imgmiddlebox.length; i++) {
      ssli[i].style.background=""   
      imgmiddlebox[i].style.display="none"
    };
     ssli[a].style.background="#e6175e"   
    imgmiddlebox[a].style.display="block"
}
}

for (var i = 0; i < 9; i++) {
   diaoyong(i)
};



function mingpin(x){
 var lefttu=getclass("ss-leftbottom1box",document)

var lefttu1=getclass('ss-leftbottom1',lefttu[x])
// console.log(lefttu1)
var leftjiao=getclass("ss-leftbottom1jiao",document)
var ssjiao=leftjiao[x].getElementsByTagName('div')
// console.log(ssjiao)
var iw=parseInt(getstyle(lefttu1[0],"width"))
// console.log(iw)
lefttu1[0].style.left=0;
   var a=0;
   var b=0;
function move1(){
    b++;
    if(b==lefttu1.length){b=0}
      lefttu1[b].style.left=iw+'px'
    animate(lefttu1[a],{left:-iw},500)
    animate(lefttu1[b],{left:0},500)
   a=b;
}
ssjiao[0].onclick=function(){
        move1();
}
ssjiao[1].onclick=function(){
  b--;
  if (b<0) {b=lefttu1.length-1};
    lefttu1[b].style.left=-iw+'px'
    animate(lefttu1[a],{left:iw},500)
    animate(lefttu1[b],{left:0},500)
     a=b;
}

}
for (var i = 0; i <9; i++) {
mingpin(i)
};



for (var i = 0; i < 9; i++) {
var boxs=$('.wheel-box')[i]
var ones=$('.oness',boxs)
bor(ones)
};

// console.log(ones)
// var  imgs=$('.img-box',ones[0])
function bor(a){
for (var i = 0; i < a.length; i++) {
  a[i].onmouseover=function(){
      var bts=$('.bt',this)[0]
      var bls=$('.bl',this)[0]
     var brs=$('.br',this)[0]
    var bbs=$('.bb',this)[0]
    animate(bts,{width:270},500)
    animate(bls,{height:180},500)
    animate(brs,{height:180},500)
    animate(bbs,{width:270},500)
  }
  a[i].onmouseout=function(){
      var bts=$('.bt',this)
            var bls=$('.bl',this)
            var brs=$('.br',this)
            var bbs=$('.bb',this)
    animate(bts[0],{width:0},500)
    animate(bls[0],{height:0},500)
    animate(brs[0],{height:0},500)
    animate(bbs[0],{width:0},500)
  }
};

}

// for (var i = 0; i <6; i++) {
//   sstu(i)
// };

// 侧面导航

var bort=$('.body-right')[0]
// console.log(bort)
// var body1=$('.body1',bort)
var body2s=$('.body2',bort)[0]
// console.log(body2s)
body2s.onclick=function(){
  animate(document.body,{scrollTop:0},500)
   animate(document.documentElement,{scrollTop:0},500)
}
// var counter2=$('.counter1')
// console.log(counter2)
var sbox=$('.ss-box')
// console.log(sbox)
var kai=[]
var newarr=[]
for (var i = 0; i < sbox.length; i++) {
  newarr.push(sbox[i].offsetTop)  
     kai.push(true)
     // console.log(newarr)
};
var aa1=$('a',bort)
// console.log(aa1)
var body11=$('.body11',bort)
// console.log(body11)
var aas=true;
window.onscroll=function(){
  var t=document.documentElement.scrollTop||document.body.scrollTop
  function gun(){// 页面加载
      for (var i = 0; i <newarr.length; i++) {
    var img112=$("img",sbox[i])
      if (newarr[i]<t+500&&kai[i]) {
            kai[i]=false;
        for (var j = 0; j < img112.length; j++) {
          img112[j].src=img112[j].getAttribute("asrc")
        };
      };
  };
}
 
gun()
function louc(){
  for (var i = 0; i < newarr.length; i++) {
    if (newarr[i]<t+150) {
         for (var j = 0; j < newarr.length; j++) {
          aa1[j].style.display='block';
          body11[j].style.display='none';
            body11[j].style.zIndex=0;
      };
       aa1[i].style.display='none';
          body11[i].style.display='block';
          body11[i].style.zIndex=99;
    };
  };
}
louc()
function chu(){
    for (var i = 0; i < newarr.length; i++) {
    if (t>1000) {
      if (aas) {
         animate(bort,{right:25},100)
           aas=false;
       };        
   }else{
          if (!aas) { 
         animate(bort,{right:-50},100)
             aas=true;
       };
   }
}
       }
chu()


 }
// onscroll
 for (var i = 0; i < aa1.length; i++) {
      aa1[i].index=i
        aa1[i].onclick=function(){
      // document.documentElement.scrollTop=arr[this.index]
      // document.body.scrollTop=arr[this.index]
           animate(document.body,{scrollTop:newarr[this.index]},500)//将document。body对象的top值变成数组中span点钟位置的小标的第几个数。  谷歌适用
             animate(document.documentElement,{scrollTop:newarr[this.index]},500)//火狐和ie适用 
    };
   }
// 最后一个花括号
})


// 透明度

