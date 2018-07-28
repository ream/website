# Avoid Stateful Singletons

As per [Vue offcial SSR guide](https://ssr.vuejs.org/guide/structure.html#avoid-stateful-singletons), we need to create a fresh Vue instance for each requestes to avoid sharing states across requests.

For example, in Ream you should create a vue-router instance within the exported function in your entry file:

📝 __index.js:__

```js
import Router from 'vue-router'

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [/*...*/]
  })
  return {
    router
  }
}
```

Or moving the logic of creating router instance into another file:

📝 __router.js:__

```js
import Router from 'vue-router'

export default () => {
  return new Router({
    // ...
  })
}
```

📝 __index.js:__

```js
import createRouter from './router'

export default () => {
  return {
    router: createRouter()
  }
}
```