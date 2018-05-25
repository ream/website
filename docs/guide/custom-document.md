# Custom document

You can return a `document` method in entry file to customize generated HTML:

```js
export default () => {
  return {
    document() {
      return `<html>...</html>`
    }
  }
}
```

Then default one is:

```js
const document = ({ headTags, scripts }) => `
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
    ${headTags()}
  </head>
  <body>
    <!--ream-root-placeholder-->
    ${scripts()}
  </body>
</html>
`
```

The arguments of `document` method:

- context
  - `headTags()`: Return a string of head tags.
  - `scripts()`: Return a string of script tags.
  - `data`: The plain object that is resolved by [`getDocumentData`](../entry-file.md#getdocumentdata)