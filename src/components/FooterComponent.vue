<template>
  <section class="columns">
    <section class="column">
      <figure>
        <img src="./../assets/IMG/submergers_logo.png" alt="">
      </figure>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque est, fugit enim provident, nobis totam architecto eius quam debitis tempore deleniti esse autem voluptas quaerat. Dolores, inventore? Dolor, quidem suscipit?</p>
    </section>
    <section class="column">
      <h3>SIGUENOS</h3>
      <div class="media">
        <a href=""><img src="./../assets/ICONS/instagram.svg" alt="instagram"></a>
        <a href=""><img src="./../assets/ICONS/github.svg" alt="github"></a>
        <a href=""><img src="./../assets/ICONS/twitter.svg" alt="twitter"></a>
      </div>
      <h3>SITIOS</h3>
      <ul>
        <li><a href="#mainSection">Inicio</a></li>
        <li><a href="#usSection">Nosotros</a></li>
        <li><a href="#especiesSection">Especies</a></li>
        <li><a href="#formSection">Contáctanos</a></li>
      </ul>
    </section>
    <section class="column">
      <h3>Referencias</h3>
      <ul>
        <li><a target="_blank" href="https://icons8.com/icon/36389/menú-redondeado">Menú redondeado</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
  .columns,.media,.column{
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .columns{
    justify-content: space-between;
    gap:5rem;
    padding:3rem;
  }

  .column{
    flex:1 1 100%;
    flex-wrap: wrap;
    font-size:1.6rem;
    gap: 2rem;
  }
  .column h3{
    flex:1 1 100%;
    font-size:3.2rem;
    color:var(--darkBlue);
  }

  .column p{
    font-size:1.6rem;
    text-align: justify;
    
  }

  .column .media{
    flex:1 1 100%;
    justify-content: space-evenly;
  }

  .column ul{
    flex:1 1 100%;
  }

  .column ul li{
    margin:1rem 0;
  }
  .column .media img{
    width:64px;
  }

  .column ul li a{
    font-size:1.6rem;
    padding:1rem;
    color:#333333;
  }

  @media screen and (max-width:800px){
    .columns{
      flex-wrap:wrap;
    }
  }
</style>