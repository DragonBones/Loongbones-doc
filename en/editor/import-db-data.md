# Importing LoongBones Data Files

A LoongBones data file is a JSON file exported from the LoongBones editor.
<br>LoongBones data files contain armature, bone, slot, and slot resource data.
<br>LoongBones data files do not include image resources.

## Importing Data Files
1. Drag the LoongBones data JSON file into the library panel to complete the import.
2. If images with the same names as those in the data exist in the library, the armature data and resource data will match up.
3. If the library doesn't have images that match the armature data, the images in the armature will be replaced with default "Missing" images.
4. You'll need to import the images and then use the slot property's resource replacement feature to replace the "Missing" images.

## Importing Images and Data Together
1. Drag the LoongBones data JSON file, texture atlas image file, and texture atlas configuration file into the library panel simultaneously to complete the import.
2. The imported armature data will automatically match the corresponding image resources.
3. Note that image resources cannot have duplicate names. If resources with the same name already exist in the library, the image resources cannot be imported.