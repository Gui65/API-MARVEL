
function detalharPersonagem(idHero){
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
        const detalharPersonagem = document.querySelector('#detalharPersonagem');

        jsonParsed.data.results.forEach(element => {
            if(element.id === idHero){
                const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
                const nameHero = element.name;
                const seriesHero = element.series.items.name;
                const storiesHero = element.stories.items.name;
                createDivHero(srcImage, nameHero, seriesHero, storiesHero, detalharPersonagem);
                window.open('detalharPersonagem.html', 'detalharPersonagem');
            }
            
            
        });

    });
}

function createDivDetalhar(srcImage, nameHero, seriesHero, storiesHero,  divToAppend) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const textName = document.createElement('h5');
    const textSeries = document.createElement('h5');
    const textStories = document.createElement('h5');
    const img = document.createElement('img');

    textName.textContent = nameHero;
    textSeries.textContent = seriesHero;
    textStories.textContent = storiesHero;
    img.src = srcImage;

    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);
    divPai.classList.add("col");
    divFilho.classList.add("col-12");
    divFilho.classList.add("text-center")
    img.classList.add("rounded")
}
