<script>
function escolhas(escolhaEcommerceModal) {
    setTimeout(function (){
            window.location.href="areaCliente.html"
        });
}
</script>

<template>
<div class="container">
        <div class="row align-items-start">
          <div class=" card col">
            <h2>Smartphone:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/smartphone.png" alt="Smartphone"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
          <div class="card col">
            <h2>Computadores:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/computer.png" alt="Computadores"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
          <div class="card col">
            <h2>Eletrodomesticos:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/eletrodomesticos.png" alt="Eletrodomesticos"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
          <div class="card col">
            <h2>Roupas:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/roupas.png" alt="Roupas"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <h2>Calcados:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/calcado.png" alt="Calcados"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
          <div class="card col">
            <h2>Acessorios:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/acessorios.png" alt="Acessorios"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
          <div class="card col">
            <h2>Cosmeticos:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/cosmeticos.png" alt="Cosmeticos"></a>
             <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
          <div class="card col">
            <h2>Bebidas:</h2>
            <a href="#escolhaEcommerceModal" data-bs-toggle="modal"><img id="logo" src="../assets/img/bebidas.png" alt="Bebidas"></a>
            <div class="form-check form-switch" id="buttonEscolha">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="escolhas()">
                
            </div>
          </div>
        </div>
</div>
    
    <!-- Essa proxima parte deve permitir o cliente definir o produtos ou produtos que deseja cadastrar -->
    <div id="escolhaEcommerceModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form action="">
            <div class="modal-header">
              <h4 class="modal-title">Cadastre seu produto</h4>
            </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="marca">Marca:</label>
                  <input type="text" class="form-control" id="marca" placeholder="Digite a marca do celular">
                  <span id="marcaError" class="text-danger"></span>
                </div>
                <div class="form-group">
                  <label for="modelo">Modelo:</label>
                  <input type="text" class="form-control" id="modelo" placeholder="Digite o modelo do celular">
                  <span id="modeloError" class="text-danger"></span>
                </div>
                <div class="form-group">
                  <label for="cor">Cor:</label>
                  <input type="text" class="form-control" id="cor" placeholder="Digite a cor do celular">
                  <span id="corError" class="text-danger"></span>
                </div>
                <div class="form-group">
                  <label for="preco">Preço:</label>
                  <input type="text" class="form-control" id="preco" placeholder="Digite o preço do celular">
                  <span id="precoError" class="text-danger"></span>
                </div>
                <div class="form-group">
                  <label for="descricao">Descrição:</label>
                  <textarea class="form-control" id="descricao" rows="3" placeholder="Digite a descrição do celular"></textarea>
                  <span id="descricaoError" class="text-danger"></span>
                </div>
                <div class="form-group">
                  <label for="foto">Foto do Produto:</label>
                  <input type="file" class="form-control-file" id="foto">
                  <span id="fotoError" class="text-danger"></span>
                  <button type="button" class="btn btn-primary">Cadastrar Produto</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<style>
/* Imports */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Ecommerces */
.container{
    margin-top: 200px;
}

.row{
    height: 200px;
}

#logo{
    height: 100px;
    width: 100px;
}

.col h2{
    font-family: 'Roboto', sans-serif;
    color: #354d78 ;
}
.col a{
    padding-left: 60px;
}

/* Botao */
#buttonEscolha{
   padding-right: 50px;
   width: 20px;
}

.btn{
    background: linear-gradient( #354d78 , rgba(9, 9, 233, 0.332));
    color: white;
}

</style>