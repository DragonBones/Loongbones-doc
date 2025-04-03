# Preview and Export

## Preview

Now let's see what the edited animation looks like in the runtime.
<br>
<br>
Click the preview button in the top toolbar. A preview dialog will pop up.
<br>
The animation you just edited will appear in the dialog, observe the animation.
<br>
<br>

Note:

1. The preview dialog uses the pixijs rendering library for rendering.
2. The blue dots and lines in the preview represent the position and length of the bones. These are only used for debugging, and the actual display of bones can be hidden through the runtime API.

## Export

### Export as LoongBones Data File

1. Click the close button in the upper right corner to close the preview dialog.
2. Click the publish button in the top toolbar. A publish settings dialog will pop up.
3. You can change the project name to whatever you want, or use the default name, then click export.
4. After a moment, your browser will automatically download a zip file. After extracting, you'll find three files: a project-name.json file, which is the LoongBones format data file; a project-name_tex.json file, which is the texture atlas configuration file; and a project-name_tex.png file, which is the texture atlas file.
5. Subsequently, you can use the runtime to load these files to display and control animations, or hand them over to programmers for further processing.

### Export as Sequence Frame Images

1. Click the publish button in the top toolbar. A publish settings dialog will pop up.
2. Click the image button at the top to switch to image export mode.
3. You can set the prefix and suffix for the file name. The image file name will be named in the format: prefix + skeleton name + animation name + sequence number + suffix + .png.
4. Click export.
5. After a moment, your browser will automatically download 30 image files. When the browser prompts "Allow multiple file downloads," choose allow; otherwise, the images cannot be downloaded.
6. You can import the images into other editing tools for further editing.
