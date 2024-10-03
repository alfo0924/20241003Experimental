<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <router-view @toggle-theme="toggleTheme"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDarkMode: true
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.dark-mode {
  background-color: #000;
  color: #fff;
}

.light-mode {
  background-color: #fff;
  color: #000;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>