# Custom root component

The root component we use by default looks like:

```js
const root = {
  render(h) {
    return h('router-view')
  }
}
```

It's really simple, if you want to use your own one, you can return a `root` component in the entry file:

```js{1,5}
import root from './Root.vue'

export default () => ({
  router,
  root
})
```