# Creating and Editing Transform Constraints

Transform constraints are another control method. Normally, a parent bone's translation, rotation, and scaling will affect its child bones. Transform constraints allow bones that don't have a parent-child relationship to have similar effects.
<br> The target bone of a transform constraint cannot be a child of the controlled bone.

## Creating Transform Constraints

1. Select a bone to be controlled.
2. In the properties panel, under the Constraint group's Transform section, select the Set Target button next to Transform
3. Select a bone on the stage to serve as the target bone.
4. The target bone cannot be a child of the controlled bone.
5. The transform constraint is now created
6. For a newly created transform constraint, you need to adjust the translation, rotation, and scaling weights in the properties panel to see the effect.

## Editing Transform Constraints
1. Edit the Transform properties in the Constraint group of the bone's properties panel
    - Local: When checked, the controlled bone's changes will use the target bone's local coordinate system as constraint values. Unchecked by default. When unchecked, calculations are based on the world coordinate system.
    - Rotation Weight: Makes the controlled bone rotate following the target bone; value 0-100, 0 means no change, 100 means complete following. Middle values provide linear transitions between these two values.
    - Translation Weight: Makes the controlled bone translate following the target bone; value 0-100, 0 means no change, 100 means complete following. Middle values provide linear transitions between these two values.
    - Scale Weight: Makes the controlled bone scale following the target bone; value 0-100, 0 means no change, 100 means complete following. Middle values provide linear transitions between these two values.
    - Offset: Offset adds an additional value on top of the transformation values for the controlled bone.

## Deleting Transform Constraints
1. In the properties panel's operations, click the delete button to remove the Transform constraint.
