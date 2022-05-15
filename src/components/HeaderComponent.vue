<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
  <div>
    <img src="./../assets/IMG/fullLogo.png" alt="submergers_logo">
    <nav>
        <RouterLink class="nav-btn" to="/"><span>INICIO</span></RouterLink>
        <RouterLink class="nav-btn" to="/problematica"><span>PROBLEMATICA</span></RouterLink>
        <RouterLink class="nav-btn" to="/estrategias"><span>ESTRATEGIAS</span></RouterLink>
        <RouterLink class="nav-btn" to="/especies"><span>ESPECIES</span></RouterLink>
        <RouterLink class="nav-btn" to="/trips"><span>TRIPS</span></RouterLink>
        <RouterLink class="nav-btn" to="/login"><span>REGISTRATE</span></RouterLink>
    </nav>
  </div>
</template>

<style scoped>
div{
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  width: 100%;
}

nav{
  display: flex;
}

.nav-btn{
  display: grid;
  width: calc(100% / 6);
  overflow: hidden;

  text-align: center;
  font-weight: bold;

  background-color: var(--gray);
  color: var(--green);
  border-left: 5px solid var(--gray);

  transition: all .15s ease-in 0s;
}

.nav-btn:hover{
  background-color: var(--green);
  color:var(--gray);
  border-left:5px solid var(--green);
}

.router-link-exact-active{
  border-left: 5px solid var(--green);
  color:var(--green);
}

span{margin: auto; font-size: 1.6rem;}
</style>