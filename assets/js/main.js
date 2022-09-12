const cardElems = document.querySelectorAll(".articles .card");

cardElems.forEach((cardElem, index) => {
  setTimeout(() => {
    cardElem.classList.add("fade");
  }, index * 800);
});

console.log(cardElems);
