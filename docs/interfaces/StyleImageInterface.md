[Maptoolkit JS](../README.md) / StyleImageInterface

# StyleImageInterface

Interface for dynamically generated style images. This is a specification for
implementers to model: it is not an exported method or class.

Images implementing this interface can be redrawn for every frame. They can be used to animate
icons and patterns or make them respond to user input. Style images can implement a
[StyleImageInterface#render](#render) method. The method is called every frame and
can be used to update the image.

## See

[Add an animated icon to the map.](https://maplibre.org/maplibre-gl-js/docs/examples/add-image-animated/)

## Example

```ts
let flashingSquare = {
    width: 64,
    height: 64,
    data: new Uint8Array(64 * 64 * 4),

    onAdd: function(map) {
        this.map = map;
    },

    render: function() {
        // keep repainting while the icon is on the map
        this.map.triggerRepaint();

        // alternate between black and white based on the time
        let value = Math.round(Date.now() / 1000) % 2 === 0  ? 255 : 0;

        // check if image needs to be changed
        if (value !== this.previousValue) {
            this.previousValue = value;

            let bytesPerPixel = 4;
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.height; y++) {
                    let offset = (y * this.width + x) * bytesPerPixel;
                    this.data[offset + 0] = value;
                    this.data[offset + 1] = value;
                    this.data[offset + 2] = value;
                    this.data[offset + 3] = 255;
                }
            }

            // return true to indicate that the image changed
            return true;
        }
    }
 }

 map.addImage('flashing_square', flashingSquare);
```

## Properties

### onAdd()?

> `optional` **onAdd**: (`map`: `Map$1`, `id`: `string`) => `void`

Optional method called when the layer has been added to the Map with [Map#addImage](../classes/Map.md#addimage).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map$1` | The Map this custom layer was just added to. |
| `id` | `string` | - |

#### Returns

`void`

***

### onRemove()?

> `optional` **onRemove**: () => `void`

Optional method called when the icon is removed from the map with [Map#removeImage](../classes/Map.md#removeimage).
This gives the image a chance to clean up resources and event listeners.

#### Returns

`void`

***

### render()?

> `optional` **render**: () => `boolean`

This method is called once before every frame where the icon will be used.
The method can optionally update the image's `data` member with a new image.

If the method updates the image it must return `true` to commit the change.
If the method returns `false` or nothing the image is assumed to not have changed.

If updates are infrequent it maybe easier to use [Map#updateImage](../classes/Map.md#updateimage) to update
the image instead of implementing this method.

#### Returns

`boolean`

`true` if this method updated the image. `false` if the image was not changed.
