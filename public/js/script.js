btn.addEventListener('click', function() {

    // gerar um numero random entre 1 e 905
    numberPokemon = Math.floor(Math.random()*905);

    //captura o valor digitado no input
    entrada = document.getElementById('entrada').value

    // caso não tenha digitado nada no input vai ser definido a URL de um pokemon aleatorio
    if(entrada != ''){
        urlApi = "https://pokeapi.co/api/v2/pokemon/"+entrada;
    }

    // requisição da api e a modificação das tags para as informações recebidas da api
    $.ajax({
        method: "GET",
        url: urlApi,
        dataType: "json",
      })
        .done(function( msg ) {
            
            //pegando a imagem do pokemon de um db da internet
            var imgPoke = 'https://img.pokemondb.net/artwork/'+msg['name']+'.jpg' 
            
            $('#titleCard').text(msg['name']);
            $('#imgCard').attr('src',imgPoke);
            //$('#imgCard').attr('src',msg['sprites']['other']['home']['front_default']);
            $('#typeOne').text(msg['types'][0]['type']['name']);
            $('#typeOne').attr('class','list-group-item '+ msg['types'][0]['type']['name']);

            if(msg['types'].length > 1 ){
                $('#typeTwo').text(msg['types'][1]['type']['name'])
                $('#typeTwo').attr('style','display: inherite;');
                $('#typeTwo').attr('class','list-group-item '+ msg['types'][1]['type']['name']);
            }else{
                $('#typeTwo').text('')
                $('#typeTwo').attr('style','display: none;');
            }

            $('#statusOne').text(msg['stats'][5]['base_stat']);
            $('#statusTwo').text(msg['stats'][1]['base_stat']);
            $('#statusThree').text(msg['stats'][2]['base_stat']);
            
        });

});