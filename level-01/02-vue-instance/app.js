const { createApp } = Vue

// Ensure the DOM is fully loaded before mounting Vue instances
document.addEventListener('DOMContentLoaded', () => {
  // First Vue Instance
  const app1 = createApp({
    data() {
      return {
        firstName: 'Kshittiz',
        lastName: 'Chaudhary',
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

  // Storing the Vue instance of app2
  const vm1 = app2.mount('#app2')

  // Accessing data after 2 seconds
  setTimeout(() => {
    // Correctly accessing and modifying vm1 (app2 data)
    vm1.firstName = 'Harry'
    vm1.lastName = 'Potter'
    console.log(vm1.firstName, vm1.lastName) // Outputs: Harry Potter
  }, 2000)
})
