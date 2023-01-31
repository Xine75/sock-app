<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart }})</div>
  <ProductDisplay></ProductDisplay>

</template>
// v-bind is like double curlies, but for binding attributes, can be used for images, styles, class

<script setup>
// the 'setup' keyword allows us to use Composition API, which is a way to simplify and streamline the code
// and Composition API is itself the equivalent of React hooks, which are called composables in Vue
//ref is vuejs equivalent of useState
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue'
const cart = ref(0)
</script>
