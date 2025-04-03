# Mesh

Mesh is a type of slot resource. A mesh transforms an image into a webbed structure composed of one or more triangles.
<br>
A mesh includes parts such as images, triangles, borders, mesh points, custom lines, and UV coordinates.
<br>
Meshes correspond to models in 3D, where 3D models are composed of triangles in space. A mesh is a flat triangular grid.

1. Mesh points are all the points contained in the mesh, which form a series of triangles.
2. Triangles are formed by mesh points.
3. The border is formed by the edges of the outermost triangles of mesh points, determining the shape of the mesh.
4. Custom lines: when creating a mesh, triangles are automatically calculated by an algorithm. If users find the triangles unreasonable, they can change the structure of triangles by drawing lines themselves. These user-drawn lines are custom lines.
5. UV coordinates indicate the position of points in the image. A UV coordinate is a position like (0.5, 0.5). Its range is 0-1, with the top-left corner of the image at (0,0) and the bottom-right corner at (1,1). UV coordinates represent the position of points on the image.

The points of a mesh can be moved freely, allowing flexible image deformation that makes 2D images appear to have 3D effects.
<br>
Besides directly modifying mesh points, there are other ways to control mesh point deformation, such as skinning and mesh deformers.