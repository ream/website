# Using plugins

A plugin can be used to modify webpack config, modify server etc. To use it, you can add them in the config file `ream.config.js`:

```js
module.exports = {
  plugins: [
    require('ream-plugin-foo')(/* options */)
  ]
}
```

Check out the [Plugin API](../plugin-api.md) if you want to write a plugin yourself.