<script>
import InputBase from './InputBase.vue'

export default {
  name: 'InputWithIcon',
  components: {
    InputBase,
  },
}
</script>

<template>
  <InputBase>
    <template #icon>
      <i
        class="bx bx-search-alt-2 text-xl px-2 border-l border-white border-opacity-70"
      ></i>
    </template>
  </InputBase>
</template>
