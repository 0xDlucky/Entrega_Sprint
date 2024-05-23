<script setup>

</script>

<template>
    <header id="headerNav">
      <div class="container" id="nav-container">
        <nav class="navbar navbar-expand-lg fixed-top">
          <a href="#" class="navbar-brand">
            <router-link class="nav-item nav-link navEscolhas" to="/"><img id="logoNav" src="./assets/img/logo.png" alt="VSMR Soluctions">VSMR Soluctions</router-link>
          </a>
          <div class="collapse navbar-collapse justify-content-end">
            <router-link style="text-decoration: none;" class="navbar-nav nav-item" to="/cadProduto"><button type="button" class="btn btn-primary">Cadastrar Produtos</button></router-link>
            <router-link style="text-decoration: none;" class="navbar-nav nav-item" to="/historico"><button type="button" class="btn btn-primary">Historico</button></router-link>
          </div> 
          <!-- <div class="collapse navbar-collapse justify-content-end">
            <router-link class="navbar-nav nav-item" to="/cadProduto"><button type="button" class="btn btn-primary">Cadastrar/Login</button></router-link>
          </div>   --> 
        </nav>
      </div>
    </header>

    <div class="main">
      <router-view></router-view>
    </div>
  
</template>

<style>

/* NavBar */
#logoNav{
    width: 60px;
    height: 50px;
}

.navbar-brand{
    padding: 0;
    color: #354d78;
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

/* Modais */

    /* Cad Cliente */
    .modal-header{
   background: linear-gradient( #354d78, rgba(9, 9, 233, 0.332));
 } 
 .modal-title{
   color: white;
   font-size: 20px;
 }
 .modal-body h4{
   color: #354d78;
   padding-left: 180px;
 }
 .form-group{
   padding-top: 10px;
 }
 .buttonsModal{
   padding: 10px 200px;
 }
 .btn{
   background: linear-gradient( #354d78, rgba(9, 9, 233, 0.332));
 }

 .modal.show{
  visibility: visible;
  opacity: 1;
 }
 .modal.show .modal-content{
  visibility: visible;
  opacity: 1;
  transform: scale(1);
 }
</style>
