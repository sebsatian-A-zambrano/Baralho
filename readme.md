# Requisições com o Fetch

Este proyecto es una demostración de cómo utilizar la API Fetch para interactuar con la API de Deck of Cards. Permite crear un mazo de cartas barajado y extraer una carta aleatoria, mostrando la imagen de la carta en la página web.

## Requisitos

- Node.js (v22.13.1 o superior)
- Navegador web moderno

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/sebsatian-A-zambrano/Baralho.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd repo
    ```

## Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Haz clic en el botón "Tirar carta aleatoria" para extraer una carta del mazo barajado y mostrar su imagen.

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la página.
- `index.js`: Contiene el código JavaScript para interactuar con la API de Deck of Cards.
- `styles.css`: Contiene los estilos CSS para la página (si es necesario).

## Código JavaScript

El archivo `index.js` contiene las siguientes funciones:

- `criarBaralhoEmbaralhado()`: Crea un nuevo mazo barajado.
- `tirarUmaCarta(deck_id)`: Extrae una carta del mazo especificado.
- `tirarUmaCartaAleatoriaDoEmbaralhado()`: Crea un mazo barajado y extrae una carta aleatoria, mostrando su imagen en la página.