import { galleryItems } from './gallery-items.js';
// Change code below this line


// -----Create ref of elements-----
const refs = {
    gallery: document.querySelector('.gallery'),
    body: document.querySelector('body')
}

// -----Create DOM-elements in memory-----
const galleryItemsRef = galleryItems.map(({ preview, original, description }) => `<div class="gallery">
    <a class="gallery__item" href="${original}" onclick="return false;">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</div>`).join("");


// -----Create DOM-elements in HTML-----
refs.gallery.innerHTML = galleryItemsRef;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    disableRightClick: true,
    overlayOpacity: 0.8,
});