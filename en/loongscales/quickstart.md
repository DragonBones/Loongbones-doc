# Quick Start & Interface Layout

## The four-zone layout

The LoongScales interface has four main zones. Once you remember their positions, every later operation has a home:

```
┌──────────────────────────────────────────────────────────────┐
│  Top toolbar (tool props + undo/redo + PSD + AI/sync buttons)  │
├──────┬───────────────────────────────────────────┬───────────┤
│ Left │             Center canvas (Viewport)        │  Right     │
│ tool │            your work is drawn here           │  Layers    │
│ strip │                                            │  panel      │
│+color │                                            │            │
├──────┴───────────────────────────────────────────┴───────────┤
│  Bottom: floating AI button (✨) + raised AI panel (collapsible)│
└──────────────────────────────────────────────────────────────┘
```

- **Top toolbar**: shows the current tool's parameters (e.g. brush size), plus new, undo, redo, import/export PSD, AI and sync entries.
- **Left tool strip**: a vertical column of tool icons; click to switch tools; at the bottom are the foreground/background color swatches.
- **Center canvas**: where you actually draw; supports zoom and pan.
- **Right Layers panel**: manages all layers (create, delete, group, opacity, blend mode…).
- **Bottom AI zone**: a floating "✨ AI Generate" button; click to open the AI panel.

<figure style="text-align:center">
  <img src="/loongscales/ui/ui-overview.png" alt="Main interface overview" width="90%">
  <figcaption>Interface overview: top toolbar, left tool strip, center canvas, right Layers panel, bottom floating AI button.</figcaption>
</figure>

## New / open a document

- Click **New Document** (📄) on the left of the top toolbar to create a blank document.
- Document size is set in the **Canvas** area of the right panel, and many **presets** are provided (paper, business card, web, display, phone, etc. — see Chapter 3).
- You can also **drag an image file directly onto the canvas**; it is added as a new layer.
- **Import PSD** is supported (top toolbar import button, only accepts `.psd`).

## Auto-save, nothing lost on close

LoongScales saves the whole document (including every image in it) automatically in the browser's local database (IndexedDB).

- You **don't save manually**; after refreshing or reopening, the work is still there, but data will be lost if you clear the browser cache.
- Click the save button to store the data in the cloud; it is pulled automatically the next time you open it, so the data won't be lost.

## First operation: draw a stroke / drop an image

1. Select a layer.
2. Pick the **Brush** tool in the left tool strip.
3. Adjust size, hardness, opacity in the top properties bar, and pick a color in the color swatch.
4. Drag on the canvas to draw a line.
5. Want to undo? Press `Ctrl+Z` (`⌘Z` on Mac).

<figure style="text-align:center">
  <img src="/loongscales/ui/first-brush.png" alt="First brush stroke" width="80%">
  <figcaption>After the first brush stroke: a new layer appears in the Layers panel and brush params show in the top bar.</figcaption>
</figure>
