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

## extendRootOptions

- __Type__: `rootOptions => void`

A function that manipulates root Vue app options. e.g. adding `i18n` to root options:

```js
extendRootOptions(rootOptions) {
  rootOptions: new VueI18n()
}
```

## document

- __Type__: `context => html`

See more about [custom document](./guide/custom-document.md).

## getDocumentData

- __Type__: `(context) => data | Promise<data>`

Get `context.data` for the [`document`](#document) method. The `context` here is the same as `getInitialData`'s `context` argument.

## getInitialDataContext

- __Type__: `context => void`

Modify the `context` argument of `getInitialData` method of each route component.

## store

- __Type__: `Vuex.Store`

Use a Vuex instance here for server-side data pretching with Vuex.

This is implemented via a [built-in plugin](https://github.com/ream/ream/tree/master/lib/plugins/vuex).

## apolloProvider

- __Type__: `VueApollo`

Use a VueApollo instance here for server-side data prefetching with Apollo.

This is implemented via a [built-in plugin](https://github.com/ream/ream/tree/master/lib/plugins/apollo).