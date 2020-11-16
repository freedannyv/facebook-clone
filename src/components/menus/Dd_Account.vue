<template>
    <base-card 
    class="absolute right-0 md:mr-6 w-screen md:w-100">
    <button class="flex items-center hover:bg-gray-300 rounded p-2 w-full">
      <img src="../../assets/profile.jpg" class="h-16 w-16 rounded-full mr-2">
      <div>
        <p class="font-semibold text-left">{{ userName + ' ' + userSecondName}}</p>
        <p class="text-left text-gray-600 text-sm">See Your Profile</p>
      </div>
    </button>
    <hr>
    <button class="flex items-center hover:bg-gray-300 rounded p-2 w-full">
      <i class="fas fa-exclamation h-8 w-8 py-2 bg-gray-300 rounded-full mr-2"></i>
      <div class=" py-2">
        <p class="font-semibold text-left leading-tight">Give Feedback</p>
        <p class="text-left text-gray-600 text-sm leading-tight">Help us improve the new Facebook</p>
      </div>
    </button>
      <hr>

    <button class="w-full flex items-center justify-between hover:bg-gray-300 rounded p-2">
      <div class="flex items-center">
        <i class="fas fa-cog h-8 w-8 bg-gray-300 rounded-full mr-2 py-2"></i>
        <p class="font-semibold text-left leading-tight">Privacy Policy</p>
      </div>
        <i class="fas fa-chevron-right"></i>
    </button>

    <button class="w-full flex items-center justify-between hover:bg-gray-300 rounded p-2">
      <div class="flex items-center">
        <i class="fas fa-question h-8 w-8 bg-gray-300 rounded-full mr-2 py-2"></i>
        <p class="font-semibold text-left leading-tight">Help & Support</p>
      </div>
        <i class="fas fa-chevron-right"></i>
    </button>

    <button class="w-full flex items-center hover:bg-gray-300 rounded p-2">
      <div class="flex items-center">
        <i class="fas fa-sign-out-alt h-8 w-8 bg-gray-300 rounded-full mr-2 py-2"></i>
        <p class="font-semibold text-left leading-tight">Log Out</p>
      </div>
    </button>
      <div>
        <p class="text-xs leading-tight text-gray-600 mt-2">
          <a href="">Privacy </a> | 
          <a href="">Terms</a> |
          <a href="">Advertising</a> |
          <a href="">Ad choices <i class="fas fa-plus"></i> </a> |
          <a href="">Cookies</a> |
          <a href="">More</a> |
          Facebook © 2020
        </p>
      </div>
    </base-card>
</template>

<script>
export default {
  props: ['userName', 'userSecondName'],
data() {
  return {
  }
},
}
</script>

<style scoped>
  a:hover {
    text-decoration: underline;
  }
</style>