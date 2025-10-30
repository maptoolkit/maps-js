[Maptoolkit JS](../README.md) / restoreNow

# restoreNow()

> **restoreNow**(): `void`

Restores normal time flow after freezing with setNow().
Call this after finishing deterministic rendering operations.

## Returns

`void`

## Example

```ts
// After video export, resume normal time
setNow(0);
// ... export frames ...
restoreNow(); // Map animations resume normally
```
