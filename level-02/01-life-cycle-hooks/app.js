const app = Vue.createApp({
  data() {
    return {
      message: "Hello From Vue.js",
    };
  },

  // Creation Phase
  beforeCreate() {
    console.log(`beforeCreate: ${this.message}`);
    // Output: undefined (reactive data not yet initialized)
  },
  created() {
    console.log(`created: ${this.message}`);
    // Output: "Hello From Vue.js" (reactive data initialized)
  },

  // Mounting Phase
  beforeMount() {
    // el (short for "element") refers to the root DOM element that the Vue instance is mounted to. In Vue 3, you typically use app.mount("#app") instead of the el option (which was more common in Vue 2).
    console.log(`beforeMount: ${this.$el}`);
  },
  mounted() {
    console.log(`mounted: ${this.$el}`);
    // DOM is now updated, useful for fetching data or manipulating DOM
  },

  // Updating Phase
  beforeUpdate() {
    console.log(`beforeUpdate: ${this.message}`);
  },
  updated() {
    console.log(`updated: ${this.message}`);
  },

  // Unmounting Phase
  beforeUnmount() {
    console.log("beforeUnmount: Component is about to be removed");
  },
  unmounted() {
    console.log("unmounted: Component removed from DOM");
  },

  methods: {
    updateMessage() {
      this.message = "Message Updated!";
    },
  },
});

const vm = app.mount("#app");

// Unmount component after 5 seconds to trigger beforeUnmount/unmounted
setTimeout(() => {
  app.unmount();
}, 5000);
