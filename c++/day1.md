# day1

## cin

cin >> 输入流

`.ignore(x)` 忽略输入流前x个字符

`.getline(var,n) ` 获取var的前n个字符

`.peek()` 挑选一个字符

`.get()` 获取一个字符

`.gcount()`  读取字符数

```c++
	const int size = 50;
	char buf[size];
	
	cout << "请输入一段文本";
	cin.read(buf,20);
	
	cout << "the input str numer is : " << cin.gcount() << endl;
	
	cout << "the str is : ";
	cout.write(buf,20);
	cout << endl;
```



`.read(var,n)`  读n个数据到缓冲区



## cout

`.precision()` 精度设置

![image-20201030191222776](C:\Users\Owen\AppData\Roaming\Typora\typora-user-images\image-20201030191222776.png)

`.width()` https://blog.csdn.net/weixin_38371360/article/details/85682898



main(avgc,acga)

avgc 函数的输入参数个数

![image-20201030192023261](D:%5Cnotes%5Cimgs%5Cimage-20201030192023261.png)



### file operation

	ifstream in;
	in.open("test.txt");
	if(!in){
		cerr << "打开文件失败" << endl;
		return 0; 
	}
	char x;
	while(in >> x){
		cout << x;
	}
	cout << endl;
	in.close(); 
![image-20201030193832514](D:%5Cnotes%5Cimgs%5Cimage-20201030193832514.png)

### file open mode

![image-20201030194206365](D:%5Cnotes%5Cimgs%5Cimage-20201030194206365.png)

![image-20201030194239131](D:%5Cnotes%5Cimgs%5Cimage-20201030194239131.png)

多个 参数 用 |来分开

![image-20201030200716654](D:%5Cnotes%5Cimgs%5Cimage-20201030200716654.png)