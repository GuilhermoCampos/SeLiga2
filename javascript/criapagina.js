/*
var opened = window.open("");
opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");

https://api.themoviedb.org/3/movie/${id}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR

https://image.tmdb.org/t/p/w300/

https://image.tmdb.org/t/p/original/wdrCwmRnLFJhEoH8GSfymY85KHT.svg

*/
/*
xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
xhr.onload = ()=> {
    console.log("pega video principal")
    setTimeout(()=>{
        let lista = ['pera', 'mamão', 'limão']
        let chave = JSON.parse(xhr.response)["results"][0]["key"];
        console.log(chave, i);
        let addItem = document.getElementById("addItem");
        addItem.innerHTML += `
        <div codigo="${id}" class="carousel-item  ${ativo}">
            <div class="row lancamento-conteudo">
                <div class="col-sm-12 col-md-6 trailer">
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${chave}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>`;
    }, 25);
    i++;
    if(i == 20){
        clearInterval(loop);
    }
};
xhr.onerror = ()=> {
    alert("QUEBRAAAA");
}
xhr.send();



www.imdb.com/title/
www.themoviedb.org/movie/

https://api.themoviedb.org/3/collection/837007?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR
*/



var codigo = localStorage.getItem('codigo');
function criaPagina(id){
    
    //localStorage.clear();
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${codigo}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText);
        let tituloFilme = resposta["title"];
        let subtitulo = resposta["tagline"];
        let bannerCaminho = resposta["poster_path"];
        let sinopse = resposta["overview"];
        let estrela = resposta["vote_average"]/2;
        let lancamento = resposta["release_date"].replace('-', '/');
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

        // estrelaCheia.repeat(nota)}${estrelaVazia.repeat(5-nota)


        console.log("estepora", resposta)

        let titulo = document.getElementById('tituloFilme');
        let subTitulo = document.getElementById('subTitulo');
        let banner = document.getElementById('bannerFilme');
        let sinopseFilme = document.getElementById('sinopseFilme');
        titulo.innerHTML = `${tituloFilme}`;
        subTitulo.innerHTML = `${subtitulo}`;
        banner.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${bannerCaminho}" alt="" style="width:100%;">`;
        
        sinopseFilme.innerHTML = `${sinopse}`;


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









window.onload = () => {
    criaPagina(codigo);

    pesquisa.oninput = () => {
        buscaPesquisa(pesquisa.value)
        procuraClique();
    };
    dontTouch.onclick = numetoca
    
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
    // pesquisa.onblur = () => {
    //     let escreve = document.getElementById('resultadoPesquisa');
    //     escreve.innerHTML = '';
    // };


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