<template>
  <div>
    <app-sidebar
    
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