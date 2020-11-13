<template>
  <base-card 
  class="absolute top-0 left-0">

  <!-- Back Button and Search Field -->
  <div class="flex items-center">
    
    <button 
    class="btn"
    @click="$emit('update-dropdown')"
    ><i class="fas fa-arrow-left"></i>
    </button>
    
    <input type="text" 
    placeholder="Search Facebook"
    class="ml-2 bg-gray-200 rounded-full p-2 focus:outline-none text-gray-900"
    >
    </div>

    <!-- Recent Searches -->
    <div class="my-3 flex justify-between items-center">
    <h1 class="font-semibold text-lg text-gray-800">Recent Searches</h1>
    <button class="text-blue-500 text-md hover:bg-gray-200 p-1 rounded">Edit</button>
    </div>

    <!-- Old Searches -->
    <button class="flex justify-between w-full py-2 hover:bg-gray-200 focus:outline-none p-2 rounded"
    v-for="search in Searches"
    :key="search.id"
    >
      <div class="flex items-center">
        <img :src="getImgUrl(search.id)" class="rounded-full h-8 w-8 object-cover mr-2" />
        <p class="font-semibold text-gray-800">{{ shorten(search.name) }}</p>
      </div>

      <!-- Delete button -->
        <button 
        class="btn focus:outline-none"
        @click="deleteUser(search.id)"
        ><i 
        class="fas fa-times"
        ></i></button>
    </button>

  </base-card>
</template>

<script>
import Searches from '../../search_library'

export default {
  data() {
    return {
      Searches
    }
  },
  methods: {
    shorten(name) {
      if(name.length > 30) {
        return `${name.slice(0,30)}...`
      } else {
        return name;
      }
    },
    
    getImgUrl(id) {
    return require('../../assets/'+id+'.jpg')
    },
    
    deleteUser(id) {
      return this.Searches = this.Searches.filter(item => item.id != id);
    }
  }
}
</script>

<style>

</style>