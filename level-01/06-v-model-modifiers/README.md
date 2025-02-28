# v-model modifiers

In Vue.js, `v-model` is a directive used for two-way data binding between form inputs and Vue's component state. **Modifiers** in `v-model` help transform the data before updating the state. Here are the commonly used modifiers:

### 1. **`.lazy`**

- Updates the state **only after the user leaves the input field** (on `change` event instead of `input`).
- Useful for improving performance when dealing with large forms.

```
<input v-model.lazy="name" />

```

- Without `.lazy`: Updates `name` on every keystroke.
- With `.lazy`: Updates `name` only when the user leaves the input field.

---

### 2. **`.trim`**

- Automatically **removes leading and trailing spaces** from input values.
- Useful for cleaning up user input.

```
<input v-model.trim="username" />

```

- If a user types `" John Doe "`, Vue will store it as `"John Doe"`.

---

### 3. **`.number`**

- Converts the input value to a **number** (instead of a string).
- Useful for ensuring numeric inputs.

```
<input v-model.number="age" type="number" />

```

- Without `.number`: `age` might be `"25"` (a string).
- With `.number`: `age` is `25` (a number).

---

### 4. **Custom Modifiers (in Vue 3)**

Vue 3 allows **custom modifiers** via a component’s `props`.

```
<MyInput v-model.capitalize="message" />

```

Inside the component:

```
<script setup>
defineProps(['modelValue', 'modelModifiers']);
const emit = defineEmits(['update:modelValue']);

function updateValue(event) {
  let newValue = event.target.value;
  if (modelModifiers.capitalize) {
    newValue = newValue.toUpperCase();
  }
  emit('update:modelValue', newValue);
}
</script>

<template>
  <input :value="modelValue" @input="updateValue" />
</template>

```

---

### When to Use These Modifiers?

- Use **`.trim`** for text inputs where extra spaces may cause issues.
- Use **`.number`** for numeric inputs to avoid type conversions.
- Use **`.lazy`** when you need to optimize performance in large forms.
