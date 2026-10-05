# Creating and Editing Mesh Deformers

A mesh deformer first creates a set of quadrilateral meshes to cover the mesh, then creates a set of Bezier curve meshes. The curve meshes control the deformation of the quadrilateral meshes, which in turn control the deformation of points on the mesh, achieving a technique that uses a small number of points to control a large number of points.

<br>Advantages
- Control a large number of points with a small number of points
- More flexible deformation, can achieve pseudo-3D effects

<br><br>Disadvantages
- Relatively high computational load

## Creation
1. Select a mesh that hasn't been bound to bones.
2. Click the **Add Mesh Deformer** button in the properties panel
3. In the pop-up dialog, adjust the curve segments and mesh segments.

## Editing
1. You can see a gray mesh on the stage with green points and lines.
2. The gray mesh is a quadrilateral mesh that controls the mesh points.
3. The green points are the Bezier curve control handles; the actual curves are not displayed.
4. Click and drag the green points to control the mesh deformation.
5. Click Restore Initial Position in the properties panel to reset the mesh to its initial state.

## Deletion
1. Click the delete button at the top of the properties panel.