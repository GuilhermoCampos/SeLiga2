/*
https://www.themoviedb.org/documentation/api/discover
https://www.themoviedb.org/settings/api
https://developers.themoviedb.org/3/genres/get-movie-list

https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt
https://api.themoviedb.org/3/ /movie/337404/images?api_key=e1258f69d2028209abb4b199f1cb534c
https://api.themoviedb.org/3/movie/337404/images?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt
https://api.themoviedb.org/3/movie/337404?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt&region=BR
https://api.themoviedb.org/3/movie/337404/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR
https://api.themoviedb.org/3/movie/337404/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR
https://api.themoviedb.org/3/movie/637649/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR

https://www.youtube.com/watch?v=bpHtxx_wmqw
https://gist.github.com/prof3ssorSt3v3/bd984b862b71ebbe0a65aee4f2e6746d
https://developers.themoviedb.org/3/getting-started/regions

https://gist.github.com/prof3ssorSt3v3/d7946ea634448c501dd8287cbe3f2c0b

https://image.tmdb.org/t/p/w500/A0knvX7rlwTyZSKj8H5NiARb45.jpg


tmdb apikey e1258f69d2028209abb4b199f1cb534c

https://api.themoviedb.org/3/discover/movie?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR&region=BR&include_adult=true&page=1&with_genres=878,27

https://api.themoviedb.org/3/genre/movie/list?api_key=e1258f69d2028209abb4b199f1cb534c&language=en-US



newsapi apikey 8ec3aef178a94777be5e7b29b785f87a

https://newsapi.org/v2/everything?q=movies&language=pt&apiKey=8ec3aef178a94777be5e7b29b785f87a

https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt
*/

/* Modelo Destaques
<div class="col-sm-12 col-md-6 col-lg-3">
    <a href="#"><img src="" alt=""></a>
</div>
*/

/* modelo carrosell item
<div class="carousel-item active">
    <div class="row lancamento-conteudo">
        <div class="col-sm-12 col-md-6 trailer">
            <iframe width="100%" height="584px" src="https://www.youtube.com/embed/Yh-XpUlDjJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-sm-11 col-md-6 lancamento-text rainbow">
            <div>
                <h2>Raya E O Último Dragão</h2>  
                <div class="sinopse-mobile">
                    <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Sinopse
                    </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                    <div class="card card-body usuarios bg-dark">
                        <strong>Sinopse:</strong> Humanos e dragões viviam juntos em harmonia. Mas quando uma força maligna ameaçou a terra, os dragões se sacrificaram para salvar a humanidade. Agora, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário dragão para restaurar sua terra .
                    </div>
                    </div>           
                </div>    
                <div class="sinopse-pc">                       
                <strong>Sinopse:</strong> Há muito tempo, no mundo de fantasia de Kumandra, humanos e dragões viviam juntos em harmonia. Mas quando uma força maligna ameaçou a terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra despedaçada e seu povo dividido. No entanto, ao longo de sua jornada, ela aprenderá que será necessário mais do que um dragão para salvar o mundo – também será necessário confiança e trabalho em equipe. Dos diretores Don Hall e Carlos López Estrada, codiretores Paul Briggs e John Ripa, produtores Osnat Shurer e Peter Del Vecho, e apresentando as vozes de Kelly Marie Tran como Raya e Awkwafina como o último dragão Sisu, da Walt Disney Animation Studios "Raya e O Último Dragão".
                </div>
                <br><strong>Diretores: </strong>Carlos López Estrada, Don Hall<strong>
                <br>Roteiro:</strong> Adele Lim, Qui Nguyen
                <br><strong>Estreia: </strong> 04/03/2021
                <br><strong>Elenco:</strong>
                Awkwafina | Kelly Marie Tran | Gemma Chan | Alan Tudyk 
                <br><Strong>Avaliação:</Strong>
                <span class="estrelas">★★★★☆</span>
            </div>
        </div>
    </div>
</div>
*/


/*
function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
*/

/* listen class

teste.getAttribute("codigo")

var oficinas = document.getElementsByClassName('oficinas');

    for (let i=0; i<oficinas.length; i++){
        oficinas[i].onclick = (objeto) => {

            console.log('teste');

            for(let i=0; i<oficinas.length; i++){
                oficinas[i].children[0].children[2].style.display = 'none';
            }

            let alterna = oficinas[i].children[0].children[2];
            alterna.style.display = 'block';
            console.log('expande');
        };
    }
*/

/*

let quebrado = 4.7

let conserta = parseInt(quebrado)

conserta
4

let teste = '*'

teste.repeat(5)
"*****"
*/


/*
async function carregaPrincipal(){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt');
    xhr.send();
    console.log("pega principal")
    setTimeout(()=>{
        if(xhr.status != 200){
            alert("Falha ao Carregar Conteudo Principal, Por favor recarregue");
        }

        let item = JSON.parse(xhr.responseText)["results"];
        let i = 0;
        var loop = setInterval(()=>{

            let ativo = '';
            if (i == 1){
                ativo = 'active';
            }

            let id = item[i]["id"];
            let titulo = item[i]["title"];
            let sinopse = item[i]["overview"];
            if (sinopse.length == 0){
                sinopse = 'Sinopse não encontrada'
            }

            xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
            xhr.onload = ()=> {

            };
            xhr.onerror = ()=> {
                alert("QUEBRAAAA");
            }
            xhr.send();
            console.log("pega video principal")
            setTimeout(()=>{
                let chave = JSON.parse(xhr.response)["results"][0]["key"];
                let addItem = document.getElementById("addItem");
                addItem.innerHTML += `
                <div id="${id}" class="carousel-item ${ativo}">
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
                                <br><strong>Diretores: </strong>Carlos López Estrada, Don Hall<strong>
                                <br>Roteiro:</strong> Adele Lim, Qui Nguyen
                                <br><strong>Estreia: </strong> 04/03/2021
                                <br><strong>Elenco:</strong>
                                Awkwafina | Kelly Marie Tran | Gemma Chan | Alan Tudyk 
                                <br><Strong>Avaliação:</Strong>
                                <span class="estrelas">★★★★☆</span>
                            </div>
                        </div>
                    </div>
                </div>`;
                console.log("imprime principal")
            }, 25);
            i++;
            if(i == 12){
                clearInterval(loop);
                console.log("para setInterval")
            }
            principalCarregou = true;
        }, 150);
        
    },10);

https://api.themoviedb.org/3/search/movie?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR&query=Gente+Grande&page=1&include_adult=true&region=BR

str.replace()
}
*/
/*
        let botoes = document.getElementsByClassName('botaoNavegacao')
        

        for(i=0; i<botoes.length; i++){
            botoes[i].style.display = 'none';
        }
        console.log("Focou no pesquisa");
    };

    pesquisa.onblur = () => {
        let botoes = document.getElementsByClassName('botaoNavegacao')

        for(i=0; i<botoes.length; i++){
            botoes[i].style.display = 'inline-block';
        }
        console.log("Focou no pesquisa");
    };

    pesquisa.onfocusin = () => {
        let botoes = document.getElementsByClassName('botaoNavegacao')

        for(i=0; i<botoes.length; i++){
            botoes[i].style.display = 'none';
        }
        console.log("Focou no pesquisa");
    };

    pesquisa.onfocusout = () => {
        let botoes = document.getElementsByClassName('botaoNavegacao')
        for(i=0; i<botoes.length; i++){
            botoes[i].style.display = 'inline-block';
        }
        console.log("Saiu da pesquisa");
    };
*/
/*
let tamanho = document.getElementById('pesquisa').getBoundingClientRect()

 https://api.themoviedb.org/3/movie/40096?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR


<br><strong>Categorias: </strong>${lista.join('')}<strong>






*/
/* Testes e Informações Acima Não Mecha */

var tmdbKey = 'e1258f69d2028209abb4b199f1cb534c';
var newsapiKey = '8ec3aef178a94777be5e7b29b785f87a';
var parouEm = 0; 
var poster;
var temporizador = 0;

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
            <div codigo=${resposta[i]["id"]} class="detalhesFilme tituloPesquisa">${resposta[i]["title"]}</div>
            `;
        }
    
    };
    xhr.send();
}

function carregaPrincipal(){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt');
    xhr.onload = () => {
        if(xhr.status != 200){
            alert("Falha ao Carregar Conteudo Principal, Por favor recarregue");
        }

        let item = JSON.parse(xhr.responseText)["results"];
        console.log(item);
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
            console.log(id, i);
            let titulo = item[i]["title"];
            let sinopse = item[i]["overview"];
            let estrela = item[i]["vote_average"]/2;
            let lancamento = item[i]["release_date"].replaceAll('-', '/');
            let popularidade = item[i]["popularity"];
            let nota = parseInt(estrela);
            let votos = item[i]["vote_count"];
            console.log(estrela)
            
            if (sinopse.length == 0){
                sinopse = 'Sinopse não encontrada'
            }

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
                    console.log("imprime principal")
                }, 25);
                i++;
                if(i == 20){
                    clearInterval(loop);
                    console.log("para setInterval")
                }
            };
            xhr.onerror = ()=> {
                alert("QUEBRAAAA");
            }
            xhr.send();
        }, 100);
    };
    xhr.send();
    console.log("pega principal")
    
}

function carregaDestaques(genero=''){
    parouEm = 0;
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR&region=BR&include_adult=true&page=1&with_genres=${genero}`);
    xhr.onload = () => {
        setTimeout(()=>{
            poster = JSON.parse(xhr.responseText)["results"];
            console.log("print poster", poster);
            console.log("Carrega genero");
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
                console.log("imprime poster");

                parouEm++;
            }
            
        },200);
    };
    xhr.send();
    console.log("pega genero");

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
        console.log("imprime poster");

        parouEm++;
    }
    console.log("Carregou ", parouEm, " posters");
}

function mudaGenero(gen=0){
    console.log("Rodou sa porr", gen)
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
            console.log("comédia ta funcionado ué");
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
    
    for(let i=0; i < coloridos.length; i++){
        coloridos[i].style.border = '2px solid black';
        coloridos[i].style.borderRadius = '15px';
    }

    var loop = setInterval(() => {
        rainbow();
        /*setTimeout(()=>{
            clearInterval(loop);
        }, 200);*/
        if(temporizador == 1){
            clearInterval(loop);
            console.log("Pare o Loop")
        }
    }, 2);

    setTimeout(()=>{
        temporizador++;
        console.log("temporizador está em ", temporizador);
    }, 30000);

    
    setTimeout(()=>{
    if(temporizador == 1){
        clearInterval(loop);
        console.log("Pare o Loop")
    }}, 30000);

    //tituloLancamento.onclick = clearInterval(loop);
    //clearInterval();
    
    var audio = new Audio('./javascript/dontouch.mp3');
    audio.play();

    console.log('foi rodado o secret.js');
    alert('Falei pra n me tocar');
}

/*
function pegaCategoria(objeto){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR');
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText)["genres"];
        console.log(resposta);
        let lista = [];
        let teste = [14, 36, 27]
        for (i=0; i<teste.length;i++){
            for(j=0; j<resposta.length;j++){
                if(resposta[j]["id"] == teste[i]){
                    lista.push(`<b>${resposta[j]["name"]}</b>`);
                }
            }
        }
        console.log(lista);
        return lista;
    };
    xhr.send();


function procuraArray(array, valor){
    for (i=0; i<array.length;i++){
        if(array[i]["id"] == valor){
            return array[i];
        }
    return 0;
    }
}

}
*/

function procuraClique(){
    setTimeout(()=>{
        var detalhesFilme = document.getElementsByClassName('detalhesFilme');
        for (i=0; i<detalhesFilme.length; i++){
            detalhesFilme[i].addEventListener('click', (teste) => {
                let codigo = teste.target.getAttribute('codigo');
                localStorage.setItem('codigo', codigo);
                window.location.href = 'detalhes.html';
            });
    }
    }, 100);
    setTimeout(()=>{
        var detalhesFilme = document.getElementsByClassName('detalhesFilme');
        for (i=0; i<detalhesFilme.length; i++){
            detalhesFilme[i].addEventListener('click', (teste) => {
                let codigo = teste.target.getAttribute('codigo');
                localStorage.setItem('codigo', codigo);
                window.location.href = 'detalhes.html';
                console.log(codigo)
        });
    }
    }, 5000);
}

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

    carregaPrincipal();

    setTimeout(()=>{
        let itemCarrosel = document.getElementsByClassName('carousel-item');
        itemCarrosel[0].classList.add('active');
    }, 1000);

    procuraClique();

//    setTimeout(()=>{
//        console.log(pegaCategoria());
//    }, 5000);
    
};