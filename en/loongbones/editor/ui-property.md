# Property Panel

The property panel can display and edit the properties of different components.
When a component is selected, the property panel will show the properties of the currently selected component.
This includes: armature, bone, slot, and slot resource.


## Armature Properties
<img src='/ui/prop-armature.png' width=50%>

When nothing is selected, the property panel displays the properties of the current armature:
- Name: The name of the current armature. Click to modify the name; armature names cannot be duplicated.
- Type: Armature
- Frame Rate: The animation frame rate of this armature
- Default Play: The name of the animation to play by default when the armature is created at runtime.

## Bone Properties
<img src='/ui/prop-bone.png' width=50%>

When a bone is selected, the property panel displays the bone's properties,
divided into three groups:
1. Display
    - Name: The name of the bone. Click to modify the name; bone names cannot be duplicated.
    - Type: Bone
    - Length: The length of the bone. Click to enter a number to modify the bone's length. Or drag up and down to modify the bone length. Dragging up makes it smaller, dragging down makes it larger.
    - Inherit:
        -Rotation: When unchecked, this bone will not rotate when the parent bone rotates.
        -Scale: When unchecked, this bone will not scale when the parent bone scales.
    - Bone Color: Modify the bone color, currently unused
2. Coordinate Transform
    - Position: x and y coordinates (these coordinates are relative to the parent bone, i.e., in the parent coordinate system)
    - Scale: x and y scaling (this scaling is relative to the parent bone, i.e., in the parent coordinate system)
    - Rotation: Horizontally to the right is 0 degrees, clockwise is positive, counterclockwise is negative, range is -180 to +180 degrees. The unit is degrees.
3. Constraints: Lists all constraints on this bone. Currently, only IK is available, with more types of constraints to be added in the future.
    - IK: IK constraint.
        - When the bone has no IK constraint, two buttons are available to create one:
            - Button 1: Set IK constraint target. Click and then select a bone as the target for the IK constraint. The selected bone cannot be a child of this bone.
            - Button 2: Generate a constraint target at the end of the bone: Click to automatically create a new bone with length 0 at the end of this bone, and use this new bone as the target for the IK constraint.
        - If the bone has an IK constraint:
            - Name: The name of the IK constraint
            - Bone: The bone that is constrained by IK
            - Target: The target bone for the IK constraint
            - Bend: When there are 2 bones constrained by IK, this indicates the direction in which these two bones bend.
            - Weight: The weight of the IK constraint. If 1, the rotation of the constrained bone is completely affected by IK. If 0, IK has no effect. If between 0 and 1, both IK and FK have an effect.
            - Operation: Delete button, which can delete this IK constraint
<br>When two bones are selected, the property panel only has two groups: Display and IK constraint
<br>When more than 2 bones are selected, the property panel only has one group: Display

## Slot Properties
<img src='/ui/prop-slot.png' width=50%>

When a slot is selected, the property panel displays the slot's properties.
<br>Slot properties are divided into three groups: Display, Coordinate Transform, and Resource Properties

1. Display:
    - Name: The name of the slot. Click to modify the name; slot names cannot be duplicated.
    - Type: Slot
    - Color: The color of the slot. This color will affect the slot's resource.
    - Blend: When the slot's resource is a displayable resource, this property indicates the rendering blend mode of the resource.
    - Opacity: When the slot's resource is a displayable resource, this indicates the opacity of the resource, ranging from 0 to 1, with 0 being completely transparent.
    - Display Resource: Which resource the current slot displays. A slot can only display one resource at a time, or no resource at all.
2. Coordinate Transform
    - Position: x and y coordinates (these coordinates are relative to the parent bone, i.e., in the parent coordinate system)
    - Scale: x and y scaling (this scaling is relative to the parent bone, i.e., in the parent coordinate system)
    - Rotation: Horizontally to the right is 0 degrees, clockwise is positive, counterclockwise is negative, range is -180 to +180 degrees. The unit is degrees.
3. Resource Properties: Different resources have different properties. See below for specific resource types and their properties.

## Slot Resource Properties
Different resources have different properties
### Image Properties
<img src='/ui/prop-image.png' width=50%>

- Name: The name of the resource, usually the name in the resource library, cannot be modified.
- Type: Image
- Resource: The resource in the library. The button to the right is a replace button, click it to replace with another image.
- Convert to Mesh: Convert the image into a mesh type resource.

### Mesh Properties
<img src='/ui/prop-mesh.png' width=50%>

When an image is converted to a mesh, mesh properties are displayed

- Name: The name of the resource, usually the name in the resource library, cannot be modified.
- Type: Mesh
- Resource: The resource in the library. The button to the right is a replace button, click it to replace with another image.
- Convert to Image: Convert the mesh back to an image resource.
- Link Mesh: Used to create a [linked mesh](./link-mesh)
- Mesh Edit: Click to launch the mesh editing tool, edit points, triangles, UV and other properties of the mesh on the stage.
    - Reset Mesh: Restore all points on the mesh to their initial state
- Binding Tool: Tool for binding bones to the mesh.
    - Add Bone: Bind bones to the mesh. After clicking, select the bones to be bound on the stage. After selection, right-click to complete the selection.
    - Auto Weight: Automatically assign weights to mesh points that have bones bound to them.
- Weight Bone Table: When bones are bound to the mesh, this displays which bones are bound. If points on the mesh are selected, this shows the weight of each bone and allows manual adjustment of weights.
- Mesh Deformation: Add a mesh deformer to the mesh. Note that once a mesh has bones bound to it, a mesh deformer cannot be added.

### Linked Mesh Properties
<img src='/ui/prop-linkMesh.png' width=50%>

- Name: The name of the resource, usually the name in the resource library, cannot be modified.
- Type: Linked Mesh
- Resource: The resource in the library. The button to the right is a replace button, click it to replace with another image.
- Original Mesh: The name of the mesh that this linked mesh is linked to.
- Inherit FFD: Whether the linked mesh inherits the free-form deformation animation of the original mesh.

### Bounding Box Properties
<img src='/ui/prop-bbox.png' width=50%>

- Name: The name of the resource, usually the name in the resource library, cannot be modified.
- Type: Bounding Box
- Bounding Box Edit: Edit button, when clicked, launches the bounding box editing tool to edit the bounding box on the stage.

### Sub-Armature Properties
<img src='/ui/prop-sub-armature.png' width=50%>

- Name: The name of the resource, the name of the sub-armature
- Type: Armature
- Play Animation: The name of the animation to play by default when the sub-armature is created in the runtime.