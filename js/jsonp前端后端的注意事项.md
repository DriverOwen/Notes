#### jsonp

**JSONP(**JSON with **Padding)**（json  **数据填充**）**只支持GET请求**

是JSON的一种“使用模式”,可用于解决主流浏览器的跨域数据访问的问题。**跨域产生原因是浏览器的同源策略**（cors）

不同源：

- 协议不同：http 和 https
- 主域不同  www.domain001.com  和 www.domain002.com
- 端口号不同 http：//localhost:8088 和 http：//localhost:9000。

#### 原理

script标签里面的src 属性里加载的资源不受同源策略影响，具有跨域能力。强调 ！！！**只支持GET请求**

例如

```html
<script src='http://url?callback=f'></script>
<script>
function f(data){
	console.log(data);
}
</script>
// 后端返回一个 函数带数据参数的，然后前端再执行这个函数就能实现数据打印，其它业务逻辑道理一样。

```