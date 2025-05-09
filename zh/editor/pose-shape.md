# 创建和编辑形状

## 形状
1. 形状是一种矢量图，可以是一根曲线，也可以是任意的形状，它是由贝塞尔曲线组成。
2. 形状可以作为遮罩来遮住其他的插槽。
3. 形状作为遮罩来使用时，必须有一个封闭的形状，而且得有填充。
4. 形状可以作为路径约束的路径来约束骨骼只能沿着曲线移动。
5. 当形状作为路径来使用时，必须是一根曲线，可以闭合，也可以不闭合，但不能有填充，也不能有多个曲线。
## 创建
1. 选择一个骨骼或者一个插槽
2. 在大纲面板中点击**创建形状**按钮
3. 在舞台上点击鼠标绘制形状。
4. 绘制完毕后，关闭舞台下发的**形状工具箱**面板

## 编辑

### 编辑形状的属性

1. 可以在插槽或者形状的属性面板中编辑
    - 点击编辑按钮，进入编辑形状模式进行进一步编辑
    - 点击添加骨骼，给形状绑定骨骼
    - 点击自动权重，给绑定形状上的骨骼重新计算权重
    - 点击转成遮罩，把形状变成遮罩

### 编辑形状点的位置
1. 在舞台上选中一个带有形状的插槽
2. 舞台上会显示出形状的点和操作手柄的点。
3. 按住和拖动鼠标修改点的位置或者操作手柄的点的位置，可以修改形状。

### 形状编辑工具箱
1. 在形状的属性面板中点击**编辑**，进入编辑形状模式。
2. 舞台下方出现编辑形状工具箱
3. 第一排，从左到右依次是：编辑，添加点，删除点，尖角（改变点的连接方式—），绘制，填充。
4. 第二排，从左到右依次是：清空，设置线条颜色， 是否填充颜色， 设置填充颜色。
5. 选中编辑工具，此时点击并拖动就可以编辑点和控制手柄的位置，从而改变形状。
   1. 点击拖动图形上的点，可以修改该点的位置。
   2. 点击拖动控制手柄的点，可以改变曲线连接的方式，控制曲线的弧度。
6. 选中添加点功能， 可以在线条上添加点。
7. 选中删除点功能，可以删除线条上的点。如果是封闭的形状，最后三个点不能被删除掉。如果想完全删除，可以点清空按钮。
8. 选中尖角功能，可以改变线条上点的连接方式，是硬的角，还是带弧度的平滑连接。在点上点击一下，如果点的形状变成了方形，此时这个点上的两个控制手柄可以分别移动，不在一条直线上，两条线可以在这个点上形成尖角。 再在点上点一下，如果点的形状变成了菱形，两个控制手柄消失，此时是硬链接，两条线在这个点上形成硬的尖角。如果在点上再点一下，并且按住鼠标拖动，则点的形状变成了圆形，可以拖出两个控制手柄，并且这两个控制手柄在一条直线上，此时两条线就在这个点上光滑的链接上。重复执行上面的操作，可以在这三种连接形态上依次切换。 如果点的形状是圆形，但也是尖角。说明两个控制手柄太短，此时只要按住点拖动就可以把控制手柄拉长。
9. 选中绘制功能，可以在舞台上绘制图形。先点击鼠标，如果立刻松开鼠标，再在别的位置点击，就可以画出直线。 如果按住鼠标拖动，则可以画出曲线。如果绘制了超过3个点，鼠标放在第一个点上点击，则可以围成一个封闭的形状。 如果在绘制的过程中点击右键，则可以中断当前绘制，再次绘制的话，会画出两一条线。如果在绘制过程中，勾选了第二排的是否填充颜色，当绘制完一个封闭形状后，会立刻涂上颜色。
10. 选中填充功能，可以给封闭的图形填上颜色，或者删除填充的颜色。 在第二排勾选上填充颜色，选择一个填充颜色，此时在封闭形状内部点击，则可以填充颜色。如果第二排不勾选填充颜色，则是删除填充的颜色。
11. 点击**清空**按钮，可以删除当前这个图形的所有的点，线，和填充的颜色。想要重新画，可以使用这个功能。

### 绑定骨骼与调节权重
1. 形状和网格一样，都可以绑定骨骼，调节权重，并利用骨骼的平移旋转缩放来改变形状
2. 使用方法和网格绑定骨骼的步骤是一样的。可以参考 [网格的绑定](../editor/pose-rigging)。
3. 当形状点的连接是平滑连接（点是圆形，两个手柄在一条直线上）如果形状绑定了骨骼，但权重设置不合理时，随着骨骼的变化，平滑连接可能会出现尖角。这是由于点和手柄的权重不一致造成的，如果要保持平滑的连接，必须要确保，点和它的两个控制手柄绑定的骨骼的权重都是一样的。
   

## 删除
1. 点击属性面板上方的删除按钮。