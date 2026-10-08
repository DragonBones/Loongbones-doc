# File Exchange: PSD & Local Save

## Import PSD

- The top toolbar has an **Import PSD** button (only accepts `.psd`).
- On import it restores as much as possible: groups, raster, text, vector, fill, adjustment layers, layer masks, guides, blend modes, layer effects, clipping masks.
- Unsupported adjustment types are skipped with a note — no error, no interruption.

## Export PSD

- The top toolbar has an **Export PSD** button that downloads the current document as a layered PSD file, editable in Photoshop and others.
- Export keeps: composite + sub-layers, blend modes, masks, effects, clipping relations, text/vector/fill/raster.

## Local save & recovery

- The document is **auto-saved** in the browser locally (IndexedDB); data will be lost if you clear the browser cache.
- The top toolbar has a **Save** button to save the document to the cloud database.
- The whole document is a **self-contained JSON** with images embedded.
- Refresh or reopen the page and the work recovers automatically.

> Tip: if the browser cache data is corrupted, the document may fail to open; try clearing the browser cache.
