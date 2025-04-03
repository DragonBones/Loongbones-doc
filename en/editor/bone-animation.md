# Bone Animation

The concept of bone animation comes from 3D animation. It's a technique that produces animation by transforming bones (translation, rotation, scaling) to drive model changes.
<br>
LoongBones brings this technology into 2D animation, using bone transformations (translation, rotation, scaling) to drive image changes.

## What are Bones
Bones can be understood as virtual sticks that can scale, rotate, and move. Bones have parent-child relationships. A bone can connect to a parent bone, and a parent bone can connect to multiple child bones.
<br>
<br>
For parent-child bones, unless specified otherwise, changes in a parent bone's translation, rotation, and scaling will drive all its child bones to change together. This type of change is generally called Forward Kinematics (FK).
<br>
<br>
This is the opposite of Inverse Kinematics (IK), where child bone changes cause parent bone changes. For detailed information about IK, see [IK](../editor/ik).