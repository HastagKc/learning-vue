## Directly Apply bind to an Object

Here’s the **code** with **short notes** at the end:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Binding Inline Style</title>
  </head>
  <body>
    <div id="app">
      <!-- Directly bind to an object -->
      <div :style="textStyleObj">Binding Inline Styling</div>
    </div>

    <!-- Vue CDN link -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
      const app = Vue.createApp({
        data() {
          return {
            textStyleObj: {
              color: 'red', // CSS property: text color
              fontSize: '32px', // CSS property: font size with unit
              fontWeight: 900, // CSS property: font weight (corrected from textWeight)
            },
          }
        },
      })

      app.mount('#app')
    </script>
  </body>
</html>
```

---

### **Short Notes**

This code demonstrates **inline style binding** in Vue.js using the `:style` directive. The `textStyleObj` object contains CSS properties (`color`, `fontSize`, `fontWeight`) that are dynamically applied to the `div`. Ensure property names use **camelCase** (e.g., `fontWeight` instead of `textWeight`) and include units (e.g., `32px`). The output applies `color: red`, `font-size: 32px`, and `font-weight: 900` to the `div`. This approach is ideal for dynamic or conditional styling.
