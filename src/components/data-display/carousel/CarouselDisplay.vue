<script>
import { Carousel, Slide } from 'vue3-carousel'
import SliderItemNowPlaying from './SliderItemNowPlaying.vue'
import CarouselNavigation from './CarouselNavigation.vue'
import 'vue3-carousel/dist/carousel.css'
import CarouselPagination from './CarouselPagination.vue'

/**
 * @module components/data-display/carousel/CarouselDisplay
 * @desc Component for displaying data
 * @vue-prop {Array} data - Slides to display in carousel
 * @vue-data {Number} [currentPage=1] - Indicator for current active carousel page, useful for styling pagination according to active page
 */

export default {
  name: 'CarouselDisplay',
  data: function () {
    return {
      currentPage: 1,
    }
  },

  components: {
    Carousel,
    Slide,
    SliderItemNowPlaying,
    CarouselNavigation,
    CarouselPagination,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * By default this function accept prop object,
     * this function called when carousel start sliding,
     * this function updating currentPage that useful
     * for matching between dot movement and carousel page transition, see more at
     * {@link https://ismail9k.github.io/vue3-carousel/api/events.html vue3-carousel docs}
     *
     * @param {Object} prop - By default this object have following property
     * @param {Number} prop.slidingToIndex - Next page index
     * @param {Number} prop.currentSlideIndex - Current page index
     * @param {Number} prop.prevSlideIndex - Previous page index
     * @param {Number} prop.slidesCount - Page count
     *
     */
    slideStart(prop) {
      this.currentPage = prop.slidingToIndex
    },
  },
}
</script>

<template>
  <div class="block relative group">
    <Carousel
      @slide-start="slideStart"
      v-model="currentPage"
      ref="carousel"
      :autoplay="3000"
      :items-to-show="2"
      :settings="{ snapAlign: 'start' }"
      :wrap-around="true"
    >
      <Slide v-for="movie in data" :key="movie?.id">
        <SliderItemNowPlaying :movie="movie" />
      </Slide>
    </Carousel>
    <CarouselNavigation :forwardRef="this.$refs.carousel" />
    <CarouselPagination
      :currentPage="currentPage"
      :forwardRef="this.$refs.carousel"
      :dataLength="data.length"
    />
  </div>
</template>
