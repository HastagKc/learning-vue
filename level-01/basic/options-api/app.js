// Vue application with options api

const app = Vue.createApp({
  // application logics goes here

  data() {
    return {
      count: 0,
    }
  },
  methods: {
    incrementByOne() {
      this.count++
    },
  },
})

app.mount('#app')

// 🔥 Summary (Step-by-Step Execution)
// createApp({...}) → Creates a Vue application instance.
// data() → Defines reactive properties.
// methods → Defines functions to manipulate the data.
// mount('#app') → Connects Vue with the HTML element (#app).
