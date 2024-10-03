<template>
  <div>
    <h1>Page A</h1>
    <p>Random Number: {{ randomNumber }}</p>
    <button @click="$emit('toggle-theme')">Toggle Theme</button>
    <button @click="$router.push('/b')">Go to Page B</button>
    <button @click="saveAndRefresh">Save and Refresh</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PageA',
  data() {
    return {
      randomNumber: 0
    }
  },
  mounted() {
    this.generateRandomNumber();
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 100) + 1;
    },
    saveAndRefresh() {
      axios.post('api/random', { value: this.randomNumber })
          .then(() => {
            this.generateRandomNumber();
          })
          .catch(error => {
            console.error('Error saving number:', error);
          });
    }
  }
}
</script>