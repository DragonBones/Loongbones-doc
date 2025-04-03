# Export as LoongBones Data File

1. Click the export button in the top toolbar to open the export panel
2. Select Animation Data + Texture
3. Data Type: Select DragonBones JSON.

4. Configuration
    - Target: Set which armatures to export. Click Change Target to select which armatures to export.
    - Data Settings
        - Data Type: Select the data type to export
        - Data Version: Select the data version to export
    - Texture Settings
        - Texture Type: Choose to export texture atlas or individual images. Click Package Configuration to further select texture settings.
        - Output Scale: Select the size ratio of the exported assets. If "Keep Armature Scale Unchanged" is checked, the size of the armature remains unchanged when creating the armature in runtime. If unchecked, the size of the armature created in runtime will change accordingly.
        - Background Color: Whether the texture atlas includes a background color
    - Export Settings
        - Project Name: The filename for export
        - Export Type: Whether the exported data includes data, textures. Whether to package into a zip file.
    - Cancel Button: Click to close the export dialog
    - Export Button: Click to start exporting.