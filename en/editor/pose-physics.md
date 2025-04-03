# Creating and Editing Physics Constraints

Physics constraints can simulate physical effects on bones under gravity, wind, and spring forces. Virtual springs exist between bones with parent-child relationships.

## Creating Physics Constraints

1. Select a bone to be constrained.
2. In the Properties panel, under the Constraints group, click the target setting button next to Physics.
3. The physics constraint is now created.

## Editing Physics Constraints
1. Properties in the Physics Constraint group in the bone's Properties panel:
    - Translation X: Controls whether the x-coordinate of the bone is affected by physics. 0 means no effect, 1 means fully controlled by physics, and intermediate values indicate partial control.
    - Translation Y: Controls whether the y-coordinate of the bone is affected by physics. 0 means no effect, 1 means fully controlled by physics, and intermediate values indicate partial control.
    - Rotation: Controls whether the rotation of the bone is affected by physics. 0 means no effect, 1 means fully controlled by physics, and intermediate values indicate partial control.
    - Limit: Specifies the maximum force applied to the bone under physics.
    - Solving FPS: Indicates the frequency for calculating physics constraints. Higher values provide better effects but consume more resources. Generally, it's a multiple of the rendering frame rate.
    - Inertia: Represents the bone's ability to maintain its current velocity.
    - Force: Represents the magnitude of the spring force.
    - Damping: Represents the resistance the bone experiences. If damping is 0, the bone will continue to move indefinitely. Higher damping causes the bone to reach relative rest more quickly.
    - Mass: Represents the bone's mass. Higher mass means stronger inertia, making it harder to stop or start moving.
    - Wind: Represents the magnitude of horizontal force applied to the bone.
    - Wind Turbulence: Represents the magnitude of random horizontal force applied to the bone. It takes a random value within a range for each calculation.
    - Gravity: Represents the magnitude of vertical force applied to the bone.
    - Weight: Overall control of the proportion of physics constraint affecting the bone. 0 means no physics control, 1 means fully controlled by physics, and intermediate values indicate partial control.
    - Control: Operations for physics simulation
      - Simulate: Checkbox for real-time calculation of physics simulation effects. Checked by default; if unchecked, calculations stop and physics simulation effects won't be visible on stage.
      - Reset: Physics simulation is a continuous process. Reset restarts the physics simulation from the beginning.
      - Reset All: Resets physics effects on all bones on the stage.

## Deleting Physics Constraints
1. Click the Delete button in the Operations section of the Properties panel to delete the physics constraint.
