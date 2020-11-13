<template>
  <div class="w-full lg:w-1/5 p-2 md:block">
    <button class="flex items-center w-full hover:bg-gray-200 focus:outline-none rounded py-3 px-2">
      <img src="../assets/profile.jpg" class="rounded-full w-6 h-6 mr-3">
      <p class="font-semibold text-left leading-tight">{{ userName + ' ' + secondUserName }}</p>
    </button>
    <button
    class="flex items-center w-full hover:bg-gray-200 focus:outline-none rounded p-2"
    v-for="data in SideBarData"
    :key="data.id"
    >
      <i :class="`${data.icon} ${data.class} text-xl mr-4`"></i>
      <div>
        <p class="font-semibold text-left leading-tight">{{ data.title }}</p>
        <ul>
          <li class="text-blue-600 text-xs">{{ data.updates > 0 ? '• ' + data.updates + ' updates' : '' }}</li>
        </ul>
      </div>
    </button>
  </div>

</template>

<script>
import SideBarData from '../sidebar_data'

export default {
  data() {
    return {
      SideBarData
    }
  },
  props: ['userName', 'secondUserName']

}
</script>

<style>

</style>