<template>
<h1>Are you wearing {{ product }}</h1>
</template>

<script setup>
// the 'setup' keyword allows us to use Composition API, which is a way to simplify and streamline the code
// and Composition API is itself the equivalent of React hooks, which are called composables in Vue

//ref is vuejs equivalent of useState
import { ref } from 'vue'

const changeWithDelay = function(state, newVal, delay) {
  setTimeout(() => {
    state.value = newVal
  }, delay)
}

const product = ref('Socks')
changeWithDelay(product, 'clean socks', 1000)
</script>
