// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImgsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);


function createImgsMarkup(galleryItems) {
return galleryItems.map(({preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
}).join('');
};

let gallery = new SimpleLightbox('.gallery a', {
  
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,

});

gallery.on('show.simplelightbox');

console.log(galleryItems);
