[Maptoolkit JS](../README.md) / isTimeFrozen

# isTimeFrozen()

> **isTimeFrozen**(): `boolean`

Returns whether time is currently frozen.

## Returns

`boolean`

True if time is frozen via setNow(), false otherwise

## Example

```ts
setNow(1000);
console.log(isTimeFrozen()); // true
restoreNow();
console.log(isTimeFrozen()); // false
```
