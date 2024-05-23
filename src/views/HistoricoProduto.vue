<script>
export default {
    
}
</script>

<template>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2><b>Produtos Cadastrados</b></h2>
                    </div>
                </div>
            </div>
            <div class="table-body">
                <div class="row">
                    <div class="col-sm-12">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th><b>Categoria</b></th>
                                    <th><b>Modelo</b></th>
                                    <th><b>Data de Cadastro</b></th>
                                    <th><b>Preco</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Smartphone</td>
                                    <td>Iphone 15</td>
                                    <td>15/03/2024</td>
                                    <td>R$7000,00</td>
                                </tr>
                                <tr>
                                    <td>Smartphone</td>
                                    <td>Samsung S24</td>
                                    <td>15/03/2024</td>
                                    <td>R$6500,00</td>
                                </tr>
                                <tr>
                                    <td>Smartphone</td>
                                    <td>Moto g5</td>
                                    <td>15/03/2024</td>
                                    <td>R$2,00</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        <!-- Pagination -->
                        <div class="cleafix">
                            <ul class="pagination">
                                <li class="page-item disabled"><a href="" class="page-link">Anterior</a></li>
                                <li class="page-item active"><a href="" class="page-link">1</a></li>
                                <li class="page-item"><a href="" class="page-link">2</a></li>
                                <li class="page-item"><a href="" class="page-link">3</a></li>
                                <li class="page-item"><a href="" class="page-link">4</a></li>
                                <li class="page-item"><a href="" class="page-link">5</a></li>
                                <li class="page-item"><a href="" class="page-link">Próximo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

body{
    font-family: 'Roboto', sans-serif;
    background-image: url("/assets/images/unimar.jpg");
}

.table-wrapper{
    /* background-color: #354d78; */
    border-color: black;
    padding: 20px 25px;
    margin: 30px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    background: linear-gradient( #354d78, rgba(9, 9, 233, 0.332));
}
.table-body .row{
    border-color: black;
}
.table-title{
    padding-bottom: 15px;
    background: linear-gradient( #354d78, rgba(9, 9, 233, 0.332));
    color: whitesmoke;
    padding: 16px 30px;
    margin: -20px -25px 10px;
}

.table-title h2{
    margin: 5px 0 0;
    margin-left: 0%;
    color: 03A9F4;
}

.table-title .btn{
    float: right;
    color: black;
    border: none;
    border-radius: 2px;
    outline: none !important;
    margin-left: 10px;
    background-color: #03A9F4;
}

table.table tr th, table.table tr td{
    border-color:black;
    padding: 12px 15px;
    vertical-align: middle;
}

table.table td th:first-child{
    width: 60px;
}

table.table tr th:last-child{
    width: 100px;
}

table.table tr i {
    margin: 0 5px;
}

table.table td a{
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
    outline: none !important;
}

table.table td a:hover{
    color: #2196F3;
}

table.table td a.edit{
    color: #FFC107;
}

table.table td a.delete{
    color: #F44336;
}
.table th{
    color: #354d78;
}
/* pagination */

.pagination{
    float: right;
    margin: 0 0 5px;   
}

.pagination li a{
    border: none;
    min-width: 30px;
    min-height: 30px;
    margin: 0 2px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
    line-height: 30px;
}

.hint-text{
    float: left;
    margin-top: 10px;
    font-size: 15px;
}

.pagination li a:hover{
    color: #666;
}

.pagination li.active a,  .pagination li.active a.page-link{
    background-color: #03A9F4;
}

.pagination li.active a:hover{
    background-color: #03A9F4;
}

.pagination li.disable a {
    color: #ccc;
}
</style>