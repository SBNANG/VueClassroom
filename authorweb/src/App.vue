<template>
  <div id="app">
    <AuthorAddNew />
  </div>
</template>

<script>
import AuthorAddNew from './components/AuthorAddNew'
export default {
  name: 'App',
  components: {
    AuthorAddNew,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.4;
}

#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
