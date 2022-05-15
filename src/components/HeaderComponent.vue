<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <figure>
      <img src="./../assets/IMG/submergers_logo.png" alt="submergers_logo">
    </figure>
    <nav>
        <RouterLink to="/" class="btnNav">INICIO</RouterLink>
        <RouterLink to="/problematica" class="btnNav">PROBLEMATICA</RouterLink>
        <RouterLink to="/estrategias" class="btnNav">ESTRATEGIAS</RouterLink>
        <RouterLink to="/especies" class="btnNav">ESPECIES</RouterLink>
        <RouterLink to="/trips" class="btnNav">TRIPS</RouterLink>
        <RouterLink to="/login" class="btnNav">LOGIN</RouterLink>
    </nav>
</template>

<style scoped>
figure{
  flex:0 1 500px;
  height:100px;
}

nav{
  display:flex;
  justify-content: space-evenly;
}

.btnNav{
  display:flex;
  align-items: center;

  padding: 0 1rem;
  height:100px;

  font-size:1.6rem;
  letter-spacing: 1px;
  font-weight: bold;

  color: var(--darkBlue);
  border-bottom:5px solid var(--gray);

  transition: all .15s ease-in 0s;
}

.router-link-exact-active{
  border-bottom: 5px solid var(--lightBlue);
  color:var(--lightBlue);
}

.btnNav:hover{
  background-color: var(--darkBlue);
  color:var(--gray);
  border-bottom:5px solid var(--darkBlue);
}

.router-link-exact-active:hover{
  background-color: var(--lightBlue);
  color:var(--gray);
  border-bottom: 5px solid var(--gray);
}

@media screen and (max-width:1080px){
  figure{
    flex:0 1 350px;
  }
  nav{
    width:72px;
    height:72px;
    background-image: url('./../assets/ICONS/menu.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .btnNav{
    display:none;
  }
}
</style>