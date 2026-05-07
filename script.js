const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const closeButton = lightbox.querySelector(".close");

document.querySelectorAll("[data-gallery] .tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    lightboxImage.src = tile.dataset.src;
    lightboxImage.alt = tile.dataset.caption;
    lightboxCaption.textContent = tile.dataset.caption;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    closeButton.focus();
  });
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
