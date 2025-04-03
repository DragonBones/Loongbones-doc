# What is Skeletal Animation {#loongbones}

The concept of skeletal animation comes from 3D animation. It is a technique that produces animation by using bone transformations (translation, rotation, scaling) to drive model changes.
<br>DragonBones brings this technology to 2D animation, using bone transformations (translation, rotation, scaling) to drive image changes.

## What are Bones
<br>Bones can be understood as sticks that can be scaled, rotated, and moved. Bones have parent-child relationships, where a bone can be connected to a root parent bone, and a parent bone can connect to multiple child bones.
<br>
<br>In a parent-child bone relationship, unless specifically configured otherwise, changes in the parent bone's translation, rotation, and scaling will drive all of its child bones to change accordingly. This type of transformation is generally known as Forward Kinematics (FK).
<br>
<br>This is the opposite of Inverse Kinematics (IK), where changes in child bones cause changes in parent bones. For detailed information about IK, please see [IK](../editor/ik).