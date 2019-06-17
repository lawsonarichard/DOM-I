const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// Nav
const nav = document.querySelector('nav');
const navlinks = document.querySelectorAll('nav a');
navlinks[0].textContent = siteContent['nav']['nav-item-1'];
navlinks[1].textContent = siteContent['nav']['nav-item-2'];
navlinks[2].textContent = siteContent['nav']['nav-item-3'];
navlinks[3].textContent = siteContent['nav']['nav-item-4'];
navlinks[4].textContent = siteContent['nav']['nav-item-5'];
navlinks[5].textContent = siteContent['nav']['nav-item-6'];

// cta
const cta = document.querySelector('cta');

const h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

const ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);


// main-content 
const topcontent = document.querySelectorAll('.top-content .text-content p');
const topheader = document.querySelectorAll('.top-content .text-content h4');
topheader[0].textContent = siteContent['main-content']['features-h4'];
topcontent[0].innerText = siteContent['main-content']['features-content'];
topheader[1].textContent = siteContent['main-content']['about-h4'];
topcontent[1].innerText = siteContent['main-content']['about-content'];
const middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom-content 
const bottomcontent = document.querySelectorAll('.bottom-content .text-content p');
const bottomheader = document.querySelectorAll('.bottom-content .text-content h4');
bottomheader[0].textContent = siteContent['main-content']['services-h4'];
bottomcontent[0].innerText = siteContent['main-content']['services-content'];
bottomheader[1].textContent = siteContent['main-content']['product-h4'];
bottomcontent[1].innerText = siteContent['main-content']['product-content'];
bottomheader[2].textContent = siteContent['main-content']['vision-h4'];
bottomcontent[2].innerText = siteContent['main-content']['vision-content'];

// contact 
const contactcontent = document.querySelectorAll('.contact p');
const contactheader = document.querySelectorAll('.contact h4');
contactheader[0].textContent = siteContent['contact']['contact-h4'];
contactcontent[0].innerText = siteContent['contact']['address'];
contactcontent[1].innerText = siteContent['contact']['phone'];
contactcontent[2].innerText = siteContent['contact']['email'];


// footer 
const footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
