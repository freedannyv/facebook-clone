<template>
  <header class="relative">
    <nav class="w-full shadow-md flex justify-between px-6 py-2">
      <!-- NAV LEFT -->
      <div class="flex items-center">
        <i class="fab fa-facebook fa-2x text-blue-700 mr-4"></i>

        <i class="fas fa-search bg-gray-200 p-3 rounded-full lg:rounded-r-none md:rounded-l-full cursor-pointer"></i>

        <input type="text" placeholder="Search Facebook" class="bg-gray-200 rounded-r-full py-2 focus:outline-none lg:w-64 w-0 text-gray-900">
      </div>

      <!-- NAV MIDDLE -->
      <div
       class="flex">
        <button v-for="tab in tabs"
          :key="tab.id"
          @click="updateDropdown(tab.id)"
          class="hover:bg-gray-200 rounded focus:outline-none"
          :class="dropdown === tab.id ? 'border-b-4 border-blue-600' : ''"
        >
          <i :class="`${tab.icon} text-gray-700 mx-8 text-xl ${dropdown === tab.id ? 'text-blue-700' : ''}`"></i>
        </button>
      </div>

      <!-- NAV RIGHT -->
      <div class="flex items-center">
        <button class="flex items-center hover:bg-gray-200 rounded-full py-1 px-3 mr-2 focus:outline-none">
          <img src="../assets/profile.jpg" class="w-10 h-10 rounded-full mr-2">
          <p class="font-semibold">{{ userName }}</p>
        </button>
      
        <button 
        v-for="tab in creativeTabs"
          :key="tab.id"
          class="relative mr-2 bg-gray-200 p-1 h-10 w-10 rounded-full hover:bg-gray-300 focus:outline-none"
          :class="dropdown === tab.id ? 'text-blue-700 bg-blue-100' : ''"
          @click="updateDropdown(tab.id)"
          >
          <i :class="tab.icon"></i>
          <p class="hidden absolute top-0 left-0">{{ tab.title }}</p>
        </button>
      </div>
    </nav>

    <!-- CARD MENU | ACCOUNT -->
    <my-account 
    v-if="dropdown === 'account'"
    :userName="userName"
    :userSecondName="userSecondName">
    </my-account>
    
    <my-notifications 
    v-if="dropdown === 'notifications'"
    ></my-notifications>

     <my-messenger 
    v-if="dropdown === 'messenger'"
    ></my-messenger>

     <my-create 
    v-if="dropdown === 'create'"
    ></my-create>

  </header>

    
  
</template>

<script>
import Account from '../components/menus/Dd_Account'
import Notifications from '../components/menus/Dd_Notifications'
import Messenger from '../components/menus/Dd_Messenger'
import Create from '../components/menus/Dd_Create'


export default {
  components: {
    'my-account': Account,
    'my-notifications': Notifications,
    'my-messenger': Messenger,
    'my-create': Create,
  },
  data() {
    return {
      tabs: [
        { icon: 'fas fa-home', id: 'home'},
        { icon: 'fas fa-flag', id:'pages'},
        { icon: 'fas fa-play-circle', id:'watch'},
        { icon: 'fas fa-users', id:'groups'},
        { icon: 'fab fa-fantasy-flight-games', id:'gaming'},
      ],
      creativeTabs: [
        { icon: 'fas fa-plus', id: 'create', title: 'Create'},
        { icon: 'fab fa-facebook-messenger', id: 'messenger', title: 'Messenger'},
        { icon: 'fas fa-bell', id: 'notifications', title: 'Notifications'},
        { icon: 'fas fa-sort-down', id: 'account', title: 'Account'},
      ],
      
      userName: 'Danny',
      userSecondName: 'Venn',

      id: 'home',
      dropdown: false,
    }
  },
  methods: {
    updateDropdown(name) {
      if(this.dropdown !== name) {
        return this.dropdown = name;
      } else if(this.dropdown === name) {

        return this.dropdown = ''
      } 
    }
  }
}
</script>

<style>

</style>