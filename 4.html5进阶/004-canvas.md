### canvas
canvas是一个画布,用来在网页上绘制图像 

### canvas基础
* 创建canvas

```javascript
<canvas></canvas>
```
> canvas默认的宽高是300px*150px

* 画布的大小

> * 在canvas标签中设置的width和height是指画布大大小,不用带单位
> * 在css中设置的width和height是指画布拉伸缩放后的大小
> * 一般建议在js中设置画布的大小

* 画直线
```javascript
    cxt.moveTo(0,0);//指定起始坐标
    cxt.lineTo(100,100);//直线终点坐标
    cxt.lineTo(100,200);
    cxt.strokeStyle='#f00';//指定描边的样式
    cxt.lineWidth = 10;//设置线条的宽度
    cxt.closePath();//封闭路径
    cxt.stroke(); //描边

    cxt.fillStyle = 'rgba(0,255,0,0.5)';//设置填充的颜色
    cxt.fill();//闭合路径后填充    
```

* cxt.beginPath();重新开始路径,绘制时不会绘制之前的路径

* 圆形

```javascript
cxt.arc(圆心x,圆心y,半径,起始角度,终止角度,是否是逆时针(true为逆时针))
```
> 3点钟时0PI 6点钟是0.5PI 9点钟是1PI 12点钟是1.5PI


* 矩形
cxt.strokeRect(x,y,宽,高)
cxt.fillRect(x,y,宽,高)

* 平移坐标原点
cxt.translate(x,y);

* 旋转坐标系
cxt.rotate(弧度) 以顺时针为方向旋转

* 缩放变换
cxt.scale(x轴比例,y轴比例);

> 所有的变换都是针对坐标系的
> 各种变换之间是相互叠加的

* save和restore环境
cxt.save(); 保存之前的环境
cxt.restore();恢复到上一次保存时的环境

* 线性渐变(LinearGradient)
var linearGradient = cxt.createLinearGradient(起始x,起始y,终止x,终止y);
linearGradient.addColorStop(百分比,颜色)

* 径向渐变(RadialGradient)
var radialGradient = createRadialGradient(起始圆心x,起始圆心y,起始圆半径,终止圆心x,终止圆心y,终止圆半径);


* 文本

* 图像绘制

* 图形画刷

* 剪辑区

* 绘制阴影

* 绘制曲线

> * 圆弧: context.arc(圆心x,圆心y,半径,起始角度,终止角度,是否逆时针) 
> * 二次样条曲线: context.quadraticCurveTo(qcpx,qcpy,qx,qy)
>> http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html
> * 贝塞尔曲线: context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)
>> http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html

### 推荐插件
* http://echarts.baidu.com/
* https://antv.alipay.com/zh-cn/index.html
* http://www.chartjs.org/
* https://www.highcharts.com
* https://d3js.org/
