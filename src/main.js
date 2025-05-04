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

// --- Embedded data for static site ---
const personalProjectsData = [
  {
    title: "QuarkIQL - Computer Vision API Testing Platform",
    description: "Full stack web app created using React, AWS (RDB, CodeDeploy, EC2, S3) and Tailwind CSS.",
    image: "./src/images/quark.png",
    bgImage: "./src/images/features-bg.png",
    link: "https://quarkiql.com"
  },
  {
    title: "MLB Daily - Frontend UI for Sports APIs",
    description: "Custom CSS and JavaScript frontend running on Flask backend and deployed on AWS EC2.",
    image: "./src/images/mlb.png",
    bgImage: "./src/images/features-bg-2.png",
    link: "https://mlb.jakewigal.com"
  },
  {
    title: "COVID-19 Case Rates Data Analysis and Visualization",
    description: "Data analysis and visualization using Pandas, SciPy, Plotly, and Leaflet.",
    image: "./src/images/covid19.png",
    bgImage: "./src/images/features-bg-3.png",
    link: "https://jakewigal.com/covid-19"
  }
];

const publicationsData = [
  {
    title: "Optimizing Last Mile Delivery of Emergency Supplies for Oahu, Hawaii (2023)",
    description: "Developed congestion based traffic assignment and capacitated vehicle routing problem models to find optimal points of distribution for emergency supplies.",
    link: "https://calhoun.nps.edu/handle/10945/72017",
    image: "./src/images/pub1.png"
  },
  {
    title: "Cellular Coverage Mapping in the U.S. Virgin Islands (2023)",
    description: "Implemented physics based model of cellular coverage in the U.S. Virgin Islands to determine the critical facilities most vulnerable to tower failure and identify desirable locations for future investment.",
    link: "https://apps.dtic.mil/sti/trecms/pdf/AD1211119.pdf",
    image: "./src/images/pub2.png"
  }
];

function renderSectionFromData(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = data.map(item => {
    const isPublications = containerId === 'publications';
    // Set image wrapper and image size based on section
    const imageWrapperClass = isPublications
      ? 'flex justify-center items-center w-24 h-24 flex-shrink-0 ml-3' // publications: 0.5x bigger
      : 'flex justify-center items-center w-9 h-9 rounded-lg bg-white shadow flex-shrink-0 ml-3'; // projects: 0.75x smaller
    const imageClass = isPublications
      ? 'object-contain w-20 h-20' // publications image size
      : 'object-contain w-8 h-8'; // projects image size
    const cardContent = `
      <div class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out bg-white shadow-md border-gray-200 hover:shadow-lg hover:scale-105 min-h-[150px] h-full cursor-pointer hover:cursor-pointer">
        <div class="flex-grow">
          <div class="font-bold leading-snug tracking-tight mb-1">${item.title}</div>
          <div class="tracking-normal text-gray-600">${item.description}</div>
        </div>
        ${item.image ? `<div class="${imageWrapperClass}"><img src="${item.image}" alt="${item.title}" class="${imageClass}"/></div>` : ''}
      </div>
    `;
    if (item.link) {
      return `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="h-full block" style="text-decoration:none;">${cardContent}</a>`;
    } else {
      return cardContent;
    }
  }).join('');
}

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
      <div class="w-full flex justify-center items-center" style="height:220px; background: #e5e7eb; border-radius: 0.5rem;">
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
  renderSectionFromData(personalProjectsData, 'personal-projects');
  renderSectionFromData(publicationsData, 'publications');
  renderProjectCarousel();
});