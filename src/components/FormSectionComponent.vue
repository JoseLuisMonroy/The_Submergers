<template>
  <section class="formSection" id="formSection">
    <h2>¿QUIERES CONOCER MÁS?</h2>
    <form method="post" action="" class="form">
      <div class="dataForm">
        <input type="text" name="nombre" id="nombre" placeholder="Nombre">
        <input type="email" name="email" id="email" placeholder="Email">
      </div>
      <textarea name="" id="" cols="30" rows="15" placeholder="Escribe tus comentarios..."></textarea>
      <button class="orangeButton">ENVIAR</button>
    </form>
  </section>
</template>

<style scoped>
  .formSection{
    flex-wrap:wrap;
  }
  .formSection h2{
    flex: 1 1 100%;
    font-size: 6.4rem;
    color:var(--darkBlue);
    text-align: center;
  }

  .form,.dataForm{
    display:flex;
    justify-content: center;
    align-items:center;
  }
  .form{
    flex:0 1 1280px;
    flex-direction: column;
    gap:2rem;

    padding:2rem;
  }

  .dataForm{
    gap:2rem;

    width:100%;
  }

  .dataForm input{
    flex:1 1 100%;
    font-size:1.6rem;
    border:2px solid var(--lightBlue);
    border-radius:50px;
    padding:2rem;
  }

  textArea{
    width:100%;
    padding:2rem;

    font-size:1.6rem;
    
    border:2px solid var(--lightBlue);
    border-radius:30px;

    resize: none;
  }

</style>