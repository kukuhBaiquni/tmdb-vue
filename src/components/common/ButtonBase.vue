<script>
/**
 * @module components/common/ButtonBase
 * @desc Object shape for data
 * @param {Object} data
 * @param {String} data.type - Type of button (button|submit|reset) (optional, default: button)
 * @param {String} data.className - Tailwind class given to button (optional, default: '')
 * @param {Function} data.onClick - Click event handler for button (optional, default: () => {})
 * @param {Boolean} data.showBadge - Wheter to show badge on button or not (optional, default: false)
 */

export default {
  name: 'ButtonBase',
  props: {
    type: {
      type: String,
      default: 'button',
      validator(val) {
        return val === 'button' || val === 'submit' || val === 'reset'
      },
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    className: {
      type: [String, Array],
      default: '',
    },
    showBadge: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <button @click="onClick" :type="type" :class="[className, 'relative']">
    <div
      v-if="showBadge"
      class="absolute w-2 h-2 text-[11px] bg-pink-600 rounded-full flex justify-center items-center right-0 top-0.5"
    ></div>
    <slot name="child" />
  </button>
</template>
