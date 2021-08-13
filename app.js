// Image shop 

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) +  "px)";

nextBtn.addEventListener("click", ()=> {
    if(counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    carouselSlide.style.transition = "transform 200ms ease-in-out";
});

prevBtn.addEventListener("click", () => {
    if(counter <= 0) return;
    counter--;
    carouselSlide.style.transform = "translateX("+ (-size * counter) + "px)";
    carouselSlide.style.transition = "transform 200ms ease-in-out";
});

carouselSlide.addEventListener("transitionend", () => {
    if(carouselImages[counter].id === "lastPic"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    };

    if(carouselImages[counter].id === "firstPic"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter ) + "px)";
    };

});

