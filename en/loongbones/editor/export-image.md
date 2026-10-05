# Export as Images or Frame Sequences

LoongBones supports exporting animations as frame sequences.

1. Click the export button in the top toolbar to open the export panel
2. Select Images
3. Configuration:
    - Target: Set which armature to export. In image mode, you can only export animations from one armature at a time.
    - Image Settings
        - Image Type: Single image or frame sequence. For a single image, you need to specify which frame of which animation.
        - Image Format: Supports png and jpg formats.
    - Animation Settings
        - Include Animations: Animations to be exported, can select all animations or a specific animation
        - FPS: The rate of the exported animation. Can be different from the original FPS. Higher than the original FPS is equivalent to slow motion. The higher the FPS, the more images are exported.
        - Background Color: Whether the texture atlas includes a background color
    - Output Settings
        - Image Size: Automatic. Currently only automatic is supported. The system will automatically calculate each frame of all animations and use the size of the largest frame as the image size. This ensures that each image maintains the same size.
        - Output Scale: Scale the image according to the ratio.
        - Background Color: Whether to fill the background with a certain color. JPG files do not support transparent backgrounds, so JPG format images must have a background color.
    - File Settings
        - Prefix: Set the prefix for the filename, can be left empty.
        - Suffix: Set the suffix for the filename, can be left empty.
        - Generated Name: The name of the exported image, following the rule: Prefix + Armature Name + "_" + Animation Name + "_" + Sequence Number + Suffix + "." + Extension.
4. Cancel Button: Click to close the export dialog
5. Export Button: Click to start exporting.