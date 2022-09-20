// filter 
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for ( let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for ( let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");
        
        for ( let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if ( target == items [k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if ( target == "all") {
                items[k].style.display = "block";
            }
        }
    });
}


// Navbar Link Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});

// Navbar mobile
const navLiMobile = document.querySelectorAll(".nav-container li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLiMobile.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});



// Navbar link
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function(element) {
    element.addEventListener("click", function() {
        for(let i=0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
        
        btnHamburger.classList.remove('open');
    });
});


// Hamburger
const hamBurger = document.querySelector(".ham-burger");
hamBurger.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
});


const btnHamburger = document.querySelector('.ham-burger');
btnHamburger.addEventListener('click', function() {
    
    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    }
    else {
        btnHamburger.classList.add('open');
    }
});

window.addEventListener('load', () => {
    document.getElementById('grid').classList.add('imagenes-cargadas');
});




