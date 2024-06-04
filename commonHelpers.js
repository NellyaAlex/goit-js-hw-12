import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(t){const i="https://pixabay.com/api/",s=new URLSearchParams({key:"44209803-f0da8dc8c73898f30e4ecbc0b",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${i}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const p=document.querySelector(".images-container");let a;function h(t){return`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${t.webformatURL}" 
        alt="${t.tags}" 
      />
    </a>
    <ul class="image-description">
      <li class="description-item"><b class="description-title">Likes:</b> ${t.likes}</li>
      <li class="description-item"><b class="description-title">Views:</b> ${t.views}</li>
      <li class="description-item"><b class="description-title">Comments:</b> ${t.comments}</li>
      <li class="description-item"><b class="description-title">Downloads:</b> ${t.downloads}</li>
    </ul>
    </li>
  `}function y(t){return t.map(h).join("")}function g(t){const i=y(t);p.insertAdjacentHTML("beforeend",i),a?a.refresh():a=new d(".images-container a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".form"),b=document.querySelector(".images-container"),m=document.querySelector(".loader");u.addEventListener("submit",L);function L(t){t.preventDefault(),b.innerHTML="",S();const i=t.target.elements.searcher.value.trim();if(!i){c.error({message:"Search field is empty",position:"topRight"}),l();return}f(i).then(s=>{if(s&&s.hits&&s.hits.length)g(s.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(s=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{l()}),u.reset()}function S(){m.style.display="inline-block"}function l(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
