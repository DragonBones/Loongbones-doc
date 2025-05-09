# 创建和编辑骨骼

## 创建骨骼

创建骨骼的方法有三种：

1. 使用舞台右上角第二个的创建骨骼工具创建
    1. 点击舞台右上角第二个的创建骨骼按钮
    2. 在舞台上选择一个骨骼作为父骨骼。
    3. 在舞台上点击鼠标左键不放
    4. 拖动鼠标，拖出骨骼的长度
    5. 松开鼠标
2. 创建首尾严格相接的骨骼
    1. 点击舞台右上角第二个的创建骨骼按钮
    2. 按照Ctrl键
    3. 在舞台上点击鼠标，创建首尾相接的骨骼。
3. 在大纲面板创建
    1. 选择一个骨骼作为父骨骼
    2. 在大纲面板顶部点击创建骨骼按钮。
    3. 创建一个默认长度为100的骨骼。

## 编辑骨骼属性
1. 选中一个骨骼
2. 在属性面板可以修改骨骼的属性

## 使用十字手柄编辑骨骼的变换属性
1. 在舞台上选中一个骨骼。
2. 出现十字手柄，十字手柄的各个不同位置可以编辑骨骼的不同属性。
    1. 左侧箭头：拖动改变骨骼的 x 方向的位置
    2. 下侧箭头：拖动改变骨骼的 y 方向的位置
    3. 右侧手柄：拖动改变骨骼的 x 方向的缩放
    4. 上侧手柄：拖动改变骨骼的 y 方向的缩放
    5. 十字手柄的中心：拖动改变骨骼的 x 和 y 方向的位置
    6. 左上的半圆：拖动改变骨骼整体的缩放
    7. 右下的半圆：拖动改变骨骼的旋转
    8. 十字手柄之外的其他任意空白位置：拖动改变骨骼的旋转
    9. 注意通过十字手柄修改，改变的是骨骼的世界坐标系下的位置。

## 修改骨骼的层级关系

1. 方法一：在大纲面板拖拽骨骼到合适的父级骨骼下。
2. 方法二：在属性面板最上方第一个按钮，设置父级按钮，点击一下，然后在舞台上选择合适的父级骨骼再点击一下。

## 链式骨骼的操作

对于一长串的父子关系的骨骼（经常使用在做飘带效果），好像一条绳子。如果像操作一条柔软的绳子一样来操作骨骼。

1. 选中舞台右上角工具的三个链式修改工具。
2. 使用框选或者多选的方式，选择多个父子关系的骨骼。
3. 在选中的最后一个子级骨骼后面出现一个绿色手柄。
4. 拖动这个手柄，就可以像甩绳子一样，操作这一串骨骼了。

## 可以打关键帧的属性
1. 位置
2. 缩放
3. 旋转

## 删除骨骼
1. 方法一：在属性面板上方的第二个按钮，删除按钮，点击一下。
2. 方法二：在舞台上选中骨骼，然后按 Delete 键删除。