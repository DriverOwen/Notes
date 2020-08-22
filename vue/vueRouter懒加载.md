### 为什么需要懒加载？

懒加载**用到时再加载**

像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，

默认webpack会把所有的路由业务视图打包到dist的app.js里面，业务越多，appjs越大，所以利用懒加载，把不同路由业务逻辑拆分，然后分成其它js文件，需要时再去申请，加快了响应速度。

造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时

![image-20200818175010806](C:\Users\Owen\AppData\Roaming\Typora\typora-user-images\image-20200818175010806.png)





### 懒加载的实现方式

![image-20200818175235534](C:\Users\Owen\AppData\Roaming\Typora\typora-user-images\image-20200818175235534.png)

- 方式一 ：结合Vue的异步组件和Webpack的代码分析

  ```vue
  const Home = resolve => {require.ensure(['../components/Home.vue'],()=>{resolve(require('../components/Home.vue'))})}
  ```



- 方式二：AMD写法

  ```vue
  const About = resolve => require(['../componnets/About.vue'],resovle)
  ```

- 方式三：ES6中，我们可以更加简单的写法，组织Vue异步组件和WebPack的代码分割

  ```vue
  const Home = ()=> import('../components/Home.vue')
  ```

  