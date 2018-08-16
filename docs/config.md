---
sidebar: auto
---

# Config

Ream loads `ream.config.js` from your project root.

## entry

- __Type__: `string`
- __Default__: `index.js`

The entry file of your app.

## fsRoutes

- __Type__: `false` `object`

Default value:

```js
{
    baseDir: 'pages',
    basePath: '/',
    match: /\.(vue|js)$/i
}
```

Automatically adding routes from certain directory, you can use `false` to disable this behavior.

## transpileDependencies

- __Type__: `string[]`
- __Default__: `[]`

By default `babel-loader` will only transpile files outside `node_modules`, you can add certain dependency names here to transpile.

## runtimeCompiler

- __Type__: `boolean`
- __Default__: `false`

Whether to use the build of Vue core that includes the runtime compiler. Setting it to true will allow you to use the `template` option in Vue components, but will incur around an extra 10kb payload for your app.

See also: [Runtime + Compiler vs. Runtime only](https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only).

## productionSourceMap

- __Type__: `boolean`
- __Default__: `true`

Setting this to false can speed up production builds if you don't need source maps for production.

## minimize

- __Type__: `boolean`
- __Default__: `true` in production build, `false` in development build.

## pwa

- __Type__: `boolean`
- __Default__: `false`

Whether to enable Progressive Web App features.

## server

### host

- __Type__: `string`
- __Default__: `process.env.HOST || '0.0.0.0'`
- __CLI only__: `true`

Server host.

### port

- __Type__: `number`
- __Default__: `process.env.PORT || 4000`
- __CLI only__: `true`

Server port.

## css

### extract

- __Type__: `boolean`
- __Default__: `true` in production build.

Whether to extract CSS for client bundle.

## generate

### routes

- __Type__: `string[]`
- __Default__: `['/']`

Provide an array of routes to render the app from.