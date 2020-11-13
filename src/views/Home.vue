<template>
  <div class="flex">
    <app-sidebar
    class="hidden lg:block lg:w-1/5"
    :userName=userName
    :secondUserName=secondUserName
    ></app-sidebar>

    <app-main></app-main>

  </div>
</template>

<script>
import SideBar from '../components/Sidebar'
import Main from '../components/Main'
export default {
  data() {
    return {
      userName: 'Danny',
      secondUserName: 'Venn'
    }
  },
  components: {
    'app-sidebar': SideBar,
    'app-main': Main
  },
}
</script>

<style>

</style>