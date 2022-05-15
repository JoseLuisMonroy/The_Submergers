<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
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
    <FooterComponent></FooterComponent>
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

  background-color: var(--gray);

  width:100%;
}

@media screen and (max-width:1080px){
  #header{
    padding: 0 4rem;
  }
}
</style>
