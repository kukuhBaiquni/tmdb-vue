<script>
import ActionGroup from '../../common/ActionGroup.vue'
import SearchInput from '../../form/SearchInput.vue'
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
    SearchInput,
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
      <SearchInput />
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
