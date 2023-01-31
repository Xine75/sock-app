<template>
  <div class="review-container">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <slot name="item" :review="review"></slot>
      </li>
    </ul>
  </div>
</template>
// slot renders the markup passed from the parent (in ProductDisplay)
<script setup>
defineProps({
  reviews: {
    type: Array,
    required: true
  }
})
</script>
