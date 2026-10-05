# Non-destructive Editing: Adjustments, Filters, Layer Effects

LoongScales' color grading and effects come in three categories, all kept as **non-destructive** as possible (the original pixels aren't permanently changed — you can tweak parameters or turn them off anytime).

## Adjustment layers (16)

An adjustment layer is like a "sheet of transparent paper with a color algorithm" laid over the content below, without affecting the original. Supported:

Brightness/Contrast, Hue/Saturation, Invert, Levels, Curves, Color Temperature, Exposure, Color Balance, Natural Saturation, Posterize, Threshold, Channel Mixer, Black & White, Photo Filter, Gradient Map.

- **Curves** supports Master / R / G / B four-channel fine tuning.
- Create an adjustment layer via the "New adjustment layer" entry in the right panel.

## Filters (6, destructive, preview then apply/cancel)

Gaussian Blur, Sharpen, Motion Blur, Pixelate, Add Noise, Desaturate. Filters run as a "session": drag parameters for live preview, then Apply after confirming.

## Layer effects fx (15, non-destructive)

Each layer can stack any number of effects, with individual on/off, reordering, and overall opacity:

Drop Shadow, Gaussian Blur, Sharpen Mask, Median Blur, Vignette, Emboss, Pixelate, Noise, Desaturate, Stroke, Outer Glow, Inner Glow, Inner Shadow, Color Overlay, Bevel.

> Tip: like Photoshop, fx and adjustment layers never "burn" the pixels — you can always go back and change them.
