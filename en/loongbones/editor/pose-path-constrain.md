# Creating and Editing Path Constraints

Path constraints allow one or more bones to move along a specific path
<br> The target bone of a path constraint cannot be a child of the constrained bones.

## Creating Path Constraints

1. Select one or more bones to be constrained
2. In the Properties panel, under the Constraints group, click the target setting button next to Path
3. Select a shape on the stage to serve as the constraint path (this shape must be a line, can be closed, and cannot have a fill color)
4. The bone of the target shape cannot be a child of the constrained bones
5. The path constraint is now created, and bones will automatically snap to the path

## Editing Path Constraints
1. Edit the Path constraint properties in the Constraints group of the bone's Properties panel
    - Spacing Type: Choose how to calculate the distance between constrained bones. There are two options: Length and Percentage.
    - Spacing: When the spacing type is Length, this value is added to the bone length to determine the interval between two bones. When the spacing type is Percentage, this value represents the distance between bones as a percentage of the entire path length.
    - Position Type: Method for calculating the bone's position on the curve; currently only Percentage is available
    - Position: When the position type is Percentage, this value represents the position of the first bone as a percentage of the entire path length
    - Rotation Offset: The value added to the bone's rotation angle
    - Rotation Mode: Method for calculating the bone's rotation angle. There are two options: Tangent and Fit
      - Tangent: The bone's rotation direction is that of the tangent at the current position on the curve
      - Fit: Both the head and tail of the bone are on the curve
    - Rotation Weight: Determines the proportion of the constrained bone's rotation that follows the calculated rotation from the constraint. Values range from 0-100: 0 means no constraint effect, 100 means fully following the constraint. Intermediate values create a linear transition between the two.
    - Translation X Weight: Determines the proportion of the constrained bone's x-coordinate that follows the calculated x-coordinate from the constraint. Values range from 0-100: 0 means no constraint effect, 100 means fully following the constraint. Intermediate values create a linear transition between the two.
    - Translation Y Weight: Determines the proportion of the constrained bone's y-coordinate that follows the calculated y-coordinate from the constraint. Values range from 0-100: 0 means no constraint effect, 100 means fully following the constraint. Intermediate values create a linear transition between the two.
2. In animation mode, the spacing, position, and weight properties of path constraints can have keyframes, forming a path constraint timeline
3. In animation mode, the small flag after a property indicates that the property can have keyframes. Click the flag to set a keyframe at the current playhead position.
    1. A white flag indicates no keyframe at the current playhead position
    2. A red flag indicates a keyframe at the current playhead position
    3. A yellow flag indicates changes at the current playhead position but no keyframe set
## Deleting Path Constraints
1. Click the Delete button in the Operations section of the Properties panel to delete the path constraint.
