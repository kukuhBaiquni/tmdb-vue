<script>
import ButtonBase from '../common/ButtonBase.vue'
import { debounce } from 'throttle-debounce'
import { searchMovie } from '../../api/movies'

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
    debounceInput: debounce(500, async (e) => {
      const { value } = e.target
      if (value) {
        const response = await searchMovie({
          query: e.target.value,
          include_adult: true,
        })
        console.log(response)
      }
    }),
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
        @input="debounceInput"
      />
      <ButtonBase>
        <template #child>
          <slot name="icon" />
        </template>
      </ButtonBase>
    </div>
  </label>
</template>
