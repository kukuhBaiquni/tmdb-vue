<script>
import ButtonBase from '../common/ButtonBase.vue'
import { debounce } from 'throttle-debounce'

export default {
  name: 'InputBase',
  components: {
    ButtonBase,
  },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    className: {
      type: String,
      default: 'fc',
    },
    type: {
      type: String,
      default: 'text',
    },
    onEnter: {
      type: Function,
      default: () => {},
    },
    onButtonPress: {
      type: Function,
      default: () => {},
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    onKeyPress(evt) {
      if (evt.key === 'Enter') {
        this.onEnter()
      }
    },
  },
}
</script>

<template>
  <label>
    {{ label }}
    <div class="input-wrapper">
      <input
        class="bg-transparent w-full h-full"
        type="search"
        placeholder="Search Movies.."
        @keyup="onKeyPress"
      />
      <ButtonBase>
        <template #child>
          <slot name="icon" />
        </template>
      </ButtonBase>
    </div>
  </label>
</template>
