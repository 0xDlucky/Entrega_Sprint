<script setup>

</script>

<template>
  <main id="main1">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src="https://unimar.br/abertura/img/universo.jpg" class="d-block w-100" alt="imagem1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Tray E-Commerce CONF 2019</h5>
            <p>Venha conhecer mais sobre esse grande evento.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercave.com/wp/wp3537586.jpg" class="d-block w-100" alt="imagem2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://livevox.com/wp-content/uploads/2023/08/11_Customer_Care_Trends_That_Have_Shaken_Things_Up.jpg" class="d-block w-100" alt="imagem3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev setas-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon setas-carousel" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next setas-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon setas-carousel" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main> 
</template>

<style>
/* Carousel */
.carousel-caption h5{
  color: white;
  font-weight: bold;
} 
.carousel-caption p{
  color: white;
}
.carousel-item img{
  height: 750px;
}
.setas-carousel:hover{
    transform: scale(1.1);
    transition: 0.5s;
}
.setas-button{
  height:5px; 
  margin-top: 400px;
}
</style>

