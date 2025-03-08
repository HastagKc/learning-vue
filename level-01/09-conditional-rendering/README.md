# Conditional Rendering in Vue 3

Vue provides powerful directives like `v-if`, `v-else-if`, `v-else`, and `v-show` to conditionally render elements based on certain conditions.

## 1. **v-if Directive**

### Description:

`v-if` is used to **conditionally render** an element. The element is only added to the DOM if the condition evaluates to `true`.

### Syntax:

```html
<h2 v-if="condition">Element will be shown if condition is true</h2>
```

### Important Points:

- Completely **removes or adds the element** from the DOM.
- Best for **rarely toggled elements**.
- Higher performance cost if toggled frequently.

### Example:

```html
<div v-if="isVisible">Visible Content</div>
<div v-else>Hidden Content</div>
```

---

## 2. **v-else-if Directive**

### Description:

`v-else-if` is used to **chain multiple conditional blocks**.

### Syntax:

```html
<h2 v-if="mode == 1">Mode 1</h2>
<h2 v-else-if="mode == 2">Mode 2</h2>
<h2 v-else>None</h2>
```

### Important Points:

- Must be placed **immediately after** a `v-if` or another `v-else-if`.
- Useful for **multiple mutually exclusive conditions**.

---

## 3. **v-else Directive**

### Description:

`v-else` is used to **render fallback content** when none of the preceding conditions are true.

### Syntax:

```html
<h2 v-if="loggedIn">Welcome User</h2>
<h2 v-else>Please Login</h2>
```

### Important Points:

- Must be placed **immediately after** `v-if` or `v-else-if`.
- No condition required — it automatically renders if the previous conditions are false.

---

## 4. **v-show Directive**

### Description:

`v-show` toggles the **visibility of an element** by changing the CSS `display` property.

### Syntax:

```html
<h2 v-show="isVisible">Visible Element</h2>
```

### Important Points:

- Unlike `v-if`, the element is **never removed** from the DOM.
- Just toggles between `display: none` and `display: block`.
- Best for **frequently toggled elements**.
- Slightly better performance than `v-if` for frequent show/hide actions.

---

## 🔑 Key Differences between `v-if` and `v-show`

| Directive | Behavior                    | Use Case                    | Performance |
| --------- | --------------------------- | --------------------------- | ----------- |
| `v-if`    | Adds/Removes from DOM       | Rarely toggled elements     | Slower      |
| `v-show`  | Toggles visibility with CSS | Frequently toggled elements | Faster      |

---

## 🎯 Best Practices:

- Use **`v-if`** when the condition is **rarely changed**.
- Use **`v-show`** when the condition is **frequently toggled**.
- Always chain **`v-else-if`** and **`v-else`** immediately after `v-if`.
- Use **CSS transitions** with `v-show` for smooth animations.

---

## Example with GSAP Animation (Bonus 🔥):

```html
<div v-show="isVisible" class="fade" @click="isVisible = !isVisible">
  Click Me to Hide
</div>

<script>
  const app = Vue.createApp({
    data() {
      return {
        isVisible: true,
      };
    },
    watch: {
      isVisible(newVal) {
        gsap.to(".fade", { opacity: newVal ? 1 : 0, duration: 0.5 });
      },
    },
  });
  app.mount("#app");
</script>
```

---

### Conclusion:

Both `v-if` and `v-show` are essential for dynamic rendering in Vue applications. Choose the directive based on your performance needs and frequency of toggling the element.
