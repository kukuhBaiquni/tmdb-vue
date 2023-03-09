<script>
import ButtonBase from '../common/ButtonBase'

export default {
  components: {
    ButtonBase,
  },
}
</script>

<template>
  <div
    class="w-[300px] border border-white border-opacity-70 rounded flex items-center focus-within:border-pink-600 transition-all duration-300"
  >
    <input
      type="search"
      class="h-full w-full bg-transparent px-2"
      placeholder="Search Movies.."
    />
    <ButtonBase>
      <template #child>
        <i
          class="bx bx-search-alt-2 text-xl px-2 border-l border-white border-opacity-70"
        ></i>
      </template>
    </ButtonBase>
  </div>
</template>
