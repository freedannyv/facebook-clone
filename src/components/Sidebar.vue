<template>

<!-- WRAPPER -->
  <div class="w-full p-2">
  
    <!-- NAME AND PROFILE PIC -->
    <button class="flex items-center w-full hover:bg-gray-200 focus:outline-none rounded py-3 px-2">
      <img src="../assets/profile.jpg" class="rounded-full w-6 h-6 mr-3">
      <p class="font-semibold text-left leading-tight">{{ userName + ' ' + secondUserName }}</p>
    </button>

    <!-- ALL OTHER BUTTONS IN LIST -->
    <button
    class="flex items-center w-full hover:bg-gray-200 focus:outline-none rounded p-2"
    v-for="data in SideBarData"
    :key="data.id"
    >
      <i :class="`${data.icon} ${data.class} text-xl mr-4`"></i>
      <div>
        <p class="font-semibold text-left leading-tight">{{ data.title }}</p>
        <p class="text-blue-600 text-xs">{{ data.updates > 0 ? '• ' + data.updates + ' updates' : '' }}</p>
      </div>
    </button>

    <!-- See More -->
    <button
    @click="seeMore = !seeMore"
    class="flex items-center w-full hover:bg-gray-200 focus:outline-none rounded p-2 font-semibold border-b border-gray-500"
    ><i class="fas fa-chevron-down text-sm mr-2 p-2 bg-gray-300 rounded-full"></i>See more</button>
  </div>

</template>

<script>
import SideBarData from '../sidebar_data'

export default {
  data() {
    return {
      SideBarData,
      seeMore: false
    }
  },

  props: ['userName', 'secondUserName']
}
</script>

<style>

</style>