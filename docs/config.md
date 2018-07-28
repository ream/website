# Config

Ream loads `ream.config.js` from your project root.

## entry

- __Type__: `string`
- __Default__: `index.js`

The entry file of your app.

## rootPublicFiles

Hoist files from `/public/` to root path `/`, for example, with `rootPublicFile: ['foo.txt']`, you will be able to use `/foo.txt` to access `/public/foo.txt`.

## pwa

- __Type__: `boolean`
- __Default__: `true`

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