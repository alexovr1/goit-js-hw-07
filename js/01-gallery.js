import { galleryItems } from './gallery-items.js';
// Change code below this line


// -----Create ref of elements-----
const refs = {
    gallery: document.querySelector('.gallery'),
    body: document.querySelector('body')
}

// -----Create dimanic DOM-elements in memory-----
const galleryItemsRef = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="return false;">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`).join("");

// -----Create dimanic DOM-elements in HTML-----
refs.gallery.innerHTML = galleryItemsRef;

// -----Add listener-----
refs.gallery.addEventListener('click', onClickSmallImg)

function onClickSmallImg(e) {
    if (e.target.nodeName !== "IMG") {
        return
    }

    const srcLargeImgRef = e.srcElement.dataset.source;

    // -----Using the library for modal-window-----
    const instance = basicLightbox.create(`
    <img src="${srcLargeImgRef}" width="95%" height="auto">`
        , {
            className: 'modal',
            onClose: (instance) => {
                refs.body.classList.remove('noScroll')
            }
        }
    )
    const onClickEscape = (e) => {
        if (e.code === 'Escape') {
            instance.close(() => document.removeEventListener("keydown", onClickEscape)
            )
        }
    }
    instance.show(() => {
        document.addEventListener("keydown", onClickEscape),
            refs.body.classList.add('noScroll')
    })
}