<template>
  <div>
    <app-sidebar
    class="hidden md:w-1/3 lg:w-1/5 p-2 md:block"
    :userName=userName
    :secondUserName=secondUserName
    ></app-sidebar>
  </div>
</template>

<script>
import SideBar from '../components/Sidebar'
export default {
  data() {
    return {
      userName: 'Danny',
      secondUserName: 'Venn'
    }
  },
  components: {
    'app-sidebar': SideBar
  },
}
</script>

<style>

</style>