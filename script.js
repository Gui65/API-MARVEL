const timestamp = '1654195969468';
const apiKey = 'd464c2bd5f87f0a1bcdb8a88f9e5844a';
const md5 = '7e8325ef0350416dc89287a75983852f';
let offset = 0;

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=15&offset=${offset}`
).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois');

    jsonParsed.data.results.forEach(element => {

        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
        const nameHero = element.name;

        createDivHero(srcImage, nameHero, divHero);
    });


    console.log(jsonParsed);
    console.log(offset);


});

function acrescentar() {
    offset += 15;
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=15&offset=${offset}`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
        const divHero = document.querySelector('#herois');

        jsonParsed.data.results.forEach(element => {

            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension;
            const nameHero = element.name;

            createDivHero(srcImage, nameHero, divHero);
        });


        console.log(jsonParsed);
        console.log(offset);


    });
}

function createDivHero(srcImage, nameHero, divToAppend) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const textName = document.createElement('p');
    const img = document.createElement('img');

    textName.textContent = nameHero;
    img.src = srcImage

    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);
    divPai.classList.add("personagem");
    divPai.classList.add("col");
    divFilho.classList.add("text-center")
    
}


