<template>
    <base-card 
    class="absolute right-0 mr-6 max-w-xs min-w-100">
    <div class="flex justify-between">
      <h2 class="font-bold text-2xl">Notifications</h2>
      <div>
        <button class="btn fas fa-check focus:outline-none"></button>
        <button class="btn fas fa-ellipsis-h focus:outline-none"
        @click="showSettings = !showSettings"
        ></button>
      </div>
    </div>
    <p class="font-semibold">New</p>
    <new-notification></new-notification>
    <new-notification></new-notification>
    <new-notification></new-notification>

    <notif-settings class="absolute mt-12 top-0 right-0"
      v-if="showSettings"
    ></notif-settings>
    
    </base-card>
</template>

<script>
import Notifs from './notifications'
import NotifSettings from './notif_settings'

export default {
  components: {
    'new-notification': Notifs,
    'notif-settings': NotifSettings,
  },
data() {
  return {
    showSettings: false,
  }
}
};
</script>

<style scoped>

</style>