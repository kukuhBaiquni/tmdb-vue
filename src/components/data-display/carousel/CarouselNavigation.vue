<script>
export default {
  name: 'CarouselNavigation',
  props: {
    prev: {
      type: Function,
      required: true,
    },
    next: {
      type: Function,
      required: true,
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
