<template>
  <div id="app" class="bg-gray-900">
    <app-header></app-header>
    <app-product></app-product>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Product from './components/Product.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-product': Product
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
