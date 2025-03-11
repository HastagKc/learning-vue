## 1. Array Rendering in Vue 3

Vue provides the `v-for` directive to **loop through arrays** and render list items dynamically.

### Basic Array Example

```html
<ul>
  <li v-for="bird in birds" :key="bird">{{ bird }}</li>
</ul>
```

### Syntax

```html
v-for="item in array"
```

- `item`: The current array element
- `array`: The array to loop through

### Example Data

```
data() {
  return {
    birds: ["Parrot", "Eagle", "Sparrow"]
  };
}
```

### Best Practice

Always use **`:key`** with `v-for` to help Vue identify unique elements efficiently.

---

## 2. Array with Index

To access both **item** and **index** while looping, use the following syntax:

```html
<li v-for="(bird, index) in birds" :key="index">{{ index }} - {{ bird }}</li>
```

---

## 3. Nested Arrays

For **nested arrays** (array inside an array), use two `v-for` loops.

### Example

```html
<ul>
  <li v-for="category in birds" :key="category.type">
    {{ category.type }}
    <ul>
      <li v-for="bird in category.list" :key="bird">{{ bird }}</li>
    </ul>
  </li>
</ul>
```

### Example Data

```json
data() {
  return {
    birds: [
      {
        type: "Flying Birds",
        list: ["Parrot", "Eagle", "Sparrow"]
      },
      {
        type: "Water Birds",
        list: ["Duck", "Swan", "Kingfisher"]
      }
    ]
  };
}
```

---

## 4. Destructuring in Vue 3

Destructuring allows you to **extract properties** directly from objects.

### Syntax

```jsx
(({ key1, key2 }), index) in array;
```

### Example

```html
<li v-for="({ type, list }, index) in birds" :key="index">
  {{ index }} - {{ type }}
</li>
```

This will automatically destructure:

```
{
  type: "Flying Birds",
  list: ["Parrot", "Eagle"]
}
```

---

## 5. Add Dynamic Items to Array

Vue provides **reactive methods** to manipulate arrays:

| Method      | Description             |
| ----------- | ----------------------- |
| `push()`    | Add new item at the end |
| `pop()`     | Remove last item        |
| `shift()`   | Remove first item       |
| `unshift()` | Add item at the start   |
| `splice()`  | Add/Remove items        |

### Example

```html
<button @click="birds[0].list.push('Crow')">Add Bird</button>
```

---

## Summary

| Concept       | Syntax                    | Purpose                           |
| ------------- | ------------------------- | --------------------------------- |
| Array         | `v-for="item in array"`   | Loop through array                |
| Index         | `(item, index)`           | Track index                       |
| Nested Array  | `v-for` inside `v-for`    | Loop inside arrays                |
| Destructuring | `({key1, key2}) in array` | Access object properties directly |

---

## Official Vue 3 Documentation Links

- Arrays: [List Rendering](https://vuejs.org/guide/essentials/list.html)
- Destructuring: [Instance State](https://vuejs.org/api/instance-state.html#v-for)
- Methods: [Event Handling](https://vuejs.org/guide/essentials/event-handling.html)
