// Add imports above this line

// Описан в документации
// import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryIMGItems = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryIMGItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
        `;
    })
    .join('');
}
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});
