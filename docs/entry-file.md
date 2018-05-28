# Entry file

Your entry file must export a function which returns an object containing at least a `router` property.

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  return {
    router: new Router({
      mode: 'history',
      routes: []
    })
  }
}
```

## router

A vue-router instance.

## root

- __Default__: `router-view`

Custom root component

## document

- __Type__: `context => html`

See more about [custom document](./guide/custom-document.md).

## getDocumentData

- __Type__: `(context) => data | Promise<data>`

Get `context.data` for the [`document`](#document) method. The `context` here is the same as `getInitialData`'s `context` argument.

## getInitialDataContext

- __Type__: `context => void`

Modify the `context` argument of `getInitialData` method of each route component.