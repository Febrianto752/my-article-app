const cardElems = document.querySelectorAll(".articles .card");

const showArticleCard = () => {
  cardElems.forEach((cardElem, index) => {
    setTimeout(() => {
      cardElem.classList.add("fade");
    }, index * 800);
  });
};

document.addEventListener("scroll", () => {
  const otherArticleElem = document.getElementById("other-article");

  if (
    window.innerWidth > 1315 &&
    window.scrollY >
      otherArticleElem.offsetTop - (otherArticleElem.offsetHeight + 340)
  ) {
    showArticleCard();
  } else if (
    window.innerWidth > 880 &&
    window.scrollY >
      otherArticleElem.offsetTop - (otherArticleElem.offsetHeight + 200)
  ) {
    showArticleCard();
  } else if (
    window.scrollY >
    otherArticleElem.offsetTop - otherArticleElem.offsetHeight
  ) {
    showArticleCard();
  }
});
