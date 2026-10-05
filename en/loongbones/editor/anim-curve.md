# Animation Curve
Animation curves represent the speed of change between two keyframes.
<br>
If we compare keyframes to changes in position in physics, then animation curves represent the change in velocity, which is acceleration.
<br>
Animation speed can be constant, or it can accelerate and then decelerate, and so on.
<br>
LoongBones supports using Bezier curves to express animation curves. Through these curves, rich animation effects can be created.

## Editing
1. Select a keyframe
2. Open the animation curve panel
3. Click on the curve to add points to it
4. Drag points to modify the curve
5. Click the preset buttons below to quickly change the curve to predefined shapes

## Note
Some timeline animation curves can only be step-shaped and cannot be adjusted to other shapes, such as:
1. Hierarchy timeline
2. Sub-armature animation playback timeline
3. Event timeline