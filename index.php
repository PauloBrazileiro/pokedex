<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex by: Paulo S. B. luiz</title>
    <link rel="stylesheet" href="public/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="container-sm mt-5 ">
        <h1 class="text-center mb-4">Pokedex</h1>
        <form class="row g-3" method="POST"></form>    
            <div class="input-group input-group-lg">
            
                <!-- <span class="input-group-text" id="inputGroup-sizing-lg">PKD</span> -->
                <input name="inputUrl" id="entrada" type="text" class="form-control" placeholder="Coloque o nome ou um numero do pokemon." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                <button id="btn" type="submit" class="btn btn-danger btn-lg" ng-click="anyFunction()">PESQUISAR</button>    
            </div>
            <span class="text-center">você pode clicar em PESQUISAR para pesquisar um pokemon aleatorio</span>
        </form>
    </div>
    <div class="container-sm mt-5 d-flex justify-content-center">
        <div class="card justify-content-center pokeimg stat" style="width: 19rem;">
            <h4 style="text-transform:uppercase" id="titleCard" class="card-title text-center">title</h4>
            <img id="imgCard" src="..." class="card-img-top" alt="...">
            <div class="card-body stat">
                <ul style="text-transform:uppercase"  class="list-group list-group-horizontal justify-content-center">
                   <li class="list-group-item" id="typeOne"></li>
                   <li class="list-group-item" id="typeTwo"></li> 
                </ul>
                <ul style="text-transform:uppercase" class="list-group-flush list-group list-group-horizontal justify-content-center">
                    <li class="list-group-item list-group-item-danger" >SPEED<p id="statusOne"></p></li>
                    <li class="list-group-item list-group-item-danger" >ATAQUE<p id="statusTwo"></p></li> 
                    <li class="list-group-item list-group-item-danger" >DEFESA<p id="statusThree"></p></li> 
                 </ul>
            </div>
        </div>
    </div>

    <script src="public/js/script.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>