# Creating and Editing Shapes

## Shapes
1. A shape is a vector graphic that can be a single curve or any arbitrary shape composed of Bezier curves.
2. Shapes can be used as masks to cover other slots.
3. When used as a mask, the shape must be closed and have a fill.
4. Shapes can serve as path constraints to restrict bones to move only along a curve.
5. When a shape is used as a path, it must be a single curve, which can be closed or open, but cannot have a fill or multiple curves.

## Creation
1. Select a bone or a slot
2. Click the **Create Shape** button in the outline panel
3. Click the mouse on the stage to draw the shape.
4. When finished, close the **Shape Toolbox** panel at the bottom of the stage

## Editing

### Editing Shape Properties

1. You can edit in the slot or shape properties panel
    - Click the edit button to enter shape editing mode for further editing
    - Click add bone to bind bones to the shape
    - Click auto weight to recalculate weights for bones bound to the shape
    - Click convert to mask to turn the shape into a mask

### Editing Shape Point Positions
1. Select a slot with a shape on the stage
2. The shape's points and control handle points will be displayed on the stage.
3. Hold and drag the mouse to modify the position of points or control handle points to change the shape.

### Shape Editing Toolbox
1. Click **Edit** in the shape properties panel to enter shape editing mode.
2. The shape editing toolbox appears at the bottom of the stage
3. The first row, from left to right: Edit, Add Point, Delete Point, Corner (change point connection type), Draw, Fill.
4. The second row, from left to right: Clear, Set Line Color, Toggle Fill Color, Set Fill Color.
5. Select the edit tool, then click and drag to edit the position of points and control handles, thereby changing the shape.
   1. Click and drag a point on the shape to modify its position.
   2. Click and drag a control handle point to change the curve connection type and control the curve's arc.
6. Select the add point function to add points on the line.
7. Select the delete point function to remove points from the line. If it's a closed shape, the last three points cannot be deleted. To completely delete, use the clear button.
8. Select the corner function to change the connection type of points on the line, whether it's a hard angle or a smooth curved connection. Click on a point; if the point's shape changes to a square, the two control handles can be moved separately, not in a straight line, allowing two lines to form a corner at this point. Click on the point again; if the point's shape becomes a diamond, the two control handles disappear, creating a hard connection with a sharp corner. If you click on the point again and drag, the point's shape becomes circular, allowing you to drag out two control handles that are in a straight line, creating a smooth connection between the two lines. Repeat these operations to cycle through these three connection states. If the point's shape is circular but still forms a corner, the control handles are too short; simply drag the point to extend the control handles.
9. Select the draw function to draw shapes on the stage. First click the mouse; if you release it immediately and click elsewhere, you can draw a straight line. If you hold and drag, you can draw a curve. If you've drawn more than 3 points, clicking on the first point will close the shape. If you right-click during drawing, it interrupts the current drawing, and drawing again will create a new line. If you check the fill color option in the second row during drawing, the shape will be filled with color once a closed shape is completed.
10. Select the fill function to add color to a closed shape or remove the fill color. Check the fill color in the second row, choose a fill color, and then click inside the closed shape to fill it with color. If the fill color is unchecked in the second row, it will remove the fill color.
11. Click the **Clear** button to delete all points, lines, and fill colors of the current shape. Use this feature if you want to redraw.

### Binding Bones and Adjusting Weights
1. Shapes, like meshes, can be bound to bones, have their weights adjusted, and use bone translation, rotation, and scaling to change the shape.
2. The method is the same as the steps for binding meshes to bones. Refer to [Mesh Binding](../editor/pose-rigging).
3. When a shape point's connection is smooth (the point is circular with two handles in a straight line), if the shape is bound to bones but the weights are not set properly, the smooth connection may develop corners as the bones move. This is caused by inconsistent weights between the point and its handles. To maintain a smooth connection, ensure that the weights of the point and its two control handles are the same for the bound bones.
   

## Deletion
1. Click the delete button at the top of the properties panel.