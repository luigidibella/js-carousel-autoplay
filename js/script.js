const itemsWrapper = document.querySelector('.items-wrapper');
const up = document.querySelector('.up');
const down = document.querySelector('.down');

let counterImg = 0;

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

const imagesLength = images.length;
for (let i = 0; i < imagesLength; i++){
  images.push(images[i]);
}

for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hidden" src="${img}" alt=""></img>`
}

const itemsCollection = document.getElementsByClassName('img');

itemsCollection[0].classList.remove('hidden');

up.addEventListener('click', function(){
  itemsCollection[counterImg--].classList.add('hidden');
  counterImg = (counterImg - 1 + itemsCollection.length) % itemsCollection.length;
  itemsCollection[counterImg].classList.remove('hidden');
  console.log(counterImg);
})

down.addEventListener('click', function(){
  itemsCollection[counterImg++].classList.add('hidden');
  counterImg = (counterImg + 1) % itemsCollection.length;
  itemsCollection[counterImg].classList.remove('hidden');
  console.log(counterImg);
})
