import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.images-container');

let lightbox;

function imageTemplate(image) {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${image.webformatURL}" 
        alt="${image.tags}" 
      />
    </a>
    <ul class="image-description">
      <li class="description-item"><b class="description-title">Likes:</b> ${image.likes}</li>
      <li class="description-item"><b class="description-title">Views:</b> ${image.views}</li>
      <li class="description-item"><b class="description-title">Comments:</b> ${image.comments}</li>
      <li class="description-item"><b class="description-title">Downloads:</b> ${image.downloads}</li>
    </ul>
    </li>
  `;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function renderImages(images) {
  const markup = imagesTemplate(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  if (!lightbox) {
    lightbox = new SimpleLightbox('.images-container a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
