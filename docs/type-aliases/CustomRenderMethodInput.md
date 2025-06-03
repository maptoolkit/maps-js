[Maptoolkit JS](../README.md) / CustomRenderMethodInput

# CustomRenderMethodInput

> **CustomRenderMethodInput** = `object`

Input arguments exposed by custom render function.

## Properties

### defaultProjectionData

> **defaultProjectionData**: [`ProjectionData`](ProjectionData.md)

Uniforms that should be passed to the vertex shader, if MapLibre's projection code is used.
For more details of this object's internals, see its doc comments in `src/geo/projection/projection_data.ts`.

These uniforms are set so that `projectTile` in shader accepts a vec2 in range 0..1 in web mercator coordinates.
Use `map.transform.getProjectionData({overscaledTileID: tileID})` to get uniforms for a given tile and pass vec2 in tile-local range 0..EXTENT instead.

For projection 3D features, use `projectTileFor3D` in the shader.

If you just need a projection matrix, use `defaultProjectionData.projectionMatrix`.
A projection matrix is sufficient for simple custom layers that also only support mercator projection.

Under mercator projection, when these uniforms are used, the shader's `projectTile` function projects spherical mercator
coordinates to gl clip space coordinates. The spherical mercator coordinate `[0, 0]` represents the
top left corner of the mercator world and `[1, 1]` represents the bottom right corner. When
the `renderingMode` is `"3d"`, the z coordinate is conformal. A box with identical x, y, and z
lengths in mercator units would be rendered as a cube. MercatorCoordinate.fromLngLat
can be used to project a `LngLat` to a mercator coordinate.

Under globe projection, when these uniforms are used, the `elevation` parameter
passed to `projectTileFor3D` in the shader is elevation in meters above "sea level",
or more accurately for globe, elevation above the surface of the perfect sphere used to render the planet.

***

### farZ

> **farZ**: `number`

This value represents the distance from the camera to the far clipping plane.
It is used in the calculation of the projection matrix to determine which objects are visible.
farZ should be larger than nearZ.

***

### fov

> **fov**: `number`

Vertical field of view in radians.

***

### modelViewProjectionMatrix

> **modelViewProjectionMatrix**: `mat4`

model view projection matrix
represents the matrix converting from world space to clip space
https://learnopengl.com/Getting-started/Coordinate-Systems
*

***

### nearZ

> **nearZ**: `number`

This value represents the distance from the camera to the near clipping plane.
It is used in the calculation of the projection matrix to determine which objects are visible.
nearZ should be smaller than farZ.

***

### projectionMatrix

> **projectionMatrix**: `mat4`

projection matrix
represents the matrix converting from view space to clip space
https://learnopengl.com/Getting-started/Coordinate-Systems

***

### shaderData

> **shaderData**: `object`

Data required for picking and compiling a custom shader for the current projection.

#### define

> **define**: `string`

Defines to add to the shader code.
Depends on current projection.

##### Example

```
const vertexSource = `#version 300 es
${shaderData.vertexShaderPrelude}
${shaderData.define}
in vec2 a_pos;
void main() {
    gl_Position = projectTile(a_pos);
    #ifdef GLOBE
    // Do globe-specific things
    #endif
}`;
```

#### variantName

> **variantName**: `string`

Name of the shader variant that should be used.
Depends on current projection.
Whenever the other shader properties change, this string changes as well,
and can be used as a key with which to cache compiled shaders.

#### vertexShaderPrelude

> **vertexShaderPrelude**: `string`

The prelude code to add to the vertex shader to access MapLibre's `projectTile` projection function.
Depends on current projection.

##### Example

```
const vertexSource = `#version 300 es
${shaderData.vertexShaderPrelude}
${shaderData.define}
in vec2 a_pos;
void main() {
    gl_Position = projectTile(a_pos);
}`;
```
