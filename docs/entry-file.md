# Entry file

You entry file must export a function which returns an object containing at least a `router` property.

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

## store

A Vuex instance.

## root

- __Default__: `router-view`

Custom root component

## document

- __Type__: `context => html | Promise<html>`

See more about [custom document](./guide/custom-document.md).