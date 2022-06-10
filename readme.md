### attribute变量
  传输的是与顶点相关的数据
### uniform变量
  传输的是对于所有顶点都相同（或与顶点无关）的数据


  gl.bindBuffer(target, buffer)
  允许使用buffer表示的缓冲区对象并将其绑定到target表示的目标上

  参数： target 是以下中的一个：
    - gl.ARRAY_BUFFER 表示缓冲区对象中包含了顶点的数据
    - gl.ELEMEN_ARRAY_BUFFER 表示缓冲区对象中包含了顶点的索引值
    - buffer 指定之前由gl.createBuffer() 返回的待绑定的缓冲区对象

  gl.vertexAttribPointer(location, size, type, normalized, stride, offset)
  将绑定到gl.ARRAY_BUFFER 的缓冲区对象分配给由location指定的attribute变量

  参数：
    - stride 步进参数  也就是单个顶点的所有数据（顶点的坐标、大小、颜色等）的字节数，也就是相邻两个顶点间的距离
    - offset 偏移参数  表示当前考虑的数据项距离首个元素的距离


变量控制改变片元着色器颜色，必须申明precision mediump float;精度限制


  ### 旋转矩阵，绕y轴旋转的矩阵如何确定？

  ### 复合矩阵 eg： 先平移后旋转， 如何做矩阵相乘？