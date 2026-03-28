import { animeData } from "./data.js";

const container = document.getElementById('anime_container')
const pesquisa = document.getElementById('pesquisa')

animeData.forEach(anime => {

    const novoAnime = document.createElement('div')
    novoAnime.classList.add('cards')

    novoAnime.innerHTML = `<img class="image_card" loading="lazy" src="${anime.imagem}" alt=""> 
    
        <ul class="infor_anime">
            <li class="titulo"><i class="fa-solid fa-circle-user"></i> ${anime.titulo} </li> 
            <li class="episodios"><i class="fa-solid fa-circle-info"></i> ${anime.episodios} Episódios </li> 
            <li class="data"><i class="fa-solid fa-calendar"></i> ${anime.ano} </li> 
        </ul>`

    container.appendChild(novoAnime)
})


pesquisa.addEventListener('input', () => {
    const termoPesquisa = pesquisa.value.toLowerCase();
    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
        const titulo = card.querySelector('.titulo').textContent.toLowerCase();
        if (titulo.includes(termoPesquisa)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


