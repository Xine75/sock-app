<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="review.name"/>

    <label for="review">Review:</label>
    <textarea id="review" v-model="review.content"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="review.rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>
</template>

<script setup>
import { reactive } from 'vue'
// used instead of refs since all three go together in a form
const review = reactive({
  name: '',
  content: '',
  rating: null
})

const emit = defineEmits(['review-submitted'])

const onSubmit = () => {
  const reviewData = JSON.parse(JSON.stringify(review))
  emit('review-submitted', reviewData)
    //  review.name = '',
    //  review.content = '',
    //  review.rating = null
  //this does the same as the 3 statements above
  Object.assign(review, {
    name: '',
    content: '',
    rating: null
  })
}
</script>
