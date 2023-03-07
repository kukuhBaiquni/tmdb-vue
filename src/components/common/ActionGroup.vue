<script>
import ButtonBase from './ButtonBase.vue'

export default {
  name: 'ActionGroup',
  props: {
    data: {
      type: Array,
      required: true,
    },
    className: {
      type: String,
      default: 'fc gap-5 text-xl',
    },
    groupType: {
      type: String,
      default: 'button',
      validator: (val) =>
        val === 'button' || val === 'link-ex' || val === 'link-in',
    },
  },
  components: {
    ButtonBase,
  },
}
</script>

<template>
  <div v-if="groupType === 'button'" :class="className">
    <ButtonBase
      v-for="(button, idx) in data"
      :key="idx"
      :onClick="button.onClick"
      :className="button.class"
      :type="button.type"
    >
      <template #child>
        <span v-if="!button.icon">{{ button.name }}</span>
        <i v-if="button.icon" :class="button.icon"></i>
      </template>
    </ButtonBase>
  </div>
  <div v-if="groupType === 'link-ex'" :class="className">
    <a
      v-for="(button, idx) in data"
      :key="idx"
      :href="button.href"
      target="_blank"
      rel="noopener noreferrer"
      :class="button.class"
    >
      <span v-if="!button.icon">{{ button.name }}</span>
      <i v-if="button.icon" :class="button.icon"></i>
    </a>
  </div>
  <div v-if="groupType === 'link-in'" :class="className">
    <router-link
      v-for="(button, idx) in data"
      :key="idx"
      :to="button.href"
      :class="button.class"
    >
      <span v-if="!button.icon">{{ button.name }}</span>
      <i v-if="button.icon" :class="button.icon"></i>
    </router-link>
  </div>
</template>
