# Custom error page

You can return a `error` component in the entry file to customize error page:

📝 __index.js__:

```js
import Error from './Error.vue'

export default () => ({
  router,
  error: Error
})
```

📝 __Error.vue__:

```vue
<template>
  <h1>{{ error.code === 404 ? 'page not found' : error.code }}</h1>
</template>

<script>
export default {
  props: ['error']
}
</script>
```

Currently only `404` error is handled by this component.