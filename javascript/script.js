var tmdbKey = 'e1258f69d2028209abb4b199f1cb534c';
var newsapiKey = '8ec3aef178a94777be5e7b29b785f87a';
var parouEm = 0; 
var poster;
var temporizador = 0;

window.onload = () => {
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

    carregaPrincipal();

    setTimeout(()=>{
        let itemCarrosel = document.getElementsByClassName('carousel-item');
        itemCarrosel[0].classList.add('active');
    }, 1000);

    procuraClique();
    
};

function buscaPesquisa(texto){
    texto = texto.replaceAll(' ', '+');

    xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR&query=${texto}&page=1&include_adult=true&region=BR`);
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText)["results"];
        
        let escreve = document.getElementById('resultadoPesquisa');
        escreve.innerHTML = '';
        for (i=0; i<resposta.length; i++){
            escreve.innerHTML +=`
            <div codigo="${resposta[i]["id"]}" class="detalhesFilme tituloPesquisa">${resposta[i]["title"]}</div>
            `;
        }
    
    };
    xhr.send();
}

function carregaPrincipal(){
    let xhr = new XMLHttpRequest;
    let j = 0;
    xhr.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt');
    xhr.onload = () => {
        if(xhr.status != 200){
            alert("Falha ao Carregar Conteudo Principal, Por favor recarregue");
        }

        let item = JSON.parse(xhr.responseText)["results"];
        let i = 0;

        if (i==0){
            let addItem = document.getElementById("addItem");
                    addItem.innerHTML = '';
        }
        var loop = setInterval(()=>{
            let estrelaCheia = '★';
            let estrelaVazia = '☆';

            let ativo = '';
            if (i == 0){
                ativo = 'active';
            }

            let id = item[i]["id"];
            let titulo = item[i]["title"];
            let sinopse = item[i]["overview"];
            let estrela = item[i]["vote_average"]/2;
            let lancamento = item[i]["release_date"].replaceAll('-', '/');
            let popularidade = item[i]["popularity"];
            let nota = parseInt(estrela);
            let votos = item[i]["vote_count"];

            if (sinopse.length == 0){
                sinopse = 'Sinopse não encontrada'
            }

            xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
            xhr.onload = ()=> {
                setTimeout(()=>{
                    try{
                    let chave = JSON.parse(xhr.response)["results"][0]["key"];
                    let addItem = document.getElementById("addItem");
                    addItem.innerHTML += `
                    <div codigo="${id}" class="carousel-item  ${ativo}">
                        <div class="row lancamento-conteudo">
                            <div class="col-sm-12 col-md-6 trailer">
                                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${chave}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="col-sm-11 col-md-6 lancamento-text rainbow">
                                <div>
                                    <h2>${titulo}</h2>      
                                    <div class="sinopse">                       
                                    <strong>Sinopse:</strong>
                                    ${sinopse}
                                    </div>
                                    <br><strong>Popularidade no TMDB: </strong>${popularidade}<strong>
                                    <br><strong>Estreia: </strong> ${lancamento}
                                    <br><Strong>Avaliação:</Strong>
                                    <span class="estrelas">${estrelaCheia.repeat(nota)}${estrelaVazia.repeat(5-nota)} <span class="notaAvaliacao">${estrela}</span></span>
                                    <br><Strong>votos: </Strong<span class="estrelas">${votos}</span>
                                    <br><button codigo="${id}" type="button" class="btn btn-dark detalhesFilme">Mais Info</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    }
                    catch{
                        console.log('Não encontrou a chave');
                    }
                }, 50);
                i++;
                if(i == 20){
                    clearInterval(loop);
                }
            };
            xhr.onerror = ()=> {
            }
            xhr.send();
            j++;
            if(j == 20){
                clearInterval(loop);
            }
        }, 100);
    };
    xhr.send();
    
}

function carregaDestaques(genero=''){
    parouEm = 0;
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR&region=BR&include_adult=true&page=1&with_genres=${genero}`);
    xhr.onload = () => {
        setTimeout(()=>{
            poster = JSON.parse(xhr.responseText)["results"];
            for(let i=0; i<4; i++){

                let mobile = '';
                if(i<2){
                    mobile = 'mobile-hide medium-hide';
                }

                let id = poster[i]["id"];
                let title = poster[i]["title"];
                let foto = poster[i]["poster_path"];

                let addPoster = document.getElementById("addPoster");

                if (parouEm==0){
                    addPoster.innerHTML = `
                    <div codigo="${id}" class="col-sm-12 col-md-6 col-lg-3 detalhesFilme ${mobile}">
                        <div codigo="${id}"><img codigo="${id}" src="https://image.tmdb.org/t/p/w300/${foto}" alt=""><h6 codigo="${id}">${title}</h6></div>
                    </div>`;
                }
                else{
                    addPoster.innerHTML += `
                    <div codigo="${id}" class="col-sm-12 col-md-6 col-lg-3 detalhesFilme ${mobile}">
                        <div codigo="${id}"><img codigo="${id}" src="https://image.tmdb.org/t/p/w300/${foto}" alt=""><h6 codigo="${id}">${title}</h6></div>
                    </div>`;
                }


                parouEm++;
            }
            
        },200);
    };
    xhr.send();

}

function carregaMaisDestaque(){
    let continua = parouEm;
    let pare = parouEm+3;

    if(parouEm==20){
        alert("Limite de Carregamento");
    }

    for(let i=continua; i<(pare+1); i++){

        let mobile = '';
        if(i%2==0){
            mobile = 'mobile-hide medium-hide';
        }

        let id = poster[i]["id"];
        let title = poster[i]["title"];
        let foto = poster[i]["poster_path"];

        let addPoster = document.getElementById("addPoster");
        addPoster.innerHTML += `
        <div codigo="${id}" class="col-sm-12 col-md-6 col-lg-3 detalhesFilme ${mobile}">
            <div codigo="${id}" ><img codigo="${id}" src="https://image.tmdb.org/t/p/w300/${foto}" alt=""><h6 codigo="${id}">${title}</h6></div>
        </div>`;

        parouEm++;
    }
}

function mudaGenero(gen=0){
    let visor = document.getElementById('catGen');
    let cat
    let idCat = '';

    switch (gen){
        case 0:
            cat="TODOS";
            idCat = '';
            break;
        case 1:
            cat="Ação";
            idCat = '28';
            break;
        case 2:
            cat="Aventura";
            idCat = '12';
            break;
        case 3:
            cat="Romance";
            idCat = '10749';
            break;
        case 4:
            cat="Comédia";
            idCat = '35';
            break;
        case 5:
            cat="Animação";
            idCat = '16';
            break;
        case 6:
            cat="Crime";
            idCat = '80';
            break;
        case 7:
            cat="Documentário";
            idCat = '99';
            break;
        case 8:
            cat="Drama";
            idCat = '18';
            break;
        case 9:
            cat="Familia";
            idCat = '10751';
            break;
        case 10:
            cat="Fantasia";
            idCat = '14';
            break;
        case 11:
            cat="História";
            idCat = '36';
            break;
        case 12:
            cat="Horror";
            idCat = '27';
            break;
        case 13:
            cat="Musical";
            idCat = '10402';
            break;
        case 14:
            cat="Mistério";
            idCat = '9648';
            break;
        case 15:
            cat="Ficção Ciêntifica";
            idCat = '878';
            break;
        case 16:
            cat="Guerra";
            idCat = '10752';
            break;
        case 17:
            cat="Velho Oeste";
            idCat = '37';
            break;
        case 18:
            cat="Suspense";
            idCat = '53';
            break;
    }
    visor.innerHTML = `Categoria: ${cat}`;
    carregaDestaques(idCat);
    procuraClique();
}

function numetoca(){
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
            window.location.href = 'index.html';
        }
        t++;
    }, 10);

    
    var audio = new Audio('./javascript/dontouch.mp3');
    audio.play();

    alert('Falei pra n me tocar');
}

function procuraClique(){
    setTimeout(()=>{
        var detalhesFilme = document.getElementsByClassName('detalhesFilme');
        for (i=0; i<detalhesFilme.length; i++){
            detalhesFilme[i].addEventListener('click', (teste) => {
              let codigo = objeto.target.getAttribute('codigo');
                let tipo = objeto.target.getAttribute('tipo');
                localStorage.setItem('codigo', codigo);
                localStorage.setItem('tipo', tipo);
                window.location.href = 'detalhes.html';
            });
    }
    }, 100);
    setTimeout(()=>{
        var detalhesFilme = document.getElementsByClassName('detalhesFilme');
        for (i=0; i<detalhesFilme.length; i++){
            detalhesFilme[i].addEventListener('click', (teste) => {
                let codigo = objeto.target.getAttribute('codigo');
                let tipo = objeto.target.getAttribute('tipo');
                localStorage.setItem('codigo', codigo);
                localStorage.setItem('tipo', tipo);
                window.location.href = 'detalhes.html';
        });
    }
    }, 1000);
    setTimeout(()=>{
        var detalhesFilme = document.getElementsByClassName('detalhesFilme');
        for (i=0; i<detalhesFilme.length; i++){
            detalhesFilme[i].addEventListener('click', (objeto) => {
                let codigo = objeto.target.getAttribute('codigo');
                let tipo = objeto.target.getAttribute('tipo');
                localStorage.setItem('codigo', codigo);
                localStorage.setItem('tipo', tipo);
                window.location.href = 'detalhes.html';
        });
    }
    }, 5000);
}

