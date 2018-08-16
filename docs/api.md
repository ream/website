# API

## ream([options],[config])

```js
const ream = require('ream')

// It will load ream.config.js automatically
const app = ream()
```

### options

#### options.dev

- __Type__: `boolean`
- __Default__: `process.env.NODE_ENV !== 'production'`

Run in development mode or not.

#### options.config

- __Type__: `false` `string`
- __Default__: `ream.config.js`

Load `ream.config.js` or not.

## app.getRequestHandler()

- __Type__: `() => Promise<requestListener>`

Get a `requestListener` function for the `http.createServer` call:

```js
app.getRequestHandler()
  .then(handle => {
    const server = http.createServer((req, res) => {
      handle(req, res)
    })

    server.listen(3000)
  })
```

## app.build()

- __Type__: `() => Promise<void>`

Run webpack build.

## app.start()

- __Type__: `() => http.Server`

Start a server listening for connections.
