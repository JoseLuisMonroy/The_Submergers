<template>
  <section class="section especiesSection">
    <h2>Especies por ayudar</h2>
    <section class="cards">
      <div class="card card1">
        <div class="cardInfo">
          <div class="cardInfoLink">
            <h3>Tortuga Lora</h3>
            <button class="btnInfo">Ver más</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab dicta quae autem tempore sapiente sunt ea, laboriosam aliquam vel nihil mollitia! Repudiandae labore illum veniam! Maxime non aliquid error.</p>
        </div>
      </div>
      <div class="card card2">
        <div class="cardInfo">
          <div class="cardInfoLink">
            <h3>Tiburon Martillo</h3>
            <button class="btnInfo">Ver más</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab dicta quae autem tempore sapiente sunt ea, laboriosam aliquam vel nihil mollitia! Repudiandae labore illum veniam! Maxime non aliquid error.</p>
        </div>
      </div>
      <div class="card card3">
        <div class="cardInfo">
          <div class="cardInfoLink">
            <h3>Ballena Azul</h3>
            <button class="btnInfo">Ver más</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab dicta quae autem tempore sapiente sunt ea, laboriosam aliquam vel nihil mollitia! Repudiandae labore illum veniam! Maxime non aliquid error.</p>
        </div>
      </div>
      <div class="card card4">
        <div class="cardInfo">
          <div class="cardInfoLink">
            <h3>Pez Napoleon</h3>
            <button class="btnInfo">Ver más</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab dicta quae autem tempore sapiente sunt ea, laboriosam aliquam vel nihil mollitia! Repudiandae labore illum veniam! Maxime non aliquid error.</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.especiesSection{
  flex-direction: column;
  justify-content: flex-start;
  gap:3rem;
  /* border:2px solid red; */
}

.cards{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 3rem;
  width:100%;
  padding:5rem;
  border:2px solid black;
}

.cards .card{
  flex: 0 1 350px;
  display:flex;
  justify-content: center;
  align-items: flex-end;
  
  height: 350px;

  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 60%;
  
  box-shadow: 3px 3px 6px var(--lightGray);
  border-radius:15px;
}

.cardInfoLink{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 1rem;
}

.card p{
  padding:1rem;
  text-align: justify;
  font-size: 1.6rem;
}

.card1{ background-image: url("./../assets/IMG/e1_tortugaLora.jpg");}
.card2{ background-image: url("./../assets/IMG/e2_tiburonMartillo.jpg");}
.card3{ background-image: url("./../assets/IMG/e3_ballenaAzul.jpg");}
.card4{ background-image: url("./../assets/IMG/e4_pezNapoleon.jpg");}

</style>