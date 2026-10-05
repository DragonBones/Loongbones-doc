# Cross Handle

The cross handle is an innovative interaction mechanism in LoongBones that allows for three types of operations simultaneously - translation, rotation, and scaling - through a cross-shaped handle.

1. Left arrow: Drag to change position in the x-direction
2. Bottom arrow: Drag to change position in the y-direction
3. Right handle: Drag to change scaling in the x-direction
4. Top handle: Drag to change scaling in the y-direction
5. Center of the cross handle: Drag to change position in both x and y directions
6. For images with fixed width and height, dragging the image changes position in both x and y directions
7. Upper-left semicircle: Drag to change overall scaling
8. Lower-right semicircle: Drag to change rotation
9. Any blank space outside the cross handle: Drag to change rotation
10. Note that when modifying through the cross handle, changes are applied to the position in the world coordinate system

Q&A
1. Q: Why is dragging any blank space outside the cross handle a rotation operation?
  - A: LoongBones is a skeletal animation software, and for skeletons, rotation is the most frequently used operation.
2. Q: If any blank space outside the cross handle is for rotation, why is there also a lower-right semicircle for rotation?
    - A: When a skeleton has numerous or large images that might cover the entire stage space, there may be no blank space available for rotation operations. In this case, you can use the lower-right semicircle to perform rotation operations.