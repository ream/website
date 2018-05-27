# App-level enhancements

You can use the [Plugin API](../plugin-api.md#api-enhanceappfiles) to add app-level enhancements.

Add a plugin in your `ream.config.js`:

```js
const path = require('path')

const plugin = {
  name: 'sample-plugin',
  apply(api) {
    api.enhanceAppFiles.add(path.join(__dirname, 'enhance-app.js'))
  }
}

module.exports = {
  plugins: [plugin]
}
```

📝 __enhance-app.js__:

```js
export default context => {
  // do something
}
```

## Context

### ssrContext

The render `context` used in server-side rendering.

#### ssrContext.globalState

A plain object which will be serialized and inlined in the rendered HTML string as `window.__REAM__`.

### rootOptions

This options for root Vue instance.

### router

The vue-router instance.

### getInitialDataContext

Modify the `context` argument of `getInitialData` method of your component options:

📝 __enhance-app.js__:

```js
export default ({ getInitialDataContext }) => {
  getInitialDataContext(context => {
    context.foo = 'foo'
  })
}
```


Then in your component:

```js
export default {
  getInitialData({ foo }) {
    console.log(foo)
    //=> 'foo'
  }
}
```

### entry

The plain object which is returned by the function you export in the entry file.

### event

#### event.$on('before-server-render', handler)

Emitted right before vue-server-renderer starts rendering.

#### event.$on('before-client-render', handle)

Emitted right before Vue starts mounting on the client-side.
