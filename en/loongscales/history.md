# Undo, Redo & History

- LoongScales uses **command-based undo**: every operation (a brush stroke, a move, a parameter change, an AI generation…) goes into the history stack.
- `Ctrl+Z` to undo, `Ctrl+Y` or `Ctrl+Shift+Z` to redo.
- Consecutive same-type operations (e.g. consecutive brush strokes) are auto-merged to reduce undo steps.
- History has a memory budget; an over-long chain auto-discards the earliest steps; **AI operations can also be fully undone** (e.g. after background removal you can `Ctrl+Z` to restore the original).
