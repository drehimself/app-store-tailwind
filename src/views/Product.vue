<template>
  <transition name="router-animation" enter-active-class="animated slideInRight faster" mode="out-in">
    <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
      <div v-if="product">
        <h1 class="mb-4">{{ product.title }}</h1>
        <div class="mb-4">{{ product.tagline }}</div>
        <div class="mb-4">{{ product.description }}</div>
        <div class="mb-4">${{ product.price / 100 }}</div>
        <img :src="product.icon" alt="image" class="mb-4">
        <img :src="product.media1" alt="asset" class="mb-4">
        <img :src="product.media2" alt="asset" class="mb-4">
      </div>
      <button class="text-white bg-blue px-4 py-2 rounded-lg" @click="back">Back</button>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    axios.get('/products/' + this.id)
      .then(response => {
        this.product = response.data
      })
      .catch(e => {
        console.log(e)
      });
  },
  props: ['id'],
  data() {
    return {
      product: null
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
