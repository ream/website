# Plugin API

A plugin is basically a function that returns an object like this:

```js
const plugin = options => {
  return {
    name: 'plugin-name',
    apply(api) {
      // handle api
    }
  }
}
```

## API

The `apply` method accept an argument which is the plugin API.

### api.chainWebpack(fn)

Modify webpack config using [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain).

```js
api.chainWebpack((config, { type }) => {
  // config: webpack-chain instance
  // type: either `server` or `client`
})
```

### api.configureServer(fn)

Extend the server instance.

```js
api.configureServer(app => {
  app.get('/', (req, res) => res.end('hehe'))
})
```

The `app` is in fact an [express](https://expressjs.com/) instance, so any express middleware can be used here.

### api.addGenerateRoutes(string[] | string)

Add routes for the `generate` command.

```js
api.addGenerateRoutes([
  '/user/egoist',
  '/user/kchan'
])
```

### api.enhanceAppFiles

A `Set` of files for app-level enhancements.