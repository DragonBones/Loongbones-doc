# Creating and Editing Meshes

## Creating
1. Select a slot with an image resource
2. Click the toggle button next to **Convert to Mesh** in the Properties panel

## Editing

### Editing Mesh Properties

1. You can edit in the Properties panel of the slot or mesh
    - You can replace the mesh resource
    - Click Edit Mesh to enter mesh editing mode for further editing
    - Click the Reset button to restore mesh points to their initial positions
    - Click Add Bone to bind bones to the mesh
    - Click Auto Weight to recalculate weights for bones bound to the mesh

### Editing Mesh Point Positions
1. Select a slot with a mesh on the stage
2. Mesh points will be displayed on the stage. Select a mesh point.
3. Drag the mouse to modify the position of the mesh point.

### Mesh Editing Toolbox
1. Click **Edit Mesh** in the mesh's Properties panel to enter mesh editing mode
2. The mesh editing toolbox appears at the bottom of the stage
3. Deform checkbox in the mesh toolbox:
    1. When checked, the stage displays the final state of the mesh, including its position and deformation. Editing will affect both point positions and UV coordinates
    2. When unchecked, the stage only displays the image state of the mesh and UV coordinates of mesh points. Editing will only affect UV coordinates
3. Select the first editing tool with Deform checked. Select a mesh point on the stage and drag the mouse to edit both the point coordinates and UV coordinates simultaneously. Since you're editing both coordinates with UV coordinates having restrictions, the editing will have limitations. The white quadrilateral that appears when dragging the mouse is the restricted area.
4. Select the first editing tool with Deform unchecked. The stage only displays the image, which is the state for editing UV coordinates only. Select a mesh point and drag the mouse to edit the point's position, which actually edits the UV coordinates of that point.
5. Select the second button, which is the Add tool, to add mesh points or custom lines. Click the mouse to add a point; click and drag to add a custom line. Dragging between two points will only add a custom line. When adding mesh points, triangles are formed automatically. If the automatically formed triangles are not what you want, you can add custom lines to change how triangles are formed.
6. Select the third button, which is the Delete tool, to delete mesh points.
7. Select the fourth **Draw Boundary** tool, which automatically switches to the non-deform state. You can draw a boundary within the rectangular area of the image. Drawing a boundary will delete all points and triangles, as well as previous FFD animations.
8. Select the fifth **Reset** tool to delete all points and triangles, restoring the initial state of two triangles forming a quadrilateral.
9. Select the sixth **Auto Mesh** tool to enter the auto mesh toolbox
    1. If you're not satisfied with the boundary, select Auto Boundary
    2. Then adjust the boundary density; the stage will automatically draw a new boundary. Adjust to an appropriate value
    3. Modify boundary expansion to enlarge the boundary. Adjust to an appropriate value
    4. After modifying the boundary, select Auto Mesh to automatically generate points within the boundary, forming a triangular mesh
    5. Modify the mesh density and mesh orderliness. Adjust to appropriate values
    6. After modification, close the auto mesh toolbox to return to the mesh editing state

## Deleting
1. Click the Delete button at the top of the Properties panel
2. Or convert the mesh back to an image