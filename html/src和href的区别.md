**URL**：Uniform Resource Locators（统一资源定位器）的简写，Web浏览器通过URL从Web服务器请求页面。

url不是属性，src和href是属性，src用于替换当前元素，href用于在当前文档和引用资源之间确立联系，也就是说src引用的路径是img等要加载的路径，href引用的路径是要跳转到的地方。

### **src**

src是source的简写，表示的是引入文件，目的是要把文件加载到html页面中去，当浏览器解析的时候会暂停其他的内容而会先加载src内容，必须要等到src的内容加载完成之后才会执行后面。这就是为什么js文件往往放在了html文件的最下面的原因。如果是在页面head上放了js文件用:window.onload事件处理。浏览器会识别该文档为css文档，并行下载该文档，并且不会停止对当前文档的处理。这也是建议使用link的原因。

src的内容是页面必不可少的一部分，是引入src指向的内容会嵌入到文档中当前标签所在的位置。常用的有：img、script、iframe。例如:

```html
<script src="script.js"></script> 
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"> 
```

#### href

**href**是Hypertext Reference的简写，表示的时超文本引用，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，它与页面直接的关系为链接的关系，在加载它的时候页面本身也不会停止其他内容的加载。用来建立当前元素和文档之间的链接。

常用的有：link、a。例如：

```
<link href="reset.css" rel=”stylesheet“/>
```