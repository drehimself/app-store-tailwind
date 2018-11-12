<template>
  <transition name="router-animation" enter-active-class="animated slideInUp faster">
    <div class="bg-black ml-56 flex-1 text-white pt-10 px-10">
      <div v-if="story">
        <div class="mb-4">{{ story.category_title }}</div>
        <h1 class="mb-4">{{ story.title }}</h1>
        <div class="mb-4">{{ story.content }}</div>
        <img :src="story.story_image" alt="image" class="mb-4">
      </div>

      <button class="text-white bg-blue px-4 py-2 rounded-lg" @click="$router.go(-1)">Back</button>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  created() {
    axios.get('/stories/' + this.id)
      .then(response => {
        this.story = response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      story: null
    }
  }
}
</script>

