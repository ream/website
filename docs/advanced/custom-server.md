# Custom server

You can use Ream with any Node.js server framework for the default `http` module, here's a quick example for using with Express.js:

```js
const server = require('express')()
const ream = require('ream')

const port = proess.env.PORT || 3000
const config = require('./ream.config')
const app = ream({
  dev: process.env.NODE_ENV !== 'production',
  ...config
})

app.getRequestHandler()
  .then(handler => {
    server.get('*', handler)

    server.start(port)
    console.log(`> Ready on http://localhost:${port}`)
  })
```

Check out the source code of the examples:

- [With Express.js](https://github.com/ream/ream/tree/master/examples/custom-server-express)
- [With http](https://github.com/ream/ream/tree/master/examples/custom-server-http)