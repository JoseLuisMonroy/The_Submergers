<template>
  <section class="mainSection" id="mainSection">
    <p>SE PARTE DEL CAMBIO PARA CUIDAR NUESTROS OCÉANOS</p>
    <button class="orangeButton" to="./../views/LoginView.vue">SUSCRIBETE</button>
  </section>
</template>

<style scoped>
.mainSection{
  flex-direction: column;
  gap:5rem;

  background-image: url("./../assets/IMG/MicrosoftTeams-image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mainSection p{
  width:70%;
  font-size: 6.4rem;
  
  color:white;
  text-align: center;

  border-radius: 5px;
  background-color: rgba(var(--grayRGB),.15);
  box-shadow: 0px 2px 5px var(--gray);

}

@media  screen and (max-width:1080px) {
  .mainSection p{
    width:90%;
  }
}
</style>