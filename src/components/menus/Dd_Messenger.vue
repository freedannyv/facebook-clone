<template>
  <base-card
  class="absolute right-0 mr-6 w-100">


<!-- CARD ICONS AT TOP -->
  <div class="flex items-center justify-between">
    <h2 class="font-bold text-2xl">Messenger</h2>
    <div>
      <button class="btn"><i class="fas fa-ellipsis-h"></i></button>
      <button class="btn"><i class="fas fa-expand-arrows-alt"></i></button>
      <button class="btn"><i class="fas fa-video"></i></button>
      <button class="btn"><i class="fas fa-edit"></i></button>
      </div>
  </div>

  <!-- SEARCH FIELD -->
  <div class="flex my-4 items-center">
    <i class="fas fa-search bg-gray-200 p-3 rounded-l-full"></i>
    <input type="text" placeholder="Search Messenger" class="w-full bg-gray-200 rounded-r-full p-1 focus:outline-none text-gray-900 py-2">
  </div>

  <!-- MESSAGES-->
  <button v-for="message in messages"
    :key="message.id"
    class="flex items-center justify-between hover:bg-gray-200 w-full rounded p-2 focus:outline-none" 
  >
    <div class="flex items-center">
    <img :src="getImgUrl(message.id)" class="rounded-full h-16 w-16 object-cover mr-2" />
        <div>
          <p class="leading-tight text-left">{{ message.name }}</p>
          <p class="text-sm text-gray-600 text-left">{{ shorten(message.message) }} - {{ message.time }}</p>
        </div>
      </div>
      <div class="h-3 w-3 bg-blue-700 rounded-full"></div>
  </button>

  </base-card>

</template>

<script>
import MessengerData from '../../messenger_data'

export default {
  data() {
    return {
      messages: MessengerData
    }
  },
  methods: {
    shorten(msg) {
      if(msg.length > 30) {
      return `${msg.slice(0,30)}...`
      } else {
      return msg;
      }
    },
    getImgUrl(pic) {
    return require('../../assets/'+pic+'.jpg')
    }
  }

}
</script>

<style>

</style>