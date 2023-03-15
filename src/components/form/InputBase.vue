<script>
import ButtonBase from '../common/ButtonBase.vue'

export default {
  name: 'InputBase',
  components: {
    ButtonBase,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: 'name',
    },
    onEnter: {
      type: Function,
      default: () => {},
    },
    onButtonClick: {
      type: Function,
      default: () => {},
    },
    onInput: {
      type: Function,
      default: () => {},
    },
    onFocus: {
      type: Function,
      default: () => {},
    },
    onBlur: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<template>
  <label>
    {{ label }}
    <div class="input-wrapper">
      <input
        autocomplete="off"
        class="bg-transparent w-full h-full"
        :type="type"
        :name="name"
        placeholder="Search Movies.."
        @keyup="onEnter"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <ButtonBase @click="onButtonClick">
        <template #child>
          <slot name="icon" />
        </template>
      </ButtonBase>
    </div>
  </label>
</template>
