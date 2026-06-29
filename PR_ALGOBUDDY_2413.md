## PR Description: #2413 — Animation Step State Mutations Break Replay

### Problem
1. When a user navigates to a new animation session (new `steps` array), `currentStep` and `isPlaying` kept their previous values, causing the new animation to start mid-way or in inconsistent playback state.
2. The `onStep` callback received the raw step object reference from the steps array. Any consumer that mutated this object (e.g. applying highlight state in-place) corrupted the immutable steps data, leading to stale/incomplete rendering on subsequent step renders.

### Changes
- **`src/lib/visualizer/useAnimationEngine.js`**:
  - Added `stepsKeyRef` that detects when the `steps` array reference changes (new session). On change, `currentStep` is reset to 0 and `isPlaying` is set to `false`.
  - Added `cloneStep()` helper that deep-clones a step object via `JSON.parse(JSON.stringify(step))` before passing it to `onStep`, preventing consumer-side mutations from corrupting the source steps array.

### How to verify
- Navigate between different algorithm animations — the new session should always start at step 0, not resume from the previous session's step.
- Any consumer of `onStep` that mutates the step data (e.g. adding highlight colors) no longer breaks subsequent step renders.
