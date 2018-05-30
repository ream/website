# Data prefetching

## Prefetch data per-component

For each route component, you can use the component's `getInitialData` option to prefetch data:

```vue
<template>
  <div>Hello {{ target }}</div>
</template>

<script>
export default {
  getInitialData(context) {
    return {
      target: 'World'
    }
  }
}
</script>
```

You can use `getInitialData` to return a plain object or a Promise which resolves a plain object, the resolved data will be directly available in your component, just like your component's own `data` method but `getInitialData` can also be asynchronous and is evaluated before the component instance is actually created, which also means you can't access `this` here.

For the initial page load, `getInitialData` will execute on the server only. `getInitialData` will only be executed on the client when navigating to a different route via the `<router-link>` or using the vue-router APIs.

## Use Vuex

The app will wait for the `getInitialData` method of each route component to be resolved, so you can dispatch Vue actions there to prefetch data instead of returning a plain object.

In your entry file, return a `store` method to create Vuex instance:

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  return {
    router,
    store: new Vuex.Store({
      // ...
    })
  }
}
```

Then in a route component:

```vue
<script>
export default {
  async getInitialData({ store }) {
    await store.dispatch('someActionType')
  }
}
</script>
```

## Use Apollo

In your app entry file, provide `apolloProvider` on the returned object:

```js
import VueApollo from 'vue-apollo'
import createApolloClient from './createApolloClient'
import createRouter from './router'

export default () => {
  const apolloProvider = new VueApollo({
    defaultClient: createApolloClient() // an apollo-client instance
  })

  const router = createRouter()

  return {
    router,
    apolloProvider
  }
}

```

📝 __createApolloClient.js__:

```js
import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import fetch from 'isomorphic-fetch'

// Install the vue plugin
Vue.use(VueApollo)

// Create the apollo client
export default () => {
  const httpLink = new HttpLink({
    fetch,
    // You should use an absolute URL here
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
  })

  const cache = new InMemoryCache()

  // If on the client, recover the injected state
  if (process.browser) {
    // If on the client, recover the injected state
    if (typeof window !== 'undefined') {
      const state = window.__REAM__.apollo
      if (state) {
        // If you have multiple clients, use `state.<client_id>`
        cache.restore(state.defaultClient)
      }
    }
  }

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ...(process.server ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
    }),
  })

  return apolloClient
}
```

Check out the complete [source code](https://github.com/ream/ream/tree/master/examples/with-apollo) of this example.

## Context

The `context` argument of `getInitialData` method has following properties:

- `router`: The vue-router instance.
- `route`: The current route.
- `redirect(url)`: Redirect to a new page.
- `req`: (server-side only) HTTP incoming message.
- `res`: (server-side only) HTTP outcoming message.
- Other properties might be added by third-party plugins.