<template>
<div class="product-display">
<div class="product-container">
  <div class="product-image">
    <img :src="image" alt="Vue socks">
  </div>
  <div class="product-info">
    <h1>{{ title }}</h1>
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <div
        v-for="(variant, index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{ backgroundColor: variant.color }"
    ></div>
    <button
        class="button"
        :class=" { disabledButton: !inStock }"
        v-on:click="addToCart"
        :disabled="!inStock"
    >
      Add to Cart
    </button>
  </div>
</div>
</div>
</template>

<script setup>
// the 'setup' keyword allows us to use Composition API, which is a way to simplify and streamline the code
// and Composition API is itself the equivalent of React hooks, which are called composables in Vue

//ref is vuejs equivalent of useState
import { ref, computed } from 'vue'
import socksGreenImage from '../assets/images/socks_green.jpeg'
import socksBlueImage from '../assets/images/socks_blue.jpeg'

const product = ref('Socks')
const brand = ref('Vue Mastery')
const selectedVariant = ref(0)
const details = ref(['50% cotton', '30% wool', '20% polyester'])
const variants = ref([
  { id: 2234, color: 'green', image:socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image:socksBlueImage, quantity: 0 }
])


const addToCart = () => cart.value++

const updateVariant = (index) => {
  selectedVariant.value = index
}
const title = computed(() => {
  return brand.value + ' ' + product.value
})

const image = computed(() => {
  return variants.value[selectedVariant.value].image
})

const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0
})
</script>
