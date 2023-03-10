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
    <p> Shipping: {{ shipping }}</p>
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
  <ReviewList :reviews="reviews">
   <template #heading>
     Reviews:
   </template>
    <template #item="{ review }">
      <span>{{ review.name }} gave this {{ review.rating }} stars</span>
      <br/>
      <span>{{ review.content }}</span>
    </template>
  </ReviewList>
  <ReviewForm @review-submitted="addReview"></ReviewForm>
</div>
</template>

<script setup>
// the 'setup' keyword allows us to use Composition API, which is a way to simplify and streamline the code
// and Composition API is itself the equivalent of React hooks, which are called composables in Vue

//ref is vuejs equivalent of useState
import { ref, computed } from 'vue'
import socksGreenImage from '../assets/images/socks_green.jpeg'
import socksBlueImage from '../assets/images/socks_blue.jpeg'

import ReviewForm from './ReviewForm.vue'
import ReviewList from './ReviewList.vue'

const props = defineProps({
  premium: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue Mastery')
const selectedVariant = ref(0)
const details = ref(['50% cotton', '30% wool', '20% polyester'])
const variants = ref([
  { id: 2234, color: 'green', image:socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image:socksBlueImage, quantity: 0 }
])

const reviews = ref([])
const addToCart = () => {
  emit('add-to-cart', variants.value[selectedVariant.value].id)
}
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

const shipping = computed(() => {
  if (props.premium) {
    return 'Free'
  } else {
    return '$2.99'
  }
})

const addReview = (review) => {
  reviews.value.push(review)
}
</script>
