<template>
  <div class="bg-black text-white flex-1 ml-56">
    <transition name="animation" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="titleBarVisible" class="text-white bg-grey-darkest border-b border-grey p-3 text-center fixed z-10 w-full pr-56">
        Discover
      </div>
    </transition>

    <flickity ref="flickity" :options="flickityOptions" class="px-10">
      <div class="w-full discover-banner max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">The Basics</div>
        <h1 class="font-normal mb-4">Create Personal Projects</h1>
        <p class="w-64 leading-normal text-grey-lighter">With these apps, creativity has no boundaries.</p>
      </div>

      <div class="w-full discover-banner max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')" :style="`background-image: url(${image2});`">
        <div class="uppercase mb-4">Another Title</div>
        <h1 class="font-normal mb-4">Another Title Here</h1>
        <p class="w-64 leading-normal text-grey-lighter">Andre is the best!!</p>
      </div>
      <div class="w-full discover-banner max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">The Basics</div>
        <h1 class="font-normal mb-4">Create Personal Projects</h1>
        <p class="w-64 leading-normal text-grey-lighter">With these apps, creativity has no boundaries.</p>
      </div>
      <div class="w-full discover-banner max-w-full text-white px-8 rounded-b-lg pt-12 mb-10" @click="story('Create Personal Projects')">
        <div class="uppercase mb-4">The Basics</div>
        <h1 class="font-normal mb-4">Create Personal Projects</h1>
        <p class="w-64 leading-normal text-grey-lighter">With these apps, creativity has no boundaries.</p>
      </div>
    </flickity>

    <div class="flex mb-10 px-10">
      <div class="w-1/2 mr-4 bg-grey-darkest rounded-lg flex px-8 py-6" @click="story('Get Focused, Fast')">
        <div class="flex-1">
          <div class="uppercase text-grey-light text-xs mb-1">Featured App</div>
          <h1 class="font-normal text-2xl mb-4">Get Focused, Fast</h1>
          <p class="text-grey-light text-xs leading-normal">OmniFocus transforms your to-do list. Click to read how.</p>
        </div>
        <div class="text-right">
          <img src="../assets/discover2.jpg" alt="image" class="rounded-full w-40">
        </div>
      </div>

      <div class="w-1/2 ml-4 bg-grey-darkest rounded-lg px-8 py-6" @click="story('Apps That Look Great in Dark Mode')">
        <div class="uppercase text-grey-light text-xs mb-1">Collection</div>
        <h1 class="font-normal text-2xl mb-4">Apps That Look Great in Dark Mode</h1>
        <p class="text-grey-light text-xs leading-normal mb-4">Dark is the new black.</p>
        <img src="../assets/icons_darkmode.png" alt="icons">
      </div>
    </div>

    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="apps-games-we-love text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Apps and Games We Love Right Now</h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div class="flex flex-wrap mb-4">
        <div class="w-1/2 flex" @click="product('QuarkXPress 2018 Pro')">
          <div class="w-24">
            <img src="../assets/icon_quark.png" alt="icon">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">QuarkXPress 2018 Pro</div>
            <div class="text-grey text-xs mb-6">Love Print, Live Digital</div>
            <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                $399.99
              </span>
            </div>
            <div class="border-b border-grey-darker mb-10"></div>
          </div>
        </div>

        <div class="w-1/2 flex pl-6" @click="product('Pixelmator Pro')">
          <div class="w-24">
            <img src="../assets/icon_pixelmator.png" alt="icon">
          </div>
          <div class="pl-6 flex-1">
            <div class="mb-1">Pixelmator Pro</div>
            <div class="text-grey text-xs mb-6">Pro image editing for everyone</div>
            <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                $39.99
              </span>
            </div>
            <div class="border-b border-grey-darker mb-10"></div>
          </div>
        </div>

        <div class="w-1/2 flex" @click="product('OmniFocus 3')">
          <div class="w-24">
            <img src="../assets/icon_omnifocus.png" alt="icon">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">OmniFocus 3</div>
            <div class="text-grey text-xs mb-6">Accomplish More Every Day</div>
            <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold uppercase">
                Get
              </span>
            </div>
          </div>
        </div>

        <div class="w-1/2 flex pl-6" @click="product('Fantastical 2')">
          <div class="w-24">
            <img src="../assets/icon_fantastical2.png" alt="icon">
          </div>
          <div class="pl-6 flex-1">
            <div class="mb-1">Fantastical 2</div>
            <div class="text-grey text-xs mb-6">Calendar and Reminders</div>
            <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                $69.99
              </span>
            </div>
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
          <div class="w-1/2 pr-6">
            <div class="flex mb-8" @click="product('Final Cut Pro')">
              <div><img src="../assets/icon_fcp.png" alt="icon" class="w-12"></div>
              <div class="ml-3">1</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Final Cut Pro</div>
                  <div class="text-grey text-xs mb-6">Professional post-production</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $399.99
                  </span>
                </div>
              </div>
            </div>

            <div class="flex mb-8" @click="product('Magnet')">
              <div><img src="../assets/icon_magnet.png" alt="icon" class="w-12"></div>
              <div class="ml-3">2</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Magnet</div>
                  <div class="text-grey text-xs mb-6">Organize Your Workspace</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $1.39
                  </span>
                </div>
              </div>
            </div>

            <div class="flex mb-8" @click="product('DaisyDisk')">
              <div><img src="../assets/icon_daisydisk.png" alt="icon" class="w-12"></div>
              <div class="ml-3">3</div>
              <div class="ml-3 flex flex-1 justify-between">
                <div>
                  <div class="mb-1">DaisyDisk</div>
                  <div class="text-grey text-xs mb-6">Recover disk space</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold uppercase">
                    Open
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div class="w-1/2 pl-6">
            <div class="flex mb-8" @click="product('The Sims 2: Super Collection')">
              <div><img src="../assets/icon_sims.png" alt="icon" class="w-12"></div>
              <div class="ml-3">4</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">The Sims 2: Super Collection</div>
                  <div class="text-grey text-xs mb-6">Your faves in one place</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $39.99
                  </span>
                </div>
              </div>
            </div>

            <div class="flex mb-8" @click="product('Word Document Writer Pro')">
              <div><img src="../assets/icon_word.png" alt="icon" class="w-12"></div>
              <div class="ml-3">5</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Word Document Writer Pro</div>
                  <div class="text-grey text-xs mb-6">Business</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $39.99
                  </span>
                </div>
              </div>
            </div>

            <div class="flex mb-8" @click="product('Antivirus Zap - Virus & Adware')">
              <div><img src="../assets/icon_antivirusapp.png" alt="icon" class="w-12"></div>
              <div class="ml-3">6</div>
              <div class="ml-3 flex flex-1 justify-between">
                <div>
                  <div class="mb-1">Antivirus Zap - Virus & Adware</div>
                  <div class="text-grey text-xs mb-6">Scan & Remove Malware & Adware</div>
                </div>
                <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $6.99
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

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Flickity
  },
  created() {
    window.addEventListener('scroll', this.toggleTitleBar, { passive: true })
  },
  data() {
    return {
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
    story(title) {
      this.$router.push({
        name: 'story',
        params: { title }
      })
    },
    product(title) {
      this.$router.push({
        name: 'product',
        params: { title }
      })
    }
  }
}
</script>

<style>

</style>

