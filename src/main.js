import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-function';

const form = document.querySelector('.form');
const gallery = document.querySelector('.images-container');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-button');

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadBtnClick);

let page;
let totalPages;
let searcher;

async function handleSubmit(event) {
  event.preventDefault();

  hideLoadMoreBtn();

  gallery.innerHTML = '';

  showLoader();

  searcher = event.target.elements.searcher.value.trim();

  if (!searcher) {
    iziToast.error({
      message: 'Search field is empty',
      position: 'topRight',
    });

    hideLoader();
    return;
  }

  try {
    page = 1;
    const data = await getImages(searcher, page);
    if (data && data.hits && data.hits.length) {
      hideLoader();
      totalPages = Math.ceil(data.totalHits / 15);
      checkLoadMoreBtn();
      renderImages(data.hits);
    } else {
      throw Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
  form.reset();
}

async function handleLoadBtnClick() {
  showLoader();
  hideLoadMoreBtn();

  try {
    page += 1;
    const data = await getImages(searcher, page);

    if (data && data.hits && data.hits.length) {
      checkLoadMoreBtn();
      renderImages(data.hits);

      const cardHeight = document
        .querySelector('.gallery-item')
        .getBoundingClientRect().height;
      window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });

      return;
    } else {
      throw new Error("We're sorry, there are no more posts to load");
    }
  } catch (error) {
    iziToast.error({
      message: "We're sorry, there are no more posts to load",
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function checkLoadMoreBtn() {
  if (totalPages > page) {
    showLoadMoreBtn();
  } else {
    hideLoadMoreBtn();
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
}

function showLoader() {
  loader.style.display = 'inline-block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}
