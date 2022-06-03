const timestamp = '1654195969468';
const apiKey = 'd464c2bd5f87f0a1bcdb8a88f9e5844a';
const md5 = '7e8325ef0350416dc89287a75983852f';
let offset = 0;

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=12&offset=${offset}`
).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois');

    jsonParsed.data.results.forEach(element => {

        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
        const nameHero = element.name;
        const idHero = element.id;

        createDivHero(srcImage, nameHero, divHero, idHero);
    });


    console.log(jsonParsed);
    console.log(offset);


});

function acrescentar() {
    offset += 12;
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=12&offset=${offset}`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
        const divHero = document.querySelector('#herois');

        jsonParsed.data.results.forEach(element => {

            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
            const nameHero = element.name;
            const idHero = element.id;

            createDivHero(srcImage, nameHero, divHero, idHero);
        });


        console.log(jsonParsed);
        console.log(offset);


    });
}

function createDivHero(srcImage, nameHero, divToAppend, idHero) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const textName = document.createElement('h5');
    const img = document.createElement('img');

    textName.textContent = nameHero;
    img.src = srcImage

    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);
    divPai.classList.add("personagem");
    divPai.classList.add("col");
    img.addEventListener("auxclick", detalharPersonagem(idHero))
    divFilho.classList.add("col-12");
    divFilho.classList.add("text-center")
    img.classList.add("rounded")
      
}

function detalharPersonagem(personagem){
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=12&offset=${offset}`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
            jsonParsed.data.results.forEach(element => {
                if(element.id === personagem){
                    console.log(element.name);
                }else{
                    console.log('teste')
                }
            });
    })
}
