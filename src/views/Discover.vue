<template>
  <div class="bg-black text-white flex-1 ml-56">
    <transition name="animation" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="titleBarVisible" class="text-white bg-grey-darkest border-b border-grey p-3 text-center fixed z-10 w-full pr-56">
        Discover
      </div>
    </transition>

    <flickity ref="flickity" :options="flickityOptions" class="px-10">
      <div
        v-for="story in featuredStories"
        :key="story.id"
        class="w-full discover-banner max-w-full text-white px-8 rounded-b-lg pt-12 mb-10"
        @click="gotoStory(story.id)"
        :style="`background-image: url(${story.featured_image});`"
      >
        <div class="uppercase mb-4">{{ story.category_title }}</div>
        <h1 class="font-normal mb-4">{{ story.title }}</h1>
        <p class="w-64 leading-normal text-grey-lighter">{{ story.description }}</p>
      </div>


    </flickity>

    <div class="flex mb-10 px-10">
      <div
        v-for="(story, index) in normalStories"
        :key="story.id"
        class="w-1/2 bg-grey-darkest rounded-lg flex px-8 py-6"
        :class="{ 'mr-8' : index === 0 }"
        @click="gotoStory(story.id)"
      >
        <div class="flex-1">
          <div class="uppercase text-grey-light text-xs mb-1">{{ story.category_title }}</div>
          <h1 class="font-normal text-2xl mb-4">{{ story.title }}</h1>
          <p class="text-grey-light text-xs leading-normal">{{ story.description }}</p>
        </div>
        <div class="text-right">
          <img :src="story.icon_image" alt="image" class="rounded-full w-40">
        </div>
      </div>

    </div>

    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="apps-games-we-love text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Apps and Games We Love Right Now</h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div class="flex flex-wrap mb-4">
        <div
          v-for="(product, index) in productsLove"
          :key="product.id"
          class="w-1/2 flex"
          :class="{ 'pl-6' : index % 2 !== 0}"
          @click="gotoProduct(product.id)"
        >
          <div class="w-24">
            <img :src="product.icon" alt="icon">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">{{ product.title }}</div>
            <div class="text-grey text-xs mb-6">{{ product.tagline }}</div>
            <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                ${{ product.price / 100 }}
              </span>
            </div>
            <div class="border-b border-grey-darker mb-10"></div>
          </div>
        </div>



      </div>
    </div> <!-- end apps-games-we-love -->

    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="top-paid text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Top Paid</h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div>
        <div class="flex">
          <div
            v-for="(item, indexChunk) in chunkedItems"
            :key="indexChunk"
            class="w-1/2"
            :class="{ 'pr-6' : indexChunk === 0, 'pl-6' : indexChunk === 1}"
          >
            <div
              v-for="(product, index) in item"
              :key="product.id"
              class="flex mb-8"
              @click="gotoProduct(product.id)"
            >
              <div><img :src="product.icon" alt="icon" class="w-12"></div>
              <div class="ml-3" v-if="indexChunk === 0">{{ index + 1 }}</div>
              <div class="ml-3" v-else>{{ index + 4 }}</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">{{ product.title }}</div>
                  <div class="text-grey text-xs mb-6">{{ product.tagline }}</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    ${{ product.price / 100 }}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div> <!-- end top-paid -->

    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="text-grey mb-10 px-10">
      Terms & Conditions
    </div>

  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import axios from 'axios'
import chunk from 'lodash.chunk'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Flickity
  },
  created() {
    window.addEventListener('scroll', this.toggleTitleBar, { passive: true })

    axios.get('/discover')
      .then(response => {
        this.stories = response.data.stories
        this.productsLove = response.data.productsLove
        this.productsPaid = response.data.productsPaid

        this.$nextTick(() => {
          this.$refs.flickity.rerender();
        })
      })
      .catch(e => {
        console.log(e)
      })
  },
  computed: {
    chunkedItems() {
      return chunk(this.productsPaid, 3)
    },
    featuredStories() {
      return this.stories.filter(story => story.featured)
    },
    normalStories() {
      return this.stories.filter(story => !story.featured).slice(0, 2)
    }
  },
  data() {
    return {
      stories: [],
      productsLove: [],
      productsPaid: [],
      image2: require('../assets/discover1-2.jpg'),
      titleBarVisible: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false

        // any options from Flickity can be used
      }
    }
  },
  methods: {
    toggleTitleBar() {
      // console.log(window.scrollY);

      // if (window.scrollY > 0) {
      //   this.titleBarVisible = true
      // } else {
      //   this.titleBarVisible = false
      // }

      // throttle or debounce for better performance (with lodash)
      this.titleBarVisible = window.scrollY > 0 ? true : false
    },
    gotoStory(id) {
      this.$router.push({
        name: 'story',
        params: { id }
      })
    },
    gotoProduct(id) {
      this.$router.push({
        name: 'product',
        params: { id }
      })
    }
  }
}
</script>

<style>

</style>

