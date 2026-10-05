# Creating and Editing Bones

## Creating Bones

There are three methods to create bones:

1. Using the Create Bone tool in the upper right corner of the stage
    1. Click the Create Bone button in the upper right corner of the stage
    2. Select a bone on the stage to serve as the parent bone
    3. Press and hold the left mouse button on the stage
    4. Drag the mouse to extend the length of the bone
    5. Release the mouse
2. Creating bones with strictly connected ends
    1. Click the Create Bone button in the upper right corner of the stage
    2. Hold down the Ctrl key
    3. Click on the stage to create end-to-end connected bones
3. Creating in the Outline panel
    1. Select a bone to serve as the parent bone
    2. Click the Create Bone button at the top of the Outline panel
    3. A bone with a default length of 100 is created

## Editing Bone Properties
1. Select a bone
2. Modify the bone's properties in the Properties panel

## Using the Cross Handle to Edit Bone Transform Properties
1. Select a bone on the stage
2. A cross handle appears, and different positions of the cross handle can edit different properties of the bone
    1. Left arrow: Drag to change the bone's position in the x direction
    2. Bottom arrow: Drag to change the bone's position in the y direction
    3. Right handle: Drag to change the bone's scale in the x direction
    4. Top handle: Drag to change the bone's scale in the y direction
    5. Center of the cross handle: Drag to change the bone's position in both x and y directions
    6. Upper left semicircle: Drag to change the bone's overall scale
    7. Lower right semicircle: Drag to change the bone's rotation
    8. Any other blank space outside the cross handle: Drag to change the bone's rotation
    9. Note that modifications through the cross handle change the bone's position in the world coordinate system

## Modifying Bone Hierarchy

1. Method 1: Drag bones in the Outline panel to the appropriate parent bone
2. Method 2: Click the Set Parent button at the top of the Properties panel, then click on the appropriate parent bone on the stage

## Chain Bone Operations

For a long string of parent-child related bones (often used for ribbon effects) that resemble a rope, you can operate them as if manipulating a flexible rope.

1. Select one of the three chain modification tools in the upper right corner of the stage
2. Use box selection or multiple selection methods to select multiple bones with parent-child relationships
3. A green handle appears after the last child bone in the selection
4. Drag this handle to operate the string of bones as if throwing a rope

## Properties that Can Have Keyframes
1. Position
2. Scale
3. Rotation

## Deleting Bones
1. Method 1: Click the Delete button, the second button at the top of the Properties panel
2. Method 2: Select the bone on the stage and press the Delete key