# File Exchange: PSD & Local Save

## Import PSD / PSB

- The top toolbar has an **Import PSD** button (only accepts `.psd` / `.psb`).
- On import it restores as much as possible: groups, raster, text, vector, fill, adjustment layers, layer masks, guides, blend modes, layer effects, clipping masks.
- Unsupported adjustment types are skipped with a note — no error, no interruption.

## Export PSD

- The top toolbar has an **Export PSD** button that downloads the current document as a layered PSD file, editable in Photoshop and others.
- Export keeps: composite + sub-layers, blend modes, masks, effects, clipping relations, text/vector/fill/raster.

## Local save & recovery

- The document is **auto-saved** in the browser locally (IndexedDB), no manual save needed.
- The whole document is a **self-contained JSON** with images embedded, openable offline as a single file.
- Refresh or reopen the page and the work recovers automatically.

> Tip: local save depends on the browser database; for important works also export a PSD as backup.
