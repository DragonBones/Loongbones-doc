# Selections & Masks

## Create a selection

Use the selection tools from §4.2 (rectangle / ellipse / lasso / fuzzy select) to draw a selection on the canvas.

## Selection math

- **Add**: hold `Shift` and draw a new selection → merge.
- **Subtract**: hold `Ctrl` and draw a new selection → subtract.
- **Intersect**: `Ctrl+Shift` and draw a new selection → keep only the overlap.
- Properties bar buttons: **Feather, Grow, Shrink, Border**, plus **Fill selection** and **Stroke selection** (color adjustable).

## Selection radius & floating selection

- Selection radius 1–200 controls expansion/contraction of the selection.
- Use `Ctrl+X/C/V` to cut/copy/paste selection content into a floating selection; press `Enter` to anchor, `Esc` to cancel.

## Converting between mask and selection

- When creating a mask you can init with "current selection".
- An existing mask can be "mask to selection".
- So you can roughly select an area → make a mask → refine the mask edge with the brush, which is more flexible than drawing the selection directly.
