# Machine Learn



## Machin learning algorithms

- Supervised learning **(知道数据的特征 比如垃圾邮箱分类)**
  - 通过人让计算机学会某些事情
    - 连续的问题--回归  给定价格和房子的尺寸数据集 预估房子的价格
    - 离散的问题--分类  给定一串具有多个特征值的数据集 根据特征将数据集标为不同类
- Unsupervised learning --> 聚类算法（子类）**（不知道数据的特征 比如给你一个用户数据集 然后去自我找数据里面的特征ps:人事先也不知道里面有什么特征）**
  - 让计算机自己通过学习学会某些事情
  - 聚类算法 -- google news(收集新闻 组成专题 百度也有关于同一个新闻会得到不同平台报送的效果)
  - 给一串数据 自动把这些个体分成簇 没有给正确答案 让算法自己来分类
  - ![image-20210203161757984](D:%5Cnotes%5Cimgs%5Cimage-20210203161757984.png)
  - ![image-20210203162936143](D:%5Cnotes%5Cimgs%5Cimage-20210203162936143.png)
  - 鸡尾酒会问题（分离不同音色下的声音出来）
  - ![image-20210203163714142](D:%5Cnotes%5Cimgs%5Cimage-20210203163714142.png)
- Others: Reinforcement learning, Recommender systems.

## 模型描述

![image-20210204162620284](D:%5Cnotes%5Cimgs%5Cimage-20210204162620284.png)

>  Octave (类似于matlab工具 里面有大量函数库可以直接调用 便于机器学习和算法调用)

## 代价函数

>  **损失函数（Loss Function ）**是定义在单个样本上的，算的是一个样本的误差，而**代价函数（Cost Function ）**是定义在整个训练集上的，是所有样本误差的平均，也就是损失函数的平均，这给我们评价学习效果提供了一个标准，提出这个后下一步要做的就是不断优化神经网络来减小代价函数的值。

![image-20210204162657942](D:%5Cnotes%5Cimgs%5Cimage-20210204162657942.png)

**对于求J的最小值就是求使用代价函数J使得拟合的h(x)值与y(x)最小 也就是最相近**



![image-20210204162945422](D:%5Cnotes%5Cimgs%5Cimage-20210204162945422.png)

![image-20210204164654169](D:%5Cnotes%5Cimgs%5Cimage-20210204164654169.png)

 y(i) 实际值

![image-20210204170756506](D:%5Cnotes%5Cimgs%5Cimage-20210204170756506.png)

不同的θ对应J(θ)的值 （颜色） 然后我们要求minimize J(θ) 也就是当theta等于1时，J(θ)的值越小，此时为最优拟合结果

![image-20210204172513597](D:%5Cnotes%5Cimgs%5Cimage-20210204172513597.png)

等高线图，反应的`J(θ0，θ1)`在两个参数下，所对应的不同的拟合h(x)函数  （从上往下看） 等高线图最小值在里面

等高线图，每一个圈代表相同的`J(θ0，θ1)`值，但是`theta0`和`theta1`不同

曲面的高度就算`J(θ0，θ1)`的值

![image-20210204174552476](D:%5Cnotes%5Cimgs%5Cimage-20210204174552476.png)

![image-20210204174138390](D:%5Cnotes%5Cimgs%5Cimage-20210204174138390.png)

## 梯度下降 (gradient descent not only regression but other algorithm)

to minimize function (最小化函数)

 在函数工作过程中不断一点点地改变theta0和theta1的值 (assuming only two parameter) 使得J(theta0,theta1)变小

![image-20210204193835505](D:%5Cnotes%5Cimgs%5Cimage-20210204193835505.png)

导数的最小方向 最大梯度的方向

![image-20210204194119146](D:%5Cnotes%5Cimgs%5Cimage-20210204194119146.png)

可以理解为下山的过程，一点点的移动位置，找对方向调整方向然后下山，直到到达J(theta0,theta1)的**局部最低点** 这就是gradient descent

> 注意是局部最低点 而不是整个图像的最低点 因为所选的起点不同 所梯度下降的路径不同 like below is  a fecture of gradient descent algorithm

![image-20210204194431026](D:%5Cnotes%5Cimgs%5Cimage-20210204194431026.png)

梯度下降算法的数学定义

![image-20210204200528783](D:%5Cnotes%5Cimgs%5Cimage-20210204200528783.png)

alpha 代表学习率 后面是导数项

this algorithm what doing? 

### 导数项

![image-20210204201308717](D:%5Cnotes%5Cimgs%5Cimage-20210204201308717.png)

在这两个图中，alpha后面的导数项代表你取的theta的导数值，从图可知两条不同正负斜率的直线，所以导数的值一个是>=0,一个是<=0，他们决定了theta一点点改变的方向在x轴上，在向最小值靠拢（基于one parameter）

### alpha

![image-20210204201932128](D:%5Cnotes%5Cimgs%5Cimage-20210204201932128.png)

它决定了梯度下降的速度(步子)  太小只会耽误算法速度，但是太大的话会导致函数无法达到最小值或者无法收敛和离散

![image-20210204202210451](D:%5Cnotes%5Cimgs%5Cimage-20210204202210451.png)

达到局部最小值时，梯度算法会一直保持在当前theta因为 算法 theta=theta-alpha*0

![image-20210204202617146](D:%5Cnotes%5Cimgs%5Cimage-20210204202617146.png)

梯度算法下降时会自动调节速度 因为导数越来越小，斜率越来越平，每次相减产生的值也就越小了，所以不需要额外的调节alpha的值

### 线性回归的梯度下降



梯度下降算法结合cost function --> 线性回归

![image-20210204203932459](D:%5Cnotes%5Cimgs%5Cimage-20210204203932459.png)

![image-20210204204712999](D:%5Cnotes%5Cimgs%5Cimage-20210204204712999.png)

![image-20210204204839042](D:%5Cnotes%5Cimgs%5Cimage-20210204204839042.png)![image-20210204205225972](D:%5Cnotes%5Cimgs%5Cimage-20210204205225972.png)

![image-20210204205217916](D:%5Cnotes%5Cimgs%5Cimage-20210204205217916.png)

![image-20210204205424226](D:%5Cnotes%5Cimgs%5Cimage-20210204205424226.png)

也有没有使用全部训练集的梯度下降算法，而只是观察子集

而求解函数最小值的方法不止梯度下降算法，还有矩阵里面、导数里面求极值的方法



### 

