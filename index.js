const api_key = 'api_key=2ef4dc90791fa66629d3fa37a5ce6e86'
const language = '&language=pt-BR'
const api_imagem = 'https://image.tmdb.org/t/p/w500/' //busca as imagens para o card
const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&' + api_key + language;
const procurar = 'https://api.themoviedb.org/3/search/movie?' + api_key + language; //busca os filmes de acordo com a const filme

const main = document.getElementById("main");
const form =document.getElementById("form");
const filme = document.getElementById("filme")

PegaFilmes(api_url)

// function para transformar a url
function PegaFilmes(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            Preencher(data.results)
        })
}

//Substituir os dados do html pelos dados da TMDB
function Preencher(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const{title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = ` 
         <img src="${api_imagem + poster_path}"
        alt="${title}">

    <div class="movie_info">
        <h3>${title}</h3>
        <span class="">Nota: ${vote_average}</span>
    </div>


    <div class="overview">
    <h5>Descrição</h5>
    ${overview}
    </div>
</div>`


main.appendChild(movieEl)
    });
}

//Function para buscar de acordo com o input
function Pesquisar(){
    const procuraItem = filme.value;
    if(procuraItem){
        PegaFilmes(procurar + '&query=' + procuraItem)
    }

};
