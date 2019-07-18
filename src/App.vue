<template>
  <div id="app">
    <Navbar />
    <transition name="animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
    <router-view/>
    </transition>
  </div>
</template>
<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';

</style>
