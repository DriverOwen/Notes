### margin的简写：

  比如：margin-top:10px;margin-left:20px;margin-right:20px;margin-bottom:10px;
  可以写成：margin:10px 20px;
 或者：margin:10px 20px 10px 20px;
 再或者：margin:10px 20px 10px;
 注意：简写后的顺序是“上-左右-下”，“上-右-下-左”，“上下-左右”

### padding的简写：同上


### 颜色的简写：

 比如：color:#FFFFFF
 可以写成：color:#FFF
 或者：color:white


### 边框的简写：

 比如：border-width:1px; border-style:solid; border-color:#FFFFFF;
 可以写成：border:1px solid #FFFFFF;
 或者写成：border:1px solid #FFF;


### 背景的简写：

 比如：background-color:#FFFFFF; background-image:url(background.gif); background-repeat:no-    

​      repeat; background-attachment:fixed; background-position:0 0;
 可以写成：background:#FFF url(background.gif) no-repeat fixed 0 0;


### 字体的简写：


  比如：font-style:normal; font-weight:bold; font-size:12px; line-height:120%; font-family:”宋体”,” 

​      Arial”;
  可以写成：font:normal bold 12px/120% “宋体”,”Arial”;


### 链接统一定义：

 为了避免每个链接都要给出css来定义，可以用这样的伪类来定义：
 a:link {color:#666666; text-decoration:none;}
 a:visited{color:#666666; text-decoration:none;}
 a:hover{color:#000099; text-decoration:underline;}
 a:active{color:#000000; text-decoration:none;}


### 用body来定义网页：

 body{
  margin:0 auto;
   padding:0; border:0;
  font-size:12px; text-align:center;
  font-family: “宋体”,”Arial”,”Lucida Grande”,”Lucida Sans Unicode”,”Verdana”,”sans-serif”;
 }
 margin:0 auto;的意思就是网页居中，很多初学者都不知道div+css如何使网页居中，其实就这么简单。
 padding:0; border:0;是定义所有的内补丁和边框为0，当然你特殊声明的除外。
 font-family: “宋体”,”Arial”,”Lucida Grande”,”Lucida Sans Unicode”,”Verdana”,”sans-serif”;是定义 

 网页文字的字体，默认会按照这个顺序来显示。如果出现英文的话，英文的默认字体是Arial。

  不要忽视这么一点代码，如果你不注意的话，会使css文件大很多。。比如没经过简写的css有15K，那么通过简写后的CSS文件可能只有13K了。