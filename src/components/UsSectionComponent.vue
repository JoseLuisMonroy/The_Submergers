<template>
  <section class="usSection" id="usSection">
      <section class="usImages">
        <figure>
          <img src="./../assets/IMG/ocean1.jpg" alt="">
        </figure>
        <figure>
          <img src="./../assets/IMG/ocean2.jpg" alt="">
        </figure>
        <figure>
          <img src="./../assets/IMG/ocean3.jpg" alt="">
        </figure>
        <figure>
          <img src="./../assets/IMG/ocean4.jpg" alt="">
        </figure>
        <figure>
          <img src="./../assets/IMG/ocean5.jpg" alt="">
        </figure>
      </section>
      <section class="us">
        <h1>THE SUBMERGERS</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione deleniti doloremque eveniet, dicta rem magnam. Libero eaque voluptatibus officiis pariatur temporibus ratione magnam voluptates? Quo possimus doloribus voluptas quam?</p>
        <button class="orangeButton">SABER MÁS</button>
      </section>
    </section>
</template>

<style scoped>
.usSection .usImages{
  flex:1 1 1080px;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  gap:2rem;

  flex-wrap: wrap;
}

.usImages figure{
  flex: 0 1 300px;
  height:250px;
}

.usImages figure img{
  box-shadow: 2px 2px 6px black;
  border-radius: 15px;
}

.usSection .us{
  flex:1 1 calc(100% - 1080px);
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap:6rem;

  padding:0 4rem;
}

.us h1{ 
  flex:1 1 100%;
  font-size: 6.4rem;
  text-align: center;
  color:var(--darkBlue);
}

.us p{
  flex:1 1 100%;
  font-size: 2rem;
  text-align: justify;
}

@media screen and (max-width:1260px) {
  .usSection{
    flex-wrap: wrap-reverse;
  }
}
</style>