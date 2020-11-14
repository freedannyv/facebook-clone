<template>
  <div class="w-full lg:w-3/5 bg-gray-700 h-screen p-4 mx-auto">
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
      <div>
      <story-card></story-card>
      </div>
      <div>
      <story-card></story-card>
      </div>
      <div>
      <story-card></story-card>
      </div>
      <div>
      <story-card></story-card>
      </div>
      <div>
      <story-card></story-card>
      </div>
      
    </div>
  </div>
</template>

<script>
import StoryCard from './layouts/StoryCard'

export default {
  components: {
    StoryCard
  }
}
</script>

<style>

</style>