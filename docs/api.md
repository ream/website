# API

## ream(options)

```js
const ream = require('ream')
const config = require('./ream.config')

const app = ream({
  dev: process.env.NODE_ENV !== 'production',
  ...config
})
```

You can use all [config](./config.md) options except those marked as _CLI only_.

There's an addtional option `dev: boolean` to indicate whether it's production build for not.

## app.getRequestHandler

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
