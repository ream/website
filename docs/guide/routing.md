# Routing

Ream uses [vue-router](https://router.vuejs.org/) to handle routing, the only requirement is to provide a vue-router instance in your entry file:

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./views/Home.vue')
      }
    ]
  })

  return {
    router
  }
}
```

::: tip NOTE
The default export is a function and the router instance is created inside the function, check out [Avoid Stateful Singletons](./avoid-stateful-singletons.md) for details on this.
:::

## File-system routes

In some frameworks like Next.js and Nuxt.js, components inside `pages` directory will be automatically loaded as routes, that's also possible with Ream.

In your `ream.config.js`:

```js
module.exports = {
  fsRoutes: true
}
```

Next create a `pages/about.vue`:

```vue
<template>
  <h1>About</h1>
</template>
```

That's it, open `/about` and you'll see the page.

When using fs routes, you won't have to provide `router` instance in your entry file.