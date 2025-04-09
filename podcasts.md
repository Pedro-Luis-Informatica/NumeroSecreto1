**Guía Paso a Paso del Proyecto de Podcasts en JavaScript**

---

## 📁 1. Definición del arreglo de objetos

```javascript
const podcasts = [
  {
    id: 1,
    title: "TechGuide: Storytelling con datos",
    subtitle: "Hipsters Punto Tech",
    image: "./src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-techguide.png",
    saved: false,
    category: "Data Science"
  },
  {
    id: 2,
    title: 'Fundamentos de Ciberseguridad',
    subtitle: 'Hipster Punto Tech',
    saved: 'false',
    category: 'Cibersecurity',
    image: './src/imagenes/Imagens/hipsters-punto-tech/hipsters-punto-tech-ciberseguridad-1.png'
  },
  {
    id: 3,
    title: 'Caso Farfetch: Front-End',
    subtitle: 'Hipster Punto Tech',
    saved: 'true',
    category: 'Front-End',
    image: './src/imagenes/Imagens/indicados-para-ti/Caso-Farfetch-Front-End.png'
  },
  {
    id: 4,
    title: 'Inteligencia Artificial Aplicada',
    subtitle: 'Hipster Punto Tech',
    saved: 'false',
    category: 'IA',
    image: './src/imagenes/Imagens/indicados-para-ti/Inteligencia-Artificial-Aplicada.png'
  }, {}
  {
    id: 5,
    title: 'UX vs UI',
    category: 'UX',
    subtitle: "Layers Punto Tech",
    saved: 'true',
    image: './src/imagenes/Imagens/indicados-para-ti/ux-vs-ui.png'
  },
  {
    id: 6,
    title: 'Actualizaciones Figma',
    subtitle: "Layers Punto Tech",
    saved: 'false',
    category: 'UX',
    image: './src/imagenes/Imagens/indicados-para-ti/Actualizaciones-Figma-2023.png'
  },
  {
    id: 7,
    title: 'Desarrollador Java en Granada',
    subtitle: "Dev Sin Fronteras",
    saved: 'true',
    category: 'Back-End',
    image: './src/imagenes/Imagens/dev-sin-fronteras/dev-sin-fronteras-99.png'
  },
  {
    id: 8,
    title: 'Líder de QA en la Ciudad de Guatemala',
    subtitle: "Dev Sin Fronteras",
    saved: 'false',
    category: 'QA',
    image: './src/imagenes/Imagens/dev-sin-fronteras/dev-sin-fronteras-94.png'
  }
];
```

## ➕ 2. Nuevos objetos para agregar

```javascript
const newPodcast = {
  title: "Nuevo Podcast",
  subtitle: "Descripción del nuevo podcast",
  image: "https://example.com/new-podcast.jpg",
  saved: "false"
};

const newPodcast2 = {
  title: "Nuevo Podcast 2",
  subtitle: "Descripción del nuevo podcast",
  image: "https://example.com/new-podcast.jpg",
  saved: "false"
};

export { podcasts, newPodcast, newPodcast2 };
```

## 🎨 3. Generar tarjeta de podcast (función `generateCard`)

```javascript
const generateCard = (podcast) => {
  const cardElement = document.createElement('li');
  cardElement.classList.add('tarjeta');

  const imgElement = document.createElement('img');
  imgElement.classList.add('tarjeta__imagen');
  imgElement.src = podcast.image;
  imgElement.alt = podcast.title;

  const titleElement = document.createElement('h3');
  titleElement.classList.add('tarjeta__titulo');
  titleElement.textContent = podcast.title;

  const subtitleElement = document.createElement('h4');
  subtitleElement.classList.add('tarjeta__subtitulo');
  subtitleElement.textContent = podcast.subtitle;

  const starElement = document.createElement('i');
  podcast.saved === 'true'
    ? starElement.classList.add('fa-solid', 'fa-star')
    : starElement.classList.add('fa-regular', 'fa-star');

  cardElement.appendChild(imgElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(subtitleElement);
  cardElement.appendChild(starElement);

  return cardElement;
};
```

## ▶️ 4. Generar reproductor (función `generatePlayer`)

```javascript
const generatePlayer = (podcast) => {
  const cardElement = document.createElement('li');
  const anchorElement = document.createElement('a');
  anchorElement.classList.add('tarjeta');
  anchorElement.href = '#';

  const imgElement = document.createElement('img');
  imgElement.classList.add('tarjeta__imagen');
  imgElement.src = podcast.image;
  imgElement.alt = podcast.subtitle;

  const subtitleElement = document.createElement('h3');
  subtitleElement.classList.add('tarjeta__titulo');
  subtitleElement.textContent = podcast.subtitle;

  const playerElement = document.createElement('div');
  playerElement.classList.add('tarjeta__player');

  const formElement = document.createElement('form');
  formElement.classList.add('tarjeta__boton');
  formElement.action = '.';

  const buttonElement = document.createElement('button');
  buttonElement.ariaLabel = 'Play Podcast';

  const playIconElement = document.createElement('img');
  playIconElement.src = './src/imagenes/Iconos/boton-play.svg';
  playIconElement.alt = 'Icono de Play';

  buttonElement.appendChild(playIconElement);
  formElement.appendChild(buttonElement);
  anchorElement.appendChild(imgElement);
  anchorElement.appendChild(subtitleElement);
  anchorElement.appendChild(playerElement);
  anchorElement.appendChild(formElement);
  cardElement.appendChild(anchorElement);

  return cardElement;
};

export { generateCard, generatePlayer };
```

## 📊 5. Uso de funciones y manipulación del DOM

```javascript
import { newPodcast, newPodcast2, podcasts } from "./datos.js";
import { generateCard, generatePlayer } from "./generator.js";

const parentElement = document.querySelector('[data-indicados]');
const tarjetas = document.querySelector('[data-tarjetas]');
const btnGuardados = document.querySelector('[data-guardados]');

// Mostrar todas las tarjetas con forEach
podcasts.forEach((podcast) => {
  const card = generateCard(podcast);
  parentElement.appendChild(card);
});

// Crear reproductores con map
const players = podcasts.map(({ image, subtitle }) =>
  generatePlayer({ image, subtitle })
);
tarjetas.append(...players);

console.log(podcasts);
console.log(players);

// Filtrar podcasts guardados al hacer clic
btnGuardados.addEventListener('click', () => {
  parentElement.innerHTML = '';

  const techPodcasts = podcasts.filter((podcast) => podcast.saved === 'true');

  techPodcasts.forEach((podcast) => {
    const card = generateCard(podcast);
    parentElement.appendChild(card);
  });
});
```

---

Esta guía paso a paso permite entender la estructura del proyecto, desde los datos hasta la manipulación del DOM. Ideal para enseñar los fundamentos de objetos, arrays, funciones y eventos en JavaScript.

