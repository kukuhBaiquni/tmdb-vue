<script>
import clsx from 'clsx'
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
