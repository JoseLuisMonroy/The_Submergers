<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
//import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <header id="header">
    <HeaderComponent></HeaderComponent>
  </header>
  <main id="main">
    <RouterView />
  </main>
  <footer id="footer">
    
  </footer>
</template>

<style>
@import url("./CSS/submergers.css");
#header{
  position:absolute;
  top:0;

  display:flex;
  justify-content: space-between;
  align-items: center;

  width:100%;
}
</style>
