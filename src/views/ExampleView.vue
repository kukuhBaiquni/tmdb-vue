<script>
export default {
  name: 'ExampleView',
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggleClass(evt) {
      console.log('ooo', evt.srcElement.parentNode.id || evt.target.id)
      const target = document.getElementById('target')
      const next = document.getElementById('next')
      const limiter = document.getElementById('limiter')
      if (this.isExpanded) {
        target.classList.remove('circle-expand')
        target.classList.add('circle-collapse')
        this.isExpanded = false

        // next.classList.add('next-invis')
        // next.classList.remove('next-tr')

        // limiter.classList.add('w-full')
      } else {
        target.classList.remove('circle-collapse')
        target.classList.add('circle-expand')
        this.isExpanded = true
        // next.classList.add('next-tr')
        // next.classList.remove('next-invis')
        // limiter.classList.remove('w-full')
      }
    },
  },
}
</script>

<template>
  <main class="h-screen w-full relative fc overflow-hidden">
    <!-- <div id="next" class="next-invis"></div> -->
    <button
      id="target"
      @click="toggleClass"
      class="circle-collapse bg-indigo-600"
    >
      <i class="bx bx-chevron-right text-3xl"></i>
    </button>
    <button
      id="bingo"
      @click="toggleClass"
      class="circle-collapse bg-purple-600"
    >
      <i class="bx bx-chevron-right text-3xl"></i>
    </button>
  </main>
</template>
