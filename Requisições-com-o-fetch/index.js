document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tirar-carta').addEventListener('click', () => {
        tirarUmaCartaAleatoriaDoEmbaralhado();
    });
});

async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url);
    const json = await resposta.json();
    return json;
}

async function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const resposta = await fetch(url);
    return await resposta.json();
}

async function tirarUmaCartaAleatoriaDoEmbaralhado() {
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await tirarUmaCarta(baralho.deck_id);
    const imagemCarta = carta.cards[0].image;
    document.getElementById('carta').src = imagemCarta;
}

tirarUmaCartaAleatoriaDoEmbaralhado();