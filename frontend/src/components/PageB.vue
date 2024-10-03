<template>
  <div>
    <h1>Page B</h1>
    <button @click="$emit('toggle-theme')">Toggle Theme</button>
    <button @click="$router.push('/')">Go to Page A</button>
    <button @click="showDatabaseContent">Show Database Content</button>
    <div v-if="numbers.length > 0">
      <h2>Database Content:</h2>
      <ul>
        <li v-for="number in numbers" :key="number.id">{{ number.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PageB',
  data() {
    return {
      numbers: []
    }
  },
  methods: {
    showDatabaseContent() {
      axios.get('api/random')
          .then(response => {
            this.numbers = response.data;
          })
          .catch(error => {
            console.error('Error fetching numbers:', error);
          });
    }
  }
}
</script>