# Vue Instance

## Introduction of Vue Instance

In Vue 3, the **Vue instance** is created using `createApp()`. It serves as the **root of the Vue application**, managing the reactivity system, lifecycle hooks, and component rendering.

---

### **📌 Key Features of Vue Instance**

1️⃣ **Application Root** – Every Vue app starts with a root instance created using `createApp()`.

2️⃣ **Reactivity System** – Uses `reactive()` and `ref()` for state management.

3️⃣ **Lifecycle Hooks** – Handles component lifecycle (`onMounted`, `onUpdated`, etc.).

4️⃣ **Component Management** – Registers and renders components.

5️⃣ **Plugin System** – Supports Vue Router, Pinia (Vuex alternative), and third-party plugins.

---

## **How to Create a Vue Instance?**

In Vue 3, you create an instance using `createApp()` from `vue`:

### ✅ **Basic Example**

```
// main.js or main.ts
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app"); // Mounts the Vue instance to an element

```

```
<!-- App.vue -->
<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello Vue 3!");
</script>

```

This mounts the Vue app inside `#app` in `index.html`.

```html
<div id="app"></div>
```

---

## **How to Create Multiple Vue Instances?**

If you need multiple Vue apps running separately on a page, you can create multiple instances:

### ✅ **Multiple Instances with Different Elements**

```
const { createApp } = Vue

// Ensure the DOM is fully loaded before mounting Vue instances
document.addEventListener('DOMContentLoaded', () => {
  // First Vue Instance
  const app1 = createApp({
    data() {
      return {
        firstName: 'John',
        lastName: 'Rai',
      }
    },
  })

  app1.mount('#app1')

  // Second Vue Instance
  const app2 = createApp({
    data() {
      return {
        firstName: 'Ram',
        lastName: 'Thapa',
      }
    },
  })

  app2.mount('#app2')
})


```

```html
<div id="app1"></div>
<div id="app2"></div>
```

Each instance is independent.

---

### ✅ **Multiple Instances with Shared Component**

If you need **multiple instances of the same component**, define it separately and use it in different Vue apps:

```
import { createApp } from "vue";

const MyComponent = {
  template: `<p>{{ text }}</p>`,
  data() {
    return {
      text: "This is a reusable component",
    };
  },
};

const app1 = createApp(MyComponent);
app1.mount("#app1");

const app2 = createApp(MyComponent);
app2.mount("#app2");

```

```html
<div id="app1"></div>
<div id="app2"></div>
```

Both instances share the **same component** but have independent states.

---

## **Best Practices for Using Multiple Instances**

✅ Use **one main Vue instance** for an SPA (Single Page Application).

✅ Use **multiple instances** only if integrating Vue into a non-Vue project.

✅ For **component reuse**, use Vue's component system instead of multiple instances.
