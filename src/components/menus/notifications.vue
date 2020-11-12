<template>
  <div class="w-full mt-2 flex items-center hover:bg-gray-300 p-2 cursor-pointer rounded">
    <img src="../../assets/image.png" class="rounded-full h-12 w-12 object-cover">
    <div class="ml-2 leading-tight">
      <slot name="message" class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos expedita accusamus.</slot>
      <p class="text-sm text-blue-600 font-semibold ">
      <slot name="time">about an hour ago</slot>
      </p>
    </div>
    <div>
      <div class="h-4 w-4 bg-blue-600 rounded-full"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>