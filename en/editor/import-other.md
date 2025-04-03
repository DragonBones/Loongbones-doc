# Importing Other Format Data Files

LoongBones supports importing data files and texture atlas files in other formats through plugins.

<br>Data files need to include armature, bone, slot, and slot resource data.
<br>Data files do not include image resources.

## Importing Data Files
1. Drag the data file into the library panel. If the plugin supports it, you will see a successful import message. If the plugin doesn't support it or if there are errors in the data, an import failure message will appear.
2. If images with the same names as those in the data exist in the library, the armature data and resource data will match up.
3. If the library doesn't have images that match the armature data, the images in the armature will be replaced with default "Missing" images.
4. You'll need to import the images and then use the slot property's resource replacement feature to replace the "Missing" images.

## Importing Data Files and Texture Atlases Together
1. Drag the data file, texture atlas image file, and texture atlas configuration file into the library panel simultaneously. If the plugin supports it, you will see a successful import message. If the plugin doesn't support it or if there are errors in the data, an import failure message will appear.
2. The imported armature data will automatically match the corresponding image resources.
3. Note that image resources cannot have duplicate names. If resources with the same name already exist in the library, the image resources cannot be imported.