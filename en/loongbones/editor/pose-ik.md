# Creating and Editing IK Constraints

There are two types of IK:
1. Type One: IK consists of one target bone and one controlled bone
2. Type Two: IK consists of one target bone and two controlled bones. These two controlled bones must have a parent-child relationship, and the child bone must inherit rotation from the parent bone.
<br> The IK target bone cannot be a child of the controlled bones.

## Creating IK
### Creating Type One IK
<br> Method One

1. Select a bone to be the controlled bone
2. In the Properties panel, under the Constraints group for IK, select the first button, Set IK Constraint Target
3. Select a bone on the stage to be the target bone
4. The target bone cannot be a child of the controlled bone

<br> Method Two
1. Select a bone to be the controlled bone
2. In the Properties panel, under the Constraints group for IK, select the second button, Generate Constraint Target at Bone End

### Creating Type Two IK
<br> Method One

1. Select two bones with a parent-child relationship to be the controlled bones
2. In the Properties panel, under the Constraints group for IK, select the first button, Set IK Constraint Target
3. Select a bone on the stage to be the target bone
4. The target bone cannot be a child of the controlled bones

<br> Method Two
1. Select two bones with a parent-child relationship to be the controlled bones
2. In the Properties panel, under the Constraints group for IK, select the second button, Generate Constraint Target at Bone End

## Editing IK
1. Edit the IK properties in the Constraints group of the bone's Properties panel
    - Bend: Edit the bending direction of the two controlled bones in IK
    - Weight: Edit the IK weight. When the IK weight is not 1, red and green auxiliary lines appear on the stage. The red line indicates the bone's position under IK control, and the green line indicates the bone's position under FK control. The current position of the bone is the interpolated result between these two positions under the current weight.
2. In animation mode, the bend and weight properties of IK can have keyframes, forming an IK timeline.
3. In animation mode, the small flag after a property indicates that the property can have keyframes. Click the flag to set a keyframe at the current playhead position.
    1. A white flag indicates no keyframe at the current playhead position
    2. A red flag indicates a keyframe at the current playhead position
    3. A yellow flag indicates changes at the current playhead position but no keyframe set

## Deleting IK
1. Click the Delete button in the Operations section of the Properties panel to delete the IK.
