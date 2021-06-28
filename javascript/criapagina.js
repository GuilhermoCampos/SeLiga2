window.onload = () => {
    criaPagina(codigo);

    pesquisa.oninput = () => {
        buscaPesquisa(pesquisa.value)
        procuraClique();
    };
    dontTouch.onclick = () => {
        let coloridos = document.getElementsByClassName('rainbow');
        let t = 0;
    
        for(let i=0; i < coloridos.length; i++){
            coloridos[i].style.border = '2px solid black';
            coloridos[i].style.borderRadius = '15px';
        }
        
        var loop = setInterval(() => {
            rainbow();
            if( t == 3000){
                clearInterval(loop);
                alert('Tchau :D');
                window.location.href = 'detalhes.html';
            }
            t++;
        }, 10);
        
        var audio = new Audio('./javascript/dontouch.mp3');
        audio.play();
    
        alert('Falei pra n me tocar');
    }
    
    setInterval(()=> {
        let pesquisa = document.getElementById('pesquisa').getBoundingClientRect();
        let resultado = document.getElementById('resultadoPesquisa');
        let latitude = pesquisa["y"] + 38;
        let longitude = pesquisa["x"];
        let largura = pesquisa["width"];
        resultado.style.top = `${latitude}px`;
        resultado.style.left = `${longitude}px`;
        resultado.style.width = `${largura}px`
    }, 1);

    pesquisa.onfocus = () => {
        let pesquisa = document.getElementById('pesquisa').getBoundingClientRect();
        let resultado = document.getElementById('resultadoPesquisa');
        let latitude = pesquisa["y"] + 38;
        let longitude = pesquisa["x"];

        let largura = pesquisa["width"];
        resultado.style.top = `${latitude}px`;
        resultado.style.left = `${longitude}px`;
        resultado.style.width = `${largura}px`
    }

    genTodos.onclick = () => mudaGenero(0);
    genAcao.onclick = () => mudaGenero(1);
    genAventura.onclick = () => mudaGenero(2);
    genRomance.onclick = () => mudaGenero(3);
    genComedia.onclick = () => mudaGenero(4);
    genAnima.onclick = () => mudaGenero(5);
    genCrime.onclick = () => mudaGenero(6);
    genDoc.onclick = () => mudaGenero(7);
    genDrama.onclick = () => mudaGenero(8);
    genFamilia.onclick = () => mudaGenero(9);
    genFanta.onclick = () => mudaGenero(10);
    genHist.onclick = () => mudaGenero(11);
    genHorror.onclick = () => mudaGenero(12);
    genMusica.onclick = () => mudaGenero(13);
    genMisterio.onclick = () => mudaGenero(14);
    genSciFi.onclick = () => mudaGenero(15);
    genGuerra.onclick = () => mudaGenero(16);
    genVelho.onclick = () => mudaGenero(17);
    genSus.onclick = () => mudaGenero(18);
    
    carregaDestaques();
    
    maisDestaque.onclick = () => {
        carregaMaisDestaque();
        procuraClique();
    };


    procuraClique();
}

var codigo = localStorage.getItem('codigo');
function criaPagina(id){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${codigo}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText);
        let tituloFilme = resposta["title"];
        let subtitulo = resposta["tagline"];
        let bannerCaminho = resposta["poster_path"];
        let sinopse = resposta["overview"];
        let estrela = resposta["vote_average"]/2;
        let estrelaCheia = '★';
        let estrelaVazia = '☆';
        let lancamento = resposta["release_date"].replaceAll('-', '/');
        let popularidade = resposta["popularity"];
        let nota = parseInt(estrela);
        let votos = resposta["vote_count"];
        let orcamento = resposta["budget"];
        let receita = resposta["revenue"];
        let status = resposta["status"];
        let produtoras = resposta["production_companies"];
        let paisProduzido = resposta["production_countries"];
        let tmdbId = resposta["id"];
        let imdbId = resposta["imdb_id"];
        let site = resposta["homepage"];
        let generos = resposta["genres"];
        let adulto = resposta["adult"];
        let colecao = resposta["belongs_to_collection"];
        let tempo = resposta["runtime"];

        let hora = '';
        let minuto = '';

        if(parseInt(tempo/60) == 1){
            hora = `${parseInt(tempo/60)} hora`;
        }
        else if(parseInt(tempo/60) > 1){
            hora = `${parseInt(tempo/60)} horas`; 
        }
        if(tempo%60 == 1){
            minuto = `${tempo%60} minuto`;
        }
        else if(tempo%60 > 1){
            minuto = `${tempo%60} minutos`; 
        }
        if(orcamento == 0){
            orcamento = 'Indisponível';
        }
        else{
            orcamento = `$${parseFloat(orcamento)}.00`;
        }
        if(receita == 0){
            receita = 'Indisponível';
        }
        else{
            receita = `$${parseFloat(receita)}.00`;
        }
        if(site != ''){
            site = `Site:  <a style="color:white;" href="${site}">${site}</a>`; 
        }
        if (adulto){
            adulto = `Classificação: <span style="color:red;">+18</span>`;
        }
        else{
            adulto = '';
        }
        if (status == 'Released'){
            status = '<span style="color: green;">Lançado</span>';
        }
        else{
            status = '<span style="color: red;">Não Lançado</span>'
        }

        // estrelaCheia.repeat(nota)}${estrelaVazia.repeat(5-nota)


        console.log("estepora", resposta)

        let titulo = document.getElementById('tituloFilme');
        let subTitulo = document.getElementById('subTitulo');
        let banner = document.getElementById('bannerFilme');
        let sinopseFilme = document.getElementById('sinopseFilme');
        let dataLancamento = document.getElementById('lancamento');
        let statusFilme = document.getElementById('status');
        let avaliacao = document.getElementById('avaliacao');
        let quantVotos = document.getElementById('quantVotos');
        let popularidadeFilme = document.getElementById('popularidade');
        let orcamentoFilme = document.getElementById('orcamento');
        let receitaFilme = document.getElementById('receita');
        let ducacao = document.getElementById('duracao');
        let adultoFilme = document.getElementById('adulto');
        let linkFilme = document.getElementById('linkFilme');
        let linkImdb = document.getElementById('imdb');
        let linkTmdb = document.getElementById('tmdb');
        let generosFilme = document.getElementById('generos');
        let produtorasFilme = document.getElementById('produtoras');
        let paisProd = document.getElementById('paises');
    
        


        titulo.innerHTML = `${tituloFilme}`;
        subTitulo.innerHTML = `${subtitulo}`;
        banner.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${bannerCaminho}" alt="" style="width:100%; border: 5px solid black; border-radius: 15px;">`;
        
        sinopseFilme.innerHTML = `${sinopse}`;

        dataLancamento.innerHTML = `${lancamento}`;
        statusFilme.innerHTML = `${status}`;
        avaliacao.innerHTML = `<span class="estrelas"> ${estrelaCheia.repeat(nota)}${estrelaVazia.repeat(5-nota)} <span class="notaAvaliacao"> ${estrela}</span></span>`;
        quantVotos.innerHTML = ` ${votos}`;
        popularidadeFilme.innerHTML = ` ${popularidade}`;
        orcamentoFilme.innerHTML = `${orcamento}`;
        receitaFilme.innerHTML = `${receita}`;
        ducacao.innerHTML = `${hora} ${minuto}`;
        adultoFilme.innerHTML = `${adulto}`;

        linkFilme.innerHTML = `${site}`
        linkImdb.innerHTML = `<a style="color:white;" href="http://www.imdb.com/title/${imdbId}">www.imdb.com/title/${imdbId}</a>`;
        linkTmdb.innerHTML = `<a style="color:white;" href="http://www.themoviedb.org/movie/${tmdbId}">www.themoviedb.org/movie/${tmdbId}</a>`;
        
    
        for(i=0; i<generos.length;i++){
            generosFilme.innerHTML 
            += `<span style="padding: 1px 5px; background: rgb(42, 42, 43); border: 1px solid black; border-radius: 15px;">${generos[i]["name"]}</span> `;
            console.log("oi")
        }

        for(i=0; i<produtoras.length;i++){
            produtorasFilme.innerHTML 
            = `${produtoras[i]["name"]}`;
        }

        for(i=0; i<paisProduzido.length;i++){
            paisProd.innerHTML 
            = `${paisProduzido[i]["name"]}`;
        }

        xhr.open('GET', `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
        xhr.onload = ()=> {
            console.log("pega video principal")
                console.log(xhr.response, "resposta trailers")
                let chave = JSON.parse(xhr.response)["results"];
                console.log(chave);
                if (chave.length != 0){
                    let addItem = document.getElementById("trailers");
                    addItem.innerHTML += `<h1>Trailers</h1>`;
                }
                for (i=0; i<chave.length; i++){
                    let addItem = document.getElementById("trailers");
                    addItem.innerHTML += `
                    <div style="min-height: 584px; width: 80%; heigth: 90%; margin: 20px auto; border:5px solid rgb(42, 42, 43); border-radius: 15px; background-color: rgb(42, 42, 43); padding:5px;">
                        <iframe width="100%" height="100%" style="border-radius: 15px;" src="https://www.youtube-nocookie.com/embed/${chave[i]["key"]}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>`
                    
                }
        };
        xhr.onerror = ()=> {
            alert("QUEBRAAAA");
        }
        xhr.send();
    };
    xhr.send()
}

