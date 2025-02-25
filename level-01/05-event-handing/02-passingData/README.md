# **Calling Methods in Inline Handlers in Vue**

## **Introduction**

In Vue, we can call methods directly inside **inline handlers** using the `@event` directive. This allows us to execute component methods while passing arguments or performing additional logic within the template.

---

## **How to Call Methods in Inline Handlers?**

### **1. Calling a Method Without Arguments**

You can directly call a method inside an event handler:

```vue
<template>
  <button @click="sayHello">Click Me</button>
</template>

<script>
export default {
  methods: {
    sayHello() {
      alert('Hello from Vue!')
    },
  },
}
</script>
```

📌 **Key Points:**

- `@click="sayHello"` calls the method when the button is clicked.
- The method is defined inside `methods`.

---

### **2. Calling a Method With Arguments**

You can pass arguments to a method by calling it inside an inline handler:

```vue
<template>
  <button @click="greet('Vue Developer')">Greet</button>
</template>

<script>
export default {
  methods: {
    greet(name) {
      alert(`Hello, ${name}!`)
    },
  },
}
</script>
```

📌 **Key Points:**

- `@click="greet('Vue Developer')"` passes `'Vue Developer'` as an argument.
- The method receives the argument and uses it inside the alert.

---

### **3. Passing the Native Event Object**

Vue automatically passes the **event object** to method handlers, but in inline handlers, you must explicitly pass `$event`:

```vue
<template>
  <button @click="showTag($event)">Click Me</button>
</template>

<script>
export default {
  methods: {
    showTag(event) {
      alert(`Clicked element: ${event.target.tagName}`)
    },
  },
}
</script>
```

📌 **Key Points:**

- `$event` is used to pass the native **DOM event object**.
- `event.target.tagName` retrieves the clicked element’s tag.

---

### **4. Using Inline Expressions Alongside Method Calls**

You can mix method calls with expressions:

```vue
<template>
  <button @click="increment(5), logMessage()">Click Me</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment(value) {
      this.count += value
      alert(`Count: ${this.count}`)
    },
    logMessage() {
      console.log('Button clicked!')
    },
  },
}
</script>
```

📌 **Key Points:**

- `increment(5)` increases the count by 5.
- `logMessage()` logs a message in the console.
- Multiple methods can be called using a **comma-separated list**.

---

## **When to Use Inline Method Calls?**

✔ When passing **arguments dynamically**.
✔ When using **event modifiers** (`$event`).
✔ For **quick method execution** inside the template.

### **When Not to Use?**

❌ When the logic is **too complex**—use method handlers instead.
❌ If the method **performs multiple actions**, move it to `methods`.

---

## **Conclusion**

Calling methods in inline handlers is useful for **passing arguments** and **executing logic** directly in the template. However, for cleaner and more maintainable code, prefer using **method handlers** for complex logic.

🚀 **Mastering this helps in writing dynamic and interactive Vue applications efficiently!**
