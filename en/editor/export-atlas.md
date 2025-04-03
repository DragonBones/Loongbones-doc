# Atlas Configuration

After clicking the packing configuration button, a texture atlas packing configuration dialog will pop up
- Remove blank areas
- Padding: The spacing between each small image in the texture atlas. The unit is pixels.
- Power of 2: Whether the size of the exported texture atlas is a power of 2. Some platforms or engines require the image size to be a power of 2.
- Square: Whether the exported texture size is square. Some platforms or engines require the image size to be square.
- Background color: Whether the texture atlas has a background color.
- Auto size: Automatically calculates the size of each texture atlas, with a maximum of 2048x2048. If it exceeds this, it will be packed into multiple texture atlases.
- Output scale
- Arrangement algorithm: The algorithm used when arranging the position of each image. If you have special requirements for arrangement, you can choose accordingly.
- Restore default configuration