<script>
/**
 * @module components/data-display/carousel/CarouselNavigation
 * @desc Component for navigating carousel page manually
 * @vue-prop {Object} forwardRef - This props is a ref (React.forwardRef) from carousel component
 */

export default {
  name: 'CarouselNavigation',
  props: {
    forwardRef: {
      type: [Object, Function],
      required: false,
      default: () => {},
    },
  },
  methods: {
    /**
     * Function for navigating carousel page forward
     */
    next() {
      this.forwardRef.next()
    },
    /**
     * Function for navigating carousel page backward
     */
    prev() {
      this.forwardRef.prev()
    },
  },
}
</script>

<template>
  <div class="flex justify-between absolute top-1/2 z-50 w-full">
    <button
      @click="prev"
      type="button"
      class="hover:bg-opacity-70 rounded-full fc t translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
    >
      <i class="bx bx-chevron-left text-5xl"></i>
    </button>
    <button
      @click="next"
      type="button"
      class="hover:bg-opacity-70 rounded-full fc t -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
    >
      <i class="bx bx-chevron-right text-5xl"></i>
    </button>
  </div>
</template>
