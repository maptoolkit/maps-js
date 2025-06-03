[Maptoolkit JS](../README.md) / validate

# validate()

> **validate**(`options`: `object`): `ValidationError`[]

Main recursive validation function used internally.
You should use `validateStyleMin` in the browser or `validateStyle` in node env.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `key`: `any`; `objectElementValidators?`: `any`; `style`: `any`; `styleSpec`: `any`; `validateSpec?`: `any`; `value`: `any`; `valueSpec`: `any`; \} | the options object |
| `options.key` | `any` | string representing location of validation in style tree. Used only for more informative error reporting. |
| `options.objectElementValidators?` | `any` | optional object of functions that will be called |
| `options.style` | `any` | the style object |
| `options.styleSpec` | `any` | current full spec being evaluated. |
| `options.validateSpec?` | `any` | the validate function itself |
| `options.value` | `any` | current value from style being evaluated. May be anything from a high level object that needs to be descended into deeper or a simple scalar value. |
| `options.valueSpec` | `any` | current spec being evaluated. Tracks value. |

## Returns

`ValidationError`[]

an array of errors, or an empty array if no errors are found.
