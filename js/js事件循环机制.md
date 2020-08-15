##### 任务循环

所有的任务可以分为同步任务和异步任务，同步任务，顾名思义，就是立即执行的任务，同步任务一般会直接进入到主线程中执行；

而异步任务，就是异步执行的任务，比如ajax网络请求，setTimeout 定时函数等都属于异步任务，异步任务会通过任务队列( Event Queue )的机制来进行协调。

<img src="https://upload-images.jianshu.io/upload_images/6100502-7831389bec37fe52.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp" alt="img" style="zoom: 50%;" />**事件循环机制**

同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入`Event Table`并注册函数

当指定的事情完成时，`Event Table`会将这个函数移入`Event Queue`

当栈中的代码执行完毕，执行栈（`call stack`）中的任务为空时，就会读取任务队列（`Event quene`）中的事件，去执行对应的回调

如此循环，形成js的事件循环机制（`Event Loop`）

![img](https://images2018.cnblogs.com/blog/698814/201809/698814-20180906144953689-838865376.jpg)

##### 宏任务（macrotask）和微任务（microtask）

JS中分为两种任务类型：`macrotask`和`microtask`，在`ECMAScript`中，`microtask`称为`jobs`，`macrotask`可称为`task`

+ `macrotask`（又称之为宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）
  + 每一个`task`会从头到尾将这个任务执行完毕，不会执行其它
  + 浏览器为了能够使得`JS`内部`task`与`DOM`任务能够有序的执行，会在一个`task`执行结束后，在下一个 `task` 执行开始前，对页面进行重新渲染 （`task`->渲染->`task`->...）

+ `microtask`（又称为微任务），可以理解是在当前 `task` 执行结束后立即执行的任务
  + 也就是说，在当前`task`任务后，下一个`task`之前，在渲染之前
  + 所以它的响应速度相比`setTimeout`（`setTimeout`是`task`）会更快，因为无需等渲染
  + 也就是说，在某一个`macrotask`执行完后，就会将在它执行期间产生的所有`microtask`都执行完毕（在渲染前）

> microtask主要包含：Promise、MutaionObserver、process.nextTick(Node.js 环境)
>
> macrotask 主要包含：script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)
>
> 补充：在node环境下，process.nextTick的优先级高于Promise，也就是可以简单理解为：在宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才会执行微任务中的Promise部分。

##### 代码实列

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
/* result : script start script end promise1 promise2 setTime out */
```

##### 总结下运行机制：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后`GUI`线程接管渲染
- 渲染完毕后，`JS`线程继续接管，开始下一个宏任务（从事件队列中获取）
- **JavaScript 是一门单线程语言，异步操作都是放到事件循环队列里面，等待主执行栈来执行的，并没有专门的异步执行线程。**。

##### 参考

[深入理解JavaScript事件循环机制](https://www.cnblogs.com/yugege/p/9598265.html)](https://www.cnblogs.com/yugege/p/9598265.html)

[js事件循环](https://www.jianshu.com/p/667a20d008cf)