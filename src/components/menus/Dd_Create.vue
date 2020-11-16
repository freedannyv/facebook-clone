<template>
  <base-card
    class="absolute right-0 md:mr-6 w-screen md:w-100">
      <h2 class="font-bold text-2xl">Create</h2>
      <button v-for="item in CreateData"
      :key="item.id"
      class="py-2 hover:bg-gray-200 w-full focus:outline-none"
      :class="item.id === 'page' ? 'border-b border-grey-700' : ''"
      >
      <div class="flex items-center">
        <i :class="`${item.icon} h-8 w-8 p-2 mr-2 rounded-full bg-gray-300`"></i>
        <div class="text-left leading-snug">
          <p class="text-md font-semibold">{{ item.title }}</p>
          <p class="text-sm text-gray-700">{{ item.text }}</p>
        </div>
      </div>

      </button>


  </base-card>
</template>

<script>
import CreateData from '../../create_data'

export default {
  data() {
    return {
      CreateData
    }
  },
}
</script>

<style>

</style>