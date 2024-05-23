<template>
   <header id="headerNav">
      <div class="container" id="nav-container">
        <nav class="navbar navbar-expand-lg fixed-top">
          <a href="#" class="navbar-brand">
            <router-link class="nav-item nav-link navEscolhas" to="/"><img id="logoNav" src="./assets/img/logo.png" alt="VSMR Soluctions">VSMR Soluctions</router-link>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" 
          aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation"> 
            <span class="navbar-toggler-icon"></span>
          </button> 
          <div class="collapse navbar-collapse justify-content-end">
            <router-link class="navbar-nav nav-item" to="/historico"><button type="button" class="btn btn-primary">Cadastrar/Login</button></router-link>
          </div>   
        </nav>
      </div>
    </header>
</template>

<style>
/* NavBar */
#logoNav{
    width: 60px;
    height: 50px;
}

.navbar-brand{
    padding: 0;
    color: #fff;
}

.btn:hover{
    transform: scale(1.1);
    transition: 0.5s;
}

#navbar-links a{
    color: #fff;
}

.navbar-expand-lg .navbar-nav .navbar-link{
    padding: 1rem .8rem;
}
.navEscolhas{
   font-size: 18px;
}
.nav-item{
  padding-left: 20px;
}
#navbar-links{
  padding-right: 20px;
}
</style>