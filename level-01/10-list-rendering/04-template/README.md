# Rendering with template

In Vue, you can use `v-for` directly inside a `<template>` element to avoid unnecessary wrapping elements. This is useful when you need to render multiple elements without adding an extra parent wrapper.

---

### **Using `v-for` in `<template>`**

#### ✅ **Example: Rendering List Items Without an Extra Parent**

```vue
<template>
  <ul>
    <template v-for="item in items" :key="item.id">
      <li>{{ item.name }}</li>
      <li>Price: {{ item.price }}</li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Apple", price: "$1" },
        { id: 2, name: "Banana", price: "$0.5" },
      ],
    };
  },
};
</script>
```

🔹 **Why use `<template>`?**

- `<template>` itself is **not rendered in the DOM**.
- It avoids adding unnecessary wrapping elements.
- Useful when you need multiple sibling elements inside `v-for`.

---

### **Example: Table Rows Without Extra Wrapping**

When rendering a table, using `<template>` prevents unwanted `<tr>` nesting inside a wrapper element:

```vue
<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in items" :key="item.id">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
```

🔹 If we wrapped `<tr>` in a `<div>`, it would break the table structure.

---

### **Key Takeaways**

✅ Use `<template>` with `v-for` when rendering multiple elements without a wrapper.  
✅ It improves flexibility and avoids unnecessary DOM elements.  
✅ Ideal for tables, lists, and nested elements.
