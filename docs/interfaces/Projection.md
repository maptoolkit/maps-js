[Maptoolkit JS](../README.md) / Projection

# Projection

An interface the implementations of which are used internally by MapLibre to handle different projections.

## Accessors

### shaderDefine

#### Get Signature

> **get** **shaderDefine**(): `string`

A `#define` macro that is injected into every MapLibre shader that uses this projection.

##### Example

```ts
`const define = projection.shaderDefine; // '#define GLOBE'`
```

##### Returns

`string`

***

### shaderVariantName

#### Get Signature

> **get** **shaderVariantName**(): `string`

Name of the shader projection variant that should be used for this projection.
Note that this value may change dynamically, for example when globe projection internally transitions to mercator.
Then globe projection might start reporting the mercator shader variant name to make MapLibre use faster mercator shaders.

##### Returns

`string`

***

### vertexShaderPreludeCode

#### Get Signature

> **get** **vertexShaderPreludeCode**(): `string`

Vertex shader code that is injected into every MapLibre vertex shader that uses this projection.

##### Returns

`string`
