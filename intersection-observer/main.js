const animations = document.querySelectorAll(".animation");
const images = document.querySelectorAll("img");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    },
    {
      treshold: 0,
    }
  );
});

for (let i = 0; i < animations.length; i++) {
  const element = animations[i];

  observer.observe(element);
}

// let observerLazyLoading = new IntersectionObserver(
//   (entries, observerLazyLoading) => {
//     debugger;
//     entries.forEach(
//       (img) => {
//         console.log(img);
//         img.target.dataset.src;
//         observerLazyLoading.unobserve(img.target);
//       },
//       { treshold: 0.5, rootMargin: "0px 0px -200px 0px" }
//     );
//   }
// );

let observerLazyLoading = new IntersectionObserver(
  (entries, observerLazyLoading) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      /* Placeholder replacement */
      entry.target.src = entry.target.dataset.src;
      // observerLazyLoading.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -200px 0px" }
);

document.querySelectorAll("img").forEach((img) => {
  observerLazyLoading.observe(img);
});
