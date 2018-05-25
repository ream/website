# Data prefetching

## Use Vuex

The app will wait for the `getInitialData` method of each route component to be resolved, so you can dispatch Vue actions there to prefetch data.

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

The `getInitialData` method has following arguments:

- context
  - store: Vuex store instance
  - router: Vue router instance
  - route: Current route

## Use Apollo

In your app entry file, inject initial apollo state to document:

```js
import VueApollo from 'vue-apollo'
import createApolloClient from './createApolloClient'

const document = async ({ headTags, scripts, matchedComponents, app, entry }) => {
  await entry.apolloProvider.prefetchAll({
    route: app.$router.currentRoute,
  }, matchedComponents) 
  const apolloState = apolloProvider.exportStates()

  return `
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
      ${headTags()}
    </head>
    <body>
      <!--ream-root-placeholder-->
      ${apolloState}
      ${scripts()}
    </body>
  </html>
  `
}

export default () => {
  const apolloProvider = new VueApollo({
    defaultClient: createApolloClient() // an apollo-client instance
  })

  return {
    document,
    extendRootOptions(rootOptions) {
      rootOptions.provide = apolloProvider.provide()
    },
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

// Install the vue plugin
Vue.use(VueApollo)

// Create the apollo client
export default () => {
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: ENDPOINT + '/graphql',
  })

  const cache = new InMemoryCache()

  // If on the client, recover the injected state
  if (!ssr) {
    // If on the client, recover the injected state
    if (typeof window !== 'undefined') {
      const state = window.__APOLLO_STATE__
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