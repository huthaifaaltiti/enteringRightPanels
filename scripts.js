/* SECTOR */
// Declaring Variables

// Modal Variables
const highQualityModalImage = document.querySelector(".img-high--front-end");
const imgFrontEnd = document.querySelectorAll(".img--front-end");
const iconCloseModal = document.querySelector(".icon--close-modal");
const imgModal = document.querySelector(".image-modal");

// Left Section Variables
const leftContainerBtns = document.querySelectorAll(".container-left-item");
const leftContainerIcons = document.querySelectorAll(".icon--right-arrow");
const rightContainerSections = document.querySelectorAll(
  ".container-right-section"
);

/* SECTOR */
// DOMs

// for right arrows in all project
for (let k = 0; k < rightContainerSections.length; k++) {
  rightContainerSections[k].classList.add("hide");
}

for (let i = 0; i < leftContainerBtns.length; i++) {
  leftContainerBtns[i].addEventListener("click", function () {
    for (let j = 0; j < leftContainerBtns.length; j++) {
      leftContainerBtns[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataText = this.getAttribute("data-section");

    for (let k = 0; k < rightContainerSections.length; k++) {
      rightContainerSections[k].classList.add("hide");
      rightContainerSections[k].classList.remove("active");

      if (rightContainerSections[k].getAttribute("data-text") === dataText) {
        rightContainerSections[k].classList.remove("hide");
      }
    }
  });
}

// for first project section "Front-End section"
imgFrontEnd.forEach(function (img) {
  img.addEventListener("click", function () {
    imgModal.classList.toggle("open-modal");

    let imageNumber = img.getAttribute("alt");
    highQualityModalImage.src = `/images/hq-Image/${imageNumber}.png`;
  });
});

iconCloseModal.addEventListener("click", function () {
  imgModal.classList.toggle("open-modal");
});

imgModal.addEventListener("click", function (e) {
  if (e.target.classList.contains("image-modal")) {
    imgModal.classList.remove("open-modal");
    imgFrontEnd.classList.remove("open-modal");
  }
});
