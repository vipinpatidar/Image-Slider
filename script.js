const slides = document.querySelectorAll(".slide");

const current = document.querySelector(".current");
// console.log(current);

let auto = true;
const intervalTime = 5000;
let slideInterval;
console.log("slideInterval");

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next sibling
  if (current.nextElementSibling) {
    // Add current class
    current.nextElementSibling.classList.add("current");
  } else {
    // if there is not next sibling then add current to first slide
    slides[0].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

const previousSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for previous sibling
  if (current.previousElementSibling) {
    // Add current class
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    // Run next slide at interval Time
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", () => {
  previousSlide();
  if (auto) {
    clearInterval(slideInterval);
    // Run next slide at interval Time
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// auto slide
if (auto) {
  // Run next slide at interval Time
  slideInterval = setInterval(nextSlide, intervalTime);
}

window.addEventListener("mouseover", (e) => {
  console.log(e.target);

  auto = false;
  //   if (e.target === slides) {
  //   }
});
