btn.addEventListener('click', function() {
    var tipos = {
        normal: 
            "Vantagens: Nenhuma Desvantagens: Lutador Imunidades: Fantasma",
        grass: 
            "Vantagens: Terrestre, Pedra e Água Desvantagens: Inseto, Fogo, Voador, Gelo e Venenoso Imunidades: Nenhuma",
        fire: 
           "Vantagens: Inseto, Planta, Gelo e Aço Desvantagens: Pedra, Terrestre e Água Imunidades: Nenhuma",
        water: 
            "Vantagens: Fogo, Terrestre e Pedra \n Desvantagens: Elétrico e Planta Imunidades: Nenhuma",
        electric:
            'Vantagens: Água e Voador Desvantagens: Terrestre Imunidades: Nenhuma',
        flying:
            'Vantagens: Inseto, Lutador e Planta Desvantagens: Elétrico, Gelo e Pedra Imunidades: Terrestre',
        ice:
            'Vantagens: Dragão, Voador, Planta e Terrestre Desvantagens: Lutador, Fogo, Pedra e Aço Imunidades: Nenhuma',
        rock:
            'Vantagens: Inseto, Fogo, Voador e Gelo Desvantagens: Lutador, Planta, Terrestre, Aço e Água Imunidades: Nenhuma',
        ground:
            'Vantagens: Elétrico, Fogo, Venenoso, Pedra e Aço Desvantagens: Gelo, Planta e Água Imunidades: Elétrico',
        steel:
            'Vantagens: Fada, Gelo e Pedra Desvantagens: Lutador, Fogo e Terrestre Imunidades: Venenoso',
        fighting:
            'Vantagens: Sombrio, Gelo, Normal, Pedra e Aço Desvantagens: Fada, Voador e Psíquico Imunidades: Nenhuma',
        dark:
            'Vantagens: Fantasma, Psíquico Desvantagens: Inseto, Fada e Lutador Imunidades: Psíquico',
        psychic:
            'Vantagens: Lutador, Venenoso Desvantagens: Inseto, Sombrio e Fantasma Imunidades: Nenhuma',
        poison:
            'Vantagens: Fada, Planta Desvantagens: Terrestre e Psíquico Imunidades: Nenhuma',
        bug:
            'Vantagens: Sombrio, Planta e Psíquico Desvantagens: Fogo, Voador e Pedra Imunidades: Nenhuma',
        fairy:
            'Vantagens: Sombrio, Dragão e Lutador Desvantagens: Aço e Venenoso Imunidades: Dragão',
        ghost:
            'Vantagens: Fantasma e Psíquico Desvantagens: Sombrio e Fantasma Imunidades: Normal e Lutador',
        dragon:
            "Vantagens: Dragão Desvantagens: Dragão, Fada e Gelo Imunidades: Nenhuma"
    }

    // gerar um numero random entre 1 e 905
    numberPokemon = Math.floor(Math.random()*905)

    // url padrão para pesquisa, caso nada for digitado
    urlApi = "https://pokeapi.co/api/v2/pokemon/"+numberPokemon
    //captura o valor digitado no input
    entrada = document.getElementById('entrada').value

    // caso não tenha digitado nada no input vai ser definido a URL de um pokemon aleatorio
    if(entrada != ''){
        urlApi = "https://pokeapi.co/api/v2/pokemon/"+entrada.toLowerCase();
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
            
            $('#card').attr('style','display:inline;')
            $('#titleCard').text('N° ID: ' + msg['id'] + ' | ' + msg['name'].toUpperCase())
            $('#imgCard').attr('src',imgPoke)
            //$('#imgCard').attr('src',msg['sprites']['other']['home']['front_default'])
            $('#typeOne').text(msg['types'][0]['type']['name'])
            $('#typeOne').attr('class','list-group-item '+ msg['types'][0]['type']['name'])
            if(msg['types'].length > 1 ){
                $('#typeTwo').text(msg['types'][1]['type']['name'])
                $('#typeTwo').attr('style','display: inherite;')
                $('#typeTwo').attr('class','list-group-item '+ msg['types'][1]['type']['name'])
                //$('#text-type').text(tipos[msg['types'][0]['type']['name']])
            }else{
                $('#typeTwo').text('')
                $('#typeTwo').attr('style','display: none;')
                //$('#text-type2').text(tipos[msg['types'][1]['type']['name']])
            }

            $('#statusOne').text(msg['stats'][5]['base_stat'])
            $('#statusTwo').text(msg['stats'][1]['base_stat'])
            $('#statusThree').text(msg['stats'][2]['base_stat'])
            //$('#vantagens2').text(tipos[msg['types'][0]['type']['name']])
            
        });

});