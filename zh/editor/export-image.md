# 导出成图片或者序列帧

龙骨支持把动画导出成序列帧。

1. 点击顶部工具栏的导出按钮，打开导出面板
2. 选择图片
3. 配置：
    - 目标：设置导出哪个骨架。图片模式下，一次只能导出一个骨架的动画。
    - 图片设置
        - 图片类型：单张或者序列帧。单张需要指明哪个动画的哪一帧。
        - 图片格式：支持 png 和 jpg 格式。
    - 动画设置
        - 包含动画：需要导出的动画，可以选所有动画，或者某一个动画
        - fps：导出动画的速率。可以和原 fps 不一样。大于原来的 fps 相当于是慢动作。fps 越大，导出的图片数量越多。
        - 背景颜色：纹理集是否包含背景色
    - 输出设置
        - 图片大小：自动。目前暂时仅支持自动。系统会自动计算所有动画的每一帧，按照尺寸最大的那一帧的大小，来作为图片大小。保证每一张图片的大小都保持一致。
        - 输出比例：按照比例对图片进行缩放。
        - 背景颜色：图片是否使用某一种颜色填充背景，jpg 文件不支持透明背景，所以 jpg 格式的图片必须有背景色。
    - 文件设置
        - 前缀：设置文件名的前缀，可以不填。
        - 后缀：设置文件名的后缀，可以不填。
        - 生成名称：导出图片的名称，规则是 前缀 + 骨架名 + "_" + 动画名 + "_" + 序列号 + 后缀 + "." + 扩展名。
4. 取消按钮：点击关闭导出弹框
5. 导出按钮：点击后开始导出。