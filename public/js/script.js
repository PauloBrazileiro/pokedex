btn.addEventListener('click', function() {

    numberPokemon = Math.floor(Math.random()*905);
    urlApi = "https://pokeapi.co/api/v2/pokemon/"+numberPokemon;

    $.ajax({
        method: "GET",
        url: urlApi,
        dataType: "json",
      })
        .done(function( msg ) {
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