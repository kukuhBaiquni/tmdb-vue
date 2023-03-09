<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    className: {
      value: String,
      default:
        'w-[300px] border border-white border-opacity-70 rounded flex items-center focus-within:border-pink-600 transition-all duration-300',
    },
    label: {
      value: String,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<template>
  <label>
    Galat
    <div :class="className">
      <input
        type="search"
        class="h-full w-full bg-transparent px-2"
        placeholder="Search Movies.."
      />
    </div>
  </label>
</template>
