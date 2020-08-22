
/* 
    1. Vue 内部是如何监听数据的改变
    * Object.defineProperty -> 监听对象属性的改变

    2. 数据发生改变时，Vue是如何知道要通知哪些数据发送变换
    * 发布者订阅模式
*/

/* Object.definePrototype */

class Vue {

    constructor(options={}){
      this.el = document.querySelector(options.el)
      this.data = options.data()
      this.Observe(this.data)
      this.Compiler(this.el)
    }
    
    Observe(data, vm){
     
      Object.keys(data).forEach(key => {
        const dep = new Dep() /* 实现一对多的数据更新 页面中重复多个地方使用同一数据时，统一更新  也就是一个data对应一个dep对象*/
        /*
          message -> dep
          name -> dep

        */
        let value = data[key]
        //console.log(value);
        /* 绑定了set和get事件 只要访问或者修改属性 就会触发回调函数*/
        Object.defineProperty(data, key, {
          set(newValue){
           // console.log('监听到' + key + '改变');
            /* 监听到了改变，告诉订阅者发送改变 */
            if(newValue !== value) {
              value = newValue
              dep.notify()
            }
          },
          get(){
           // console.log('获取' + key + '对应的值')
           // console.log(Dep.target);
            if(Dep.target) {
              dep.addSubs(Dep.target)
             console.log(dep);
            }
            return value
          }
        })
      })
    }
  
    Compiler(el){
      /* 获取要渲染的dom内容 */
      const _this = this /* 防止this指向发生改变 */
      const childrens = el.children

      if(!childrens.length) throw new Error(el.id + '挂载元素里面内容为空！')
      for(let i = 0; i < childrens.length; i++ ){
        const node = childrens[i]

        /* 获取有v-text属性的dom 实施渲染 */
        if(node.hasAttribute('v-text')){
          const dataName = node.getAttribute('v-text')
          new Watcher(dataName, node, _this, 'innerHTML')
        }
        if(node.hasAttribute('v-model')) {
          const dataName = node.getAttribute('v-model')
          new Watcher(dataName, node, _this, 'value')
          node.addEventListener('input', (function() {
            return function() {
              this.data[dataName] = node.value
            }
          })().bind(this))
        }
        /* 遍历dom */
        // console.log(node.children.length);
        if(node.children.length) {
          // console.log('aa');
           this.Compile(node)
         }
        
      }
    }
}

/* 发布者订阅者模式 */
/* 发布者 */
class Dep {

  constructor(){
    this.target = null
    /* 记录订阅者 */
    this.subs = []
  }

  addSubs(watcher){
    this.subs.push(watcher)
  }

  notify(){
    this.subs.forEach(item => {
      item.update()
    })
  }

}
/* 订阅者 */
class Watcher {

  constructor(name, el, vm, attr){
    this.name = name
    this.el = el 
    this.vm = vm
    this.attr = attr
    this.update()
  }

  // get() {
  //   Dep.target = this // 绑定当前订阅者
   
  //   const value = this.vm.data[this.name]
  //   /*
  //   属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
  //   */
  //   if(value){
  //     Dep.target = null // 释放当前订阅者 
  //     return value
  //   }else{
  //     Dep.target = null // 释放当前订阅者 
  //     throw Error("没有定义" + this.name)
  //   }
  // }

  update(){
    /* 更新页面 实现响应式 */
    Dep.target = this // 释放当前订阅者 
    //console.log(this.name + '发送了更新----');
    this.el[this.attr] = this.vm.data[this.name]
    Dep.target = null // 释放当前订阅者 
  }

}


