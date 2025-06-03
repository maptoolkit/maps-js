[Maptoolkit JS](../README.md) / RequireAtLeastOne

# RequireAtLeastOne\<T\>

> **RequireAtLeastOne**\<`T`\> = `{ [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }`\[keyof `T`\]

A helper to allow require of at least one property

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
