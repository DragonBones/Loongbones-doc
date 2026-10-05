# Library Panel
<img src='/ui/library.png' width=50%>

The library panel contains three categories: Armatures, Images, and Sprite Sheets
- Armatures lists all armatures contained in the current project. Double-click an armature to switch the currently edited armature.
- Images lists all images imported into the current project, supporting png and jpg formats.
- Sprite Sheets lists all texture atlases imported into the current project.

<p>All three categories in the library panel can be dragged onto the stage to create a slot with an attachment of that type.</p>
<p>Import</p>
- You can drag images from your computer into the library panel to import images
- You can drag texture atlas images and configuration files together into the library panel to import texture atlases
- You can drag original LoongBones project files with the extension .dbproj into the library panel to import armatures
- You can drag LoongBones data files with the extension .json into the library panel to import armatures
- If plugins are supported, you can drag other types of data files, such as Spine export data files, into the library panel to import armatures.
Note: If the animation files and texture atlas files are meant to be used together, it's better to import them together to prevent instances where slot images are missing in the armature.
