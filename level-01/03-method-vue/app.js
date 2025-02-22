// Create Vue app using Options API

const app = Vue.createApp({
  // Data function contains the reactive state
  data() {
    return {
      firstName: 'Harry',
      lastName: 'Potter',
    }
  },

  // Methods function contains the functions to be used within the Vue instance
  methods: {
    fullName() {
      // Accessing the data properties in the method
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    },
  },
})

// Mount the app to the HTML element with the id 'app'
app.mount('#app')
