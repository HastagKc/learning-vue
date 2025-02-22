## Vue Application with Options Api

### 1️⃣ `Vue.createApp({ ... })`

- `createApp()` is a method in Vue 3 that creates a new Vue application instance.
- This instance holds the application logic, including its data, methods, and event handling.
- In Vue 2, we used `new Vue({ ... })`, but in Vue 3, we use `Vue.createApp({ ... })`.

✅ Example:

```js
const app = Vue.createApp({
  // Application logic goes here
})
```

This creates a Vue application but doesn’t mount it to the DOM yet.

---

### 2️⃣ `data()`

- The `data()` function returns an object that contains reactive data properties.
- Vue tracks changes to these properties and updates the DOM whenever their values change.

✅ Example:

```js
data() {
  return {
    count: 0
  };
}
```

- Here, `count` is a **reactive property**.
- When `count` changes, Vue automatically updates any HTML elements using `{{ count }}`.

---

### 3️⃣ `methods`

- The `methods` property is an object that holds all the functions (methods) related to the Vue instance.
- These functions are used to manipulate data and handle user interactions.

✅ Example:

```js
methods: {
  incrementByOne() {
    this.count++;
  }
}
```

- `this.count++` increases the `count` value when called.
- We use `this` to access data properties inside methods.

---

### 4️⃣ `mount('#app')`

- `mount('#app')` attaches the Vue app to the HTML element with `id="app"`.
- This makes Vue control everything inside `<div id="app"></div>`.

✅ Example:

```js
app.mount('#app')
```

- Now Vue will manage the `<h1>{{ count }}</h1>` and `<button @click="incrementByOne">Increase</button>` inside `#app`.

---

### 🔥 Summary (Step-by-Step Execution)

1. `createApp({...})` → Creates a Vue application instance.
2. `data()` → Defines reactive properties.
3. `methods` → Defines functions to manipulate the data.
4. `mount('#app')` → Connects Vue with the HTML element (`#app`).

Now, when you click the button:

1. `incrementByOne()` runs.
2. It increases `count` by `1`.
3. Vue detects the change and updates `<h1>{{ count }}</h1>` in the DOM.
