### **Lifecycle Hooks in Vue 3**

Vue provides lifecycle hooks that allow developers to run code at specific stages of a component’s lifecycle. These hooks are executed in a particular order from component creation to destruction.

#### **1. Creation Phase**

- `setup()` – Executes before the component is fully created (used in Composition API).
- `beforeCreate()` – Runs before the component initializes reactive data and events (Options API).
- `created()` – Runs after reactive data and events are initialized but before mounting.

#### **2. Mounting Phase**

- `beforeMount()` – Executes before the component is inserted into the DOM.
- `mounted()` – Executes after the component is inserted into the DOM. Useful for DOM manipulations, API calls, etc.

#### **3. Updating Phase**

- `beforeUpdate()` – Executes before the component updates the DOM due to reactive state changes.
- `updated()` – Executes after the DOM has been updated.

#### **4. Unmounting Phase**

- `beforeUnmount()` – Executes before the component is removed from the DOM.
- `unmounted()` – Executes after the component has been removed from the DOM.

#### **5. Error Handling & Suspense Hooks**

- `errorCaptured()` – Captures errors from child components.
- `onActivated()` – Used in `keep-alive` components when the component is activated.
- `onDeactivated()` – Used in `keep-alive` components when the component is deactivated.
