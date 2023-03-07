<script>
import clsx from 'clsx'

/**
 * @module components/data-display/carousel/CarouselPagination
 * @desc Component for indicating active page & item count of carousel
 * @vue-prop {Number} currentPage - Current active page of carousel
 * @vue-prop {Object} forwardRef - This props is a ref (React.forwardRef) from carousel component
 * @vue-prop {Number} dataLength - Number of carousel slides item
 *
 * @vue-computed {String} activeDot - Function for generating active/inactive page class
 */

export default {
  name: 'CarouselPagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    forwardRef: {
      type: [Object, Function],
      required: false,
      default: () => {},
    },
    dataLength: {
      type: Number,
      required: true,
    },
  },
  computed: {
    activeDot() {
      return (index) => {
        return clsx(
          'rounded-full h-2 t',
          this.currentPage === index - 1 ? 'w-8 bg-pink-600' : 'w-3 bg-gray-400'
        )
      }
    },
  },
  methods: {
    /**
     * Function for navigating carousel page to specific index
     * @param {Number} index - Make carouse sliding into this page
     */
    slideTo(index) {
      this.forwardRef.slideTo(index - 1)
    },
  },
}
</script>

<template>
  <div class="fc gap-1 mt-4">
    <button
      @click="slideTo(page)"
      type="button"
      v-for="page in dataLength"
      :class="activeDot(page)"
      :key="page"
    ></button>
  </div>
</template>
