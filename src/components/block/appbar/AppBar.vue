<script>
import ActionGroup from '../../common/ActionGroup.vue'
import {
  utilAction,
  socmedAction,
  categoriesAction,
} from '../../../constants/header-action'
export default {
  data: function () {
    return {
      utilAction,
      socmedAction,
      categoriesAction,
    }
  },
  components: {
    ActionGroup,
  },
}
</script>

<template>
  <header class="bg-gray-800 sticky top-0 z-[1000]">
    <div class="mx-auto flex py-3 max-w-screen-xl justify-between">
      <div class="flex gap-2 items-center">
        <i class="bx bx-camera-movie text-3xl"></i>
        <h3 class="font-bold">Movue</h3>
      </div>
      <div
        class="w-[300px] border border-white border-opacity-70 rounded flex items-center focus-within:border-pink-600 transition-all duration-300"
      >
        <input
          type="search"
          class="h-full w-full bg-transparent px-2"
          placeholder="Search Movies.."
        />
        <i
          class="bx bx-search-alt-2 text-xl px-2 border-l border-white border-opacity-70"
        ></i>
      </div>
      <ActionGroup :data="utilAction" />
    </div>
    <div class="w-full bg-gray-900 px-3 py-1">
      <div class="max-w-screen-xl mx-auto flex justify-between">
        <ActionGroup
          :data="categoriesAction"
          className="max-w-[350px] text-sm fc gap-4"
          groupType="link-in"
        />
        <ActionGroup
          :data="socmedAction"
          className="flex text-xl gap-1"
          groupType="link-ex"
        />
      </div>
    </div>
  </header>
</template>
