# Inverse Kinematics IK

Bones have parent-child relationships. Generally, the translation, rotation, and scaling transformations of parent bones cause transformations in child bones. Child bone transformations cannot cause parent bone transformations. However, IK allows child bone changes to affect parent bone changes.
<br>
<br>
Example: When a person lifts their thigh, the calf also lifts. This is the normal parent-child bone relationship. The thigh is the parent bone, and the calf is the child bone.
<br>
<br>
Similarly, when a person raises their arm, the hand also rises. The upper arm is the parent bone, the forearm is the child bone, and the hand is the child bone of the forearm.
<br>
<br>
When a person throws a punch, the fist moves in a straight line, and the fist's movement causes the upper arm and forearm to bend. This type of change is IK.