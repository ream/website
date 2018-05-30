# Introduction

## What is Ream?

Ream is a minimal framework for building server-rendered or static website using Vue.js under the hood. Unlike other popular SSR frameworks, Ream is designed to be more low-level, which means it does not enforce a specific folder structure. In other words, it's pretty similar to a normal SPA, it's possible to migrate a vue-cli or [Poi](https://poi.js.org) app to Ream in minutes!

There's only one basic concept:

You create an app by populating an entry file, says `index.js`. It will be server-rendered so that the initial rendering will faster than a normal SPA, after that the client-side app will take over it.

If you'd like to learn and build a website with Ream, keep reading and you'll get there pretty fast.

## Why the name?

It's somehow inspired by the famous twins __Rem__ and __Ram__ from anime world. __Rem__ is like the client-side and __Ram__ is like the server-side, they cannot live without each other.

__Rem__ wants to do all the jobs on her own but __Ram__ just says "chill my little sister, I'm here to help you out on my end."

## Getting started

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