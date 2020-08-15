在使用vue低版本的脚手架创建项目时会有以下选择:

　　Runtime + compiler

　　Runtime only

1、区别一

　　通过这两种方法创建的脚手架，区别在于main.js（在src文件夹中）

　　　　在Vue实例中，runtime-compiler创建的项目中参数是：

　　　　　　components和template

　　　  runtime-only创建的项目中参数为：
　　　　　　render函数

2、组件的渲染过程

　　组件是如何被渲染到页面中的？
　　　　template ---> ast ---> render ---> vDom ---> 真实的Dom ---> 页面

　　ast：抽象语法树

　　vDom：虚拟DOM



3、runtime-only

　　·我们在使用runtime-only的时候，需要借助webpack的loader工具，将.vue文件编译为javascript，因为是在编译阶段做的，所以他只包含运行时的vue.js代码，所以代码体积会更轻量

　　·再将.vue 文件编译为javascript文件的过程当中会将组件的template模板编译为render函数，所以我们得到的是render函数的版本

　　运行的时候是不带编译的，编译是在离线的时候做的

　　·template会通过vue-template-compiler转换为render函数

 

4、runtime-compiler

　　·在vue中，最终渲染都是通过render函数，如果写template属性，则会编译为render函数，那么这个编译过程会在运行时发生，所以需要带有编译器的版本

　　·编译过程会对性能有一定的损耗

 

结论：

　　runtime-only：将template在打包的时候，就已经编译为render函数

　　runtime-compiler：在运行的时候才去编译template

　　结果：

　　　　　　发布生产的时候，runtime-only构建的项目代码体积更小，运行速度更快

　　推荐使用runtime-only函数

cil4默认使用runtime-only创建项目。