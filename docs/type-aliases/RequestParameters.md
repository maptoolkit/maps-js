[Maptoolkit JS](../README.md) / RequestParameters

# RequestParameters

> **RequestParameters** = `object`

A `RequestParameters` object to be returned from Map.options.transformRequest callbacks.

## Example

```ts
// use transformRequest to modify requests that begin with `http://myHost`
transformRequest: function(url, resourceType) {
 if (resourceType === 'Source' && url.indexOf('http://myHost') > -1) {
   return {
     url: url.replace('http', 'https'),
     headers: { 'my-custom-header': true },
     credentials: 'include'  // Include cookies for cross-origin requests
   }
  }
}
```

## Properties

### body?

> `optional` **body**: `string`

Request body.

***

### cache?

> `optional` **cache**: `RequestCache`

Parameters supported only by browser fetch API. Property of the Request interface contains the cache mode of the request. It controls how the request will interact with the browser's HTTP cache. (https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

***

### collectResourceTiming?

> `optional` **collectResourceTiming**: `boolean`

If `true`, Resource Timing API information will be collected for these transformed requests and returned in a resourceTiming property of relevant data events.

***

### credentials?

> `optional` **credentials**: `"same-origin"` \| `"include"`

`'same-origin'|'include'` Use 'include' to send cookies with cross-origin requests.

***

### headers?

> `optional` **headers**: `any`

The headers to be sent with the request.

***

### method?

> `optional` **method**: `"GET"` \| `"POST"` \| `"PUT"`

Request method `'GET' | 'POST' | 'PUT'`.

***

### type?

> `optional` **type**: `"string"` \| `"json"` \| `"arrayBuffer"` \| `"image"`

Response body type to be returned.

***

### url

> **url**: `string`

The URL to be requested.
