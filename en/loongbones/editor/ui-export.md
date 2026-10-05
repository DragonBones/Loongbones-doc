# Export


Clicking the export button at the top will open the export panel
<br>The export panel has two parts, allowing you to export animation data + textures, or images

## Animation Data + Textures

<img src='/ui/export.png' width=90%>

- Target: Set which armatures to export. Note that if exporting Spine type data, only one armature can be exported. Click "Change Target" to select which armatures to export.
- Data Settings
    - Data Type: Select the type of data to export
    - Data Version: Select the version of data to export
- Texture Settings
    - Texture Type: Choose to export texture atlas or separate images. Click "Packing Configuration" to further select texture settings.
    - Output Scale: Select the scale size of the exported resources. If "Keep Armature Scale Unchanged" is checked, the size of the armature will remain unchanged when creating the armature in the runtime. If unchecked, the size of the armature created in the runtime will change accordingly.
    - Background Color: Whether the texture atlas includes a background color
- Export Settings
    - Project Name: Name of the exported file
    - Export Type: Whether the exported data includes data, textures. Whether to pack into a single zip file.
- Cancel Button: Click to close the export dialog
- Export Button: Click to start exporting.

## Texture Atlas Packing Configuration
<img src='/ui/export-texture.png' width=50%>

Clicking the "Packing Configuration" button will open the texture atlas packing configuration dialog
- Remove Empty Areas
- Padding: The spacing between each small image in the texture atlas. The unit is pixels.
- Power of 2: Whether the size of the exported texture atlas is a power of 2. Some platforms or engines require image sizes to be powers of 2.
- Square: Whether the exported texture size is square. Some platforms or engines require image sizes to be square.
- Background Color: Whether the texture atlas has a background color.
- Auto Size: Automatically calculate the size of each texture atlas, not exceeding 2048x2048. If exceeded, multiple texture atlases will be created.
- Output Scale
- Layout Algorithm: The algorithm used for arranging the position of each image. If you have special requirements for arrangement, you can choose accordingly.
- Restore Default Configuration

## Export Images
<img src='/ui/export-image.png' width=90%>

  - Target: Set which armature to export. In image mode, you can only export animations from one armature at a time.
  - Image Settings
      - Image Type: Single or sequence frames. Single requires specifying which frame of which animation.
      - Image Format: Supports png and jpg formats.
  - Animation Settings
      - Include Animation: Animations to export; can select all animations or a specific one
      - FPS: The frame rate of the exported animation. Can be different from the original FPS. A higher rate than the original is equivalent to slow motion. Higher FPS means more exported images.
      - Background Color: Whether the texture atlas includes a background color
  - Output Settings
      - Image Size: Automatic. Currently only automatic is supported. The system will automatically calculate each frame of all animations and use the size of the largest frame as the image size, ensuring each image has a consistent size.
      - Output Scale: Scale the image according to the ratio.
      - Background Color: Whether to fill the background with a certain color. JPG files do not support transparent backgrounds, so JPG format images must have a background color.
  - File Settings
      - Prefix: Set a prefix for the filename, can be left blank.
      - Suffix: Set a suffix for the filename, can be left blank.
      - Generated Name: The name of the exported image, following the rule: prefix + armature name + _ + animation name + _ + sequence number + suffix + . + extension.