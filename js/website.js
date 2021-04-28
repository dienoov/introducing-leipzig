const largePhotos = document.querySelectorAll(".large-photos li");

const hidePhoto = (photo) => photo.style.display = "none";
const showPhoto = (photo) => photo.style.display = "block";

const hideAllPhotos = () => largePhotos.forEach(hidePhoto);

let activeSlidePhoto = 0;

const slidePhoto = (index = 0) => {
    hideAllPhotos();
    showPhoto(largePhotos[index]);
    activeSlidePhoto = index;
};

slidePhoto();

const nextSlide = () => {
    activeSlidePhoto++;
    activeSlidePhoto = activeSlidePhoto < largePhotos.length ? activeSlidePhoto : 0;
    slidePhoto(activeSlidePhoto);
};

const autoSlidePhoto = (interval = 5000) => {
    setInterval(nextSlide, interval);
};

autoSlidePhoto();

const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        navbar.classList.add("bg-opaque-dark");
    } else {
        navbar.classList.remove("bg-opaque-dark");
    }
});

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarClose = document.querySelector(".navbar-close");
const navbarCollapse = document.querySelector(".navbar-collapse");

const navbarToggle = () => navbarCollapse.classList.toggle("active");

[navbarToggler, navbarClose].forEach((el) => {
    el.addEventListener("click", navbarToggle);
});