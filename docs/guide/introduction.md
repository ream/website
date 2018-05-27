# Introduction

## Getting Started

If you haven't installed Ream inside your project, please navigte to [installation guide](./installation.md) first.

Configure your npm scripts in `package.json`:

```json
{
  "scripts": {
    "start": "ream start",
    "dev": "ream dev",
    "build": "ream build"
  }
}
```

::: tip
By default Ream looks for files in current working directory `.`, if you prefer another one you can change the base directory like so: `ream dev ./path/to/dir`.
:::

Then populate an entry file at `./index.js` (relative to the base directory):

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
        component: () => import('./views/index.vue')
      }
    ]
  })

  return {
    router
  }
}
```

The entry file must export a function that returns an object.

And the `index.vue` component:

```vue
<template>
  <div>Hello Ream!</div>
</template>
```

Now you can run `yarn dev` to start development server to preview your server-rendered website.