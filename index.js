document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const scrollPercentage =
      (scrollPosition / (bodyHeight - windowHeight)) * 100;
    console.log(scrollPercentage);
    const fire = document.getElementsByClassName("fire")[0];
    fire.style.width = `${(20 * scrollPercentage) / 100}px`;
    fire.style.top = `calc(26.5% - ${(40 * scrollPercentage) / 100 / 2}px)`;
    fire.style.left = `calc(50.1% - ${(20 * scrollPercentage) / 100 / 2}px)`;
    console.log(fire);
    fire.style.height = `${(40 * scrollPercentage) / 100}px`;
  });
});
