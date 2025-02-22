### **Methods in Vue (Options API)**

In Vue.js, **methods** are functions that are defined in the Vue instance and are used to handle events, perform calculations, or manipulate the state. These methods can be accessed within the Vue template, other methods, or from components.

### **📌 Features of Methods in Vue**

1. **Functionality**: Methods allow you to define reusable functions that can be invoked within the Vue component.
2. **Event Handling**: Methods are often used to handle user events such as clicks, form submissions, or other interactions.
3. **Accessing Data**: Methods can access the data defined in the `data` object using `this`. They can perform operations or return modified values.
4. **Reactivity**: While methods are not directly reactive (they don't update the DOM when called), they can interact with reactive data defined in `data`, causing the DOM to update when that data changes.

---

### **📌 How to Define Methods in Vue**

In the **Options API**, methods are defined within the `methods` object of the Vue instance. Here's the general structure:

```js
const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    }
  },
  methods: {
    // Method to return full name
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
})

app.mount('#app')
```

In this example:

- The `fullName()` method is used to combine `firstName` and `lastName` and return the full name.

### **📌 Accessing Methods**

You can access methods in various places:

#### **1. In the Template**

Methods are accessed using **Vue's template syntax** with the `{{ }}` interpolation.

```html
<div id="app">
  <p>{{ fullName() }}</p>
</div>
```

Here, `fullName()` is being invoked directly in the template to display the full name.

#### **2. Inside Other Methods**

You can also call one method from another within the `methods` object using `this`.

```js
methods: {
  greet() {
    return `Hello, ${this.fullName()}`;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
}
```

#### **3. In Event Handlers**

You can invoke methods in response to user actions, such as clicks or form submissions.

```html
<button @click="alert(fullName())">Show Full Name</button>
```

### **📌 Accessing Methods with `this`**

In the **Options API**, the `this` keyword is used to refer to the Vue instance. When accessing a method or property from within the `methods` object or within a template, `this` refers to the Vue instance.

Example:

```js
methods: {
  greet() {
    // Accessing data property and method using 'this'
    alert(`Hello, ${this.firstName} ${this.lastName}`);
  }
}
```

### **📌 Important Considerations**

- **Methods are not reactive**: If you call a method in the template, it will execute whenever Vue re-renders. However, the method itself is not reactive (i.e., it does not trigger reactivity like computed properties or data).
- **No caching**: Unlike computed properties, methods will re-run each time they are accessed.

### **📌 Example with HTML and JavaScript**

**HTML**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Method Example</title>
  </head>
  <body>
    <div id="app">
      <p>{{ fullName() }}</p>
      <button @click="greet()">Greet</button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

**JavaScript (app.js)**:

```js
const app = Vue.createApp({
  data() {
    return {
      firstName: 'Harry',
      lastName: 'Potter',
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    greet() {
      alert(`Hello, ${this.fullName()}`)
    },
  },
})

app.mount('#app')
```

### **Output:**

- When the page loads, `{{ fullName() }}` will display "Harry Potter."
- Clicking the "Greet" button will trigger the `greet()` method, which displays an alert with the message "Hello, Harry Potter."

---

### **Summary**

- **Methods** in Vue are functions defined within the `methods` object in the Vue instance.
- **Methods** are used for event handling, computations, and interacting with the data.
- Methods can be invoked in templates using the `{{ methodName() }}` syntax or within event listeners.
- **`this`** is used inside methods to refer to the Vue instance and access data and other methods.
