<script>
import { RouterView } from 'vue-router'
import AppBar from '../components/block/appbar/AppBar.vue'

export default {
  name: 'DefaultView',
  components: {
    AppBar,
    RouterView,
  },
}
</script>

<template>
  <main class="w-full h-full">
    <AppBar />
    <RouterView />
    <!-- <div class="w-full">
      <div class="max-w-screen-xl mx-auto">
        <h5 class="my-4 text-xl font-bold text-gray-800 uppercase">
          Now Playing
        </h5>
        <CarouselDisplay :data="movies" />
      </div>
    </div> -->
  </main>
</template>
