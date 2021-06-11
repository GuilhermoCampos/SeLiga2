/*
var opened = window.open("");
opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");

https://api.themoviedb.org/3/movie/${id}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR

https://image.tmdb.org/t/p/w300/

*/
var codigo = localStorage.getItem('codigo');
function criaPagina(id){
    
    //localStorage.clear();
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${codigo}?api_key=e1258f69d2028209abb4b199f1cb534c&language=pt-BR`);
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText);
        let tituloFilme = resposta["title"];
        let bannerCaminho = resposta["poster_path"]
        let sinopse = resposta["overview"];
        console.log("estepora", resposta)

        let titulo = document.getElementById('tituloFilme');
        titulo.innerHTML = `${tituloFilme}`;
        let banner = document.getElementById('bannerFilme');
        banner.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${bannerCaminho}" alt="" style="width:100%;">`;
        let sinopseFilme = document.getElementById('sinopseFilme');
        sinopseFilme.innerHTML = `${sinopse}`;
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
    maisDestaque.onclick = carregaMaisDestaque;


    setTimeout(()=>{
        let itemCarrosel = document.getElementsByClassName('carousel-item');
        itemCarrosel[0].classList.add('active');
    }, 1000);

    procuraClique();
}