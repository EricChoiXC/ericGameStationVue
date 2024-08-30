<template>
  <div id="app">
    <n-layout>
      <n-layout-header>
        <home-header/>
      </n-layout-header>
      <n-layout-content style="width: 80vh">
        <router-view></router-view>
      </n-layout-content>
      <n-layout-footer>
        <home-footer></home-footer>
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<script setup>
import homeHeader from '@/home/header.vue'
import homeFooter from '@/home/footer.vue'
import aside from '@/home/aside.vue'



</script>


<style scoped>
</style>
