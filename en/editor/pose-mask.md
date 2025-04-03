# Creating and Editing Masks

## Masks
1. Masks are used to control the display area of slots, only showing content in specified areas
2. Supported mask types:
   1. Image masks (support transparent channels)
   2. Vector shape masks (require closed paths with fill)
3. In the hierarchy, masks are placed in the lower layer, and masked slots are placed in the upper layer
4. Multi-layer masks are not currently supported

## Creating
1. Select a slot with an image, or a slot with a shape (the shape must be closed and have a fill)
2. Place the masked slot in the layer above the mask slot
3. Select the slot you want to convert to a mask, and click **Convert to Mask** in the Resource properties of the Properties panel
4. You can see the mask effect on the stage

## Editing

### Editing Mask Properties

1. In the Properties panel of the slot converted to a mask:
    - Click **Convert to Mask** to toggle between mask and non-mask
    - Modify the Influence Range value to make the mask affect multiple slots or no slots
2. If the mask slot contains an image with transparent areas, the masked slot can display a semi-masked feathering effect
   
   
## Deleting
1. Click the **Convert to Mask** toggle button in the Properties panel to convert the mask back to a normal slot.