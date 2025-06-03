[Maptoolkit JS](../README.md) / TileMesh

# TileMesh

> **TileMesh** = `object`

Stores the prepared vertex and index buffer bytes for a mesh.

## Properties

### indices

> **indices**: `ArrayBuffer`

The index data. Each triangle is defined by three indices. The indices may either be 16 bit or 32 bit unsigned integers,
depending on the mesh creation arguments and on whether the mesh can fit into 16 bit indices.

***

### uses32bitIndices

> **uses32bitIndices**: `boolean`

A helper boolean indicating whether the indices are 32 bit.

***

### vertices

> **vertices**: `ArrayBuffer`

The vertex data. Each vertex is two 16 bit signed integers, one for X, one for Y.
