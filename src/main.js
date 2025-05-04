//smooth header transition
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add("bg-light", "backdrop-blur-sm", "shadow-lg");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("bg-light", "backdrop-blur-sm", "shadow-lg");
  }
};

//Functional card/image carousel
window.addEventListener("load", (event) => {

  var card1 = document.getElementById('card1');
  var card2 = document.getElementById('card2');
  var card3 = document.getElementById('card3');
  var image1 = document.getElementById('img1');
  var image2 = document.getElementById('img2');
  var image3 = document.getElementById('img3');
  var cardp1 = document.getElementById('cardp1');
  var cardp2 = document.getElementById('cardp2');
  var pub1 = document.getElementById('pub1');
  var pub2 = document.getElementById('pub2');

card1.onclick= function() {
card1.classList.add("bg-light");
card1.classList.remove("bg-white");
card2.classList.remove("bg-light");
card2.classList.add("bg-white");
card3.classList.remove("bg-light");
card3.classList.add("bg-white");

 image1.style.animation= "load 0.4s ease-in-out 0s";
  image1.style.display = "block";
 
  image2.style.display = "none";
  image3.style.display = "none";
}

cardp1.onclick= function() {
cardp1.classList.add("bg-light");
cardp1.classList.remove("bg-white");
cardp2.classList.remove("bg-light");
cardp2.classList.add("bg-white");
pub1.style.animation= "load 0.4s ease-in-out 0s";
pub1.style.display = "block";
pub2.style.display = "none";
}

card2.onclick= function() {
card1.classList.remove("bg-light");
card1.classList.add("bg-white");
 card2.classList.add("bg-light");
card2.classList.remove("bg-white");
card3.classList.remove("bg-light");
card3.classList.add("bg-white");

  image1.style.display = "none";
  image2.style.animation= "load 0.4s ease-in-out 0s";
  image2.style.display = "block";
  image3.style.display = "none";
} 

cardp2.onclick= function() {
cardp1.classList.remove("bg-light");
cardp1.classList.add("bg-white");
cardp2.classList.add("bg-light");
cardp2.classList.remove("bg-white");
pub1.style.display = "none";
pub2.style.animation= "load 0.4s ease-in-out 0s";
pub2.style.display = "block";
} 

    card3.onclick= function(){
card1.classList.remove("bg-light");
card1.classList.add("bg-white");
card2.classList.remove("bg-light");
card2.classList.add("bg-white");
card3.classList.add("bg-light");

card3.classList.remove("bg-white");
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.animation= "load 0.4s ease-in-out 0s";
  image3.style.display = "block";
} 
});

function renderProjectCarousel() {
  const carousel = document.getElementById('project-carousel');
  if (!carousel) return;
  const images = [
    './src/images/features-bg.png',
    './src/images/features-bg-2.png',
    './src/images/features-bg-3.png'
  ];
  let current = 0;
  function showImage(idx) {
    const imgSrc = images[idx];
    carousel.innerHTML = `
      <div class="w-full flex justify-center items-center" style="height:400px; background: #e5e7eb; border-radius: 0.5rem;">
        ${imgSrc ? `<img src="${imgSrc}" alt="Project Feature" style="width:100%;max-width:1000px;max-height:100%;object-fit:contain;transition:opacity 0.5s;" />` : ''}
      </div>
    `;
  }
  showImage(current);
  setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
  }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCarousel();
});