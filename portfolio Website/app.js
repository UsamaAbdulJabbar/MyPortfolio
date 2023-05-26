const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// navbar into menu-icon
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let heighr = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + heighr) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

/*=================Scroll Reveal===============*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 1500,
  delay: 150,
});

ScrollReveal().reveal(
  ".home-text, .button, .box .s-icon, .portfolio h1, .portfolio p",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(".home-img img, .about-text , .box h3, .box p,.row  ", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img img, .box a , .contact", {
  origin: "left",
});
ScrollReveal().reveal(".home-content h3,.home-content p,  .about-content", {
  origin: "right",
});
//==================On Submit Get Data========================

function Submit() {
  var UserName = document.getElementById("nameData").value;
  var UserEmail = document.getElementById("emailData").value;
  var MobileNumber = document.getElementById("mobileData").value;
  var TextArea = document.getElementById("textAreaData").value;

  if (!UserName) {
    alert("Please Enter Your Name ");
    return;
  }
  if (!UserEmail) {
    alert("Please Enter Your Email ");
    return;
  }
  if (!MobileNumber) {
    alert("Please Enter Your Mobile Number ");
    return;
  }
}
