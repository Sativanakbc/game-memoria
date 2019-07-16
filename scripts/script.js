function embaralha(lista) {
    let valorTemp;
    let indiceAleat;

    for (let i = lista.length - 1; i !== 0; i--) {
        indiceAleat = Math.floor(Math.random() * i);

        valorTemp = lista[i];
        lista[i] = lista[indiceAleat];
        lista[indiceAleat] = valorTemp;
    }
    return lista
}

let cartas = document.querySelectorAll('.carta');
let cartaVirada;
let imagesSaves = ["ApuNaha.png", "BartSimpson.png", "HomerSimpson.png", "LisaSimpson.png", "MargeSimpson.png", "MilhouseVan.png", "MoeSzyslak.png", "MontgomeryBurns.png"];

let images = imagesSaves.concat(imagesSaves);
images = embaralha(images);

for (let i = 0; i < cartas.length; i++) {
    cartas[i].style.backgroundImage = `url('images/${images[i]}')`;
}

setTimeout(function () {
    for (let carta of cartas) {
        carta.style.backgroundImage = `url(images/bartIcon.png)`;
        carta.onclick = function () {
            if (cartaVirada && cartaVirada.id !== carta.id) {
                setTimeout(function(){
                    if(cartaVirada.style.backgroundImage === carta.style.backgroundImage){
                        cartaVirada.onclick = null;
                        carta.onclick = null;
                    }else{
                        carta.style.backgroundImage = `url(images/bartIcon.png)`;
                    }
                }, 1000)
            } else {
                carta.style.backgroundImage = `url("images/${images[Number(carta.id)]}")`;
                cartaVirada = carta;
            }
            cartaVirada = null;
            // carta.onclick = null;
        }
    }
}, 3000);