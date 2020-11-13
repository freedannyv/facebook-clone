<template>
  <header class="relative">
    <nav class="w-full shadow-md flex justify-between px-6 py-2 items-center">
      <!-- NAV LEFT -->
      <div class="flex items-center">
        <i class="fab fa-facebook fa-2x text-blue-700 mr-4"></i>

      
        <i class="fas fa-search bg-gray-200 p-3 rounded-full lg:rounded-r-none md:rounded-l-full cursor-pointer"
        @click="updateDropdown('search')"
        ></i>
        <input 
        type="text" 
        placeholder="Search Facebook" 
        class="bg-gray-200 rounded-r-full py-2 focus:outline-none lg:w-64 w-0 text-gray-900"
        @click="updateDropdown('search')"
        >
      
            <!-- BARS MENU -->
        <div class="lg:hidden">
          <button 
            :class="`flex md:flex mx-2 text-gray-700 hover:bg-gray-200 p-2 rounded-full focus:outline-none ${dropdown === 'bars' ? 'text-blue-700' : ''}`"
            @click="updateDropdown('sidebar')"
            >
              <i class="fas fa-bars text-2xl justify-start"></i>
          </button>
        </div>
      </div>


      <!-- NAV MIDDLE -->
      <div
       class="hidden lg:flex justify-between items-center">
        <router-link v-for="tab in tabs"
          :key="tab.id"
          :to="tab.id"
          class="hover:bg-gray-200 rounded focus:outline-none py-2"
        >
          <i :class="`${tab.icon} text-gray-700 mx-8 text-xl ${dropdown === tab.id ? 'text-blue-700' : ''}`"></i>
        </router-link>
      </div>
          


      <!-- NAV RIGHT -->
      <div class="flex items-center">
        <button class="hidden lg:flex items-center hover:bg-gray-200 rounded-full py-1 px-3 mr-2 focus:outline-none sm:hidden">
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

    <!-- CARD MENU  -->
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

     <search-menu 
    v-if="dropdown === 'search'"
    @update-dropdown="updateDropdown('')"
    ></search-menu>

     <sidebar-menu 
    class="absolute top-0 left-0 mt-16"
    v-if="dropdown === 'sidebar'"
    ></sidebar-menu>

  </header>

    
  
</template>

<script>
import Account from '../components/menus/Dd_Account'
import Notifications from '../components/menus/Dd_Notifications'
import Messenger from '../components/menus/Dd_Messenger'
import Create from '../components/menus/Dd_Create'
import SearchMenu from '../components/menus/search_menu'
import SideBar from './Sidebar'


export default {
  components: {
    'my-account': Account,
    'my-notifications': Notifications,
    'my-messenger': Messenger,
    'my-create': Create,
    'search-menu': SearchMenu,
    'sidebar-menu': SideBar,
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
      url: '/'
    }
  },
  methods: {
    updateDropdown(name) {
      if(this.dropdown !== name) {
        return this.dropdown = name;
      } else if(this.dropdown === name) {
        return this.dropdown = ''
      } 
    },
    updateUrl(id) {
      console.log(String(id));
      return this.url = String(id)
    }
  }
}
</script>

<style>

</style>