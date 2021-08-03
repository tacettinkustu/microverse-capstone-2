import lookupShow from '../api/api.js';

export default async function gotoCommentPage(showId) {
  const showInfo = await lookupShow(showId);
  const modal = document.querySelector('.modal');
  modal.classList.add('active');

  modal.innerHTML = `
  <div
          class="
            modal-content
            d-flex
            flex-column
            align-items-center
            justify-content-center
          "
        >
          <div class="d-flex flex-row w-100 justify-content-center">
            <img
              src="${showInfo.image.medium}"
              alt="shows"
              class="popup-image"
            />
            <div class="close">&times;</div>
          </div>
          <h3 class="popup-title my-4">${showInfo.name}</h3>
          <div class="info d-flex flex-row my-2 w-75">
            <div class="categories d-flex flex-column align-items-start w-50">
              <h5>Genre : ${showInfo.genres[0]}</h5>
              <h5>Language : ${showInfo.language}</h5>
            </div>
            <div class="categories d-flex flex-column align-items-start w-50">
              <h5>Release Date : ${showInfo.premiered.split('-')[0]}</h5>
              <h5>Rating : ${showInfo.rating.average}</h5>
            </div>
          </div>
        </div>
  `;

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => modal.classList.remove('active'));
}
