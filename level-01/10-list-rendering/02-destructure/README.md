# Vue 3 Documentation on Object Rendering and Destructuring

## 1. Object Rendering

Vue can iterate through **objects** using `v-for`.

### Syntax

```html
v-for="(value, key, index) in object"
```

- `value`: The value of the property
- `key`: The property name
- `index`: The index of the iteration (optional)

### Example

```html
<ul>
  <li v-for="(value, key) in person" :key="key">{{ key }}: {{ value }}</li>
</ul>
```

### Example Data

```js
data() {
  return {
    person: {
      name: "John Doe",
      age: 30,
      profession: "Developer"
    }
  };
}
```

---

## 2. Destructuring in Vue 3

Destructuring allows you to **extract properties** directly from objects.

### Syntax

```js
(({ key1, key2 }), index) in array;
```

### Example

```html
<li v-for="({ name, age }, index) in people" :key="index">
  {{ index }} - Name: {{ name }}, Age: {{ age }}
</li>
```

### Example Data

```js
data() {
  return {
    people: [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 28 }
    ]
  };
}
```

---

## Summary

| Concept       | Syntax                    | Purpose                           |
| ------------- | ------------------------- | --------------------------------- |
| Object        | `(value, key) in object`  | Loop through object properties    |
| Destructuring | `({key1, key2}) in array` | Access object properties directly |

---

## Official Vue 3 Documentation Links

- Objects: [List Rendering](https://vuejs.org/guide/essentials/list.html#v-for-with-an-object)
- Destructuring: [Instance State](https://vuejs.org/api/instance-state.html#v-for)
