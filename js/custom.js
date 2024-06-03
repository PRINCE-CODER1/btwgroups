function sidebar() {
  const sidebar = document.querySelector(".header-menu");
  sidebar.classList.toggle("opensidebar");
}
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  on: {
    slideChangeTransitionStart: function () {
      var slides = document.querySelectorAll(".swiper-slide");
      slides.forEach(function (slide) {
        slide.style.opacity = "0";
      });
      var activeSlide = document.querySelector(".swiper-slide-active");
      activeSlide.style.opacity = "1";
    },
  },
});
function textEffect() {
  var tl = gsap.timeline();
  tl.to("#textanim", {
    top: "0px",
    duration: 0.7,
    stagger: 0.3,
  })
    .to(
      ".logo",
      {
        top: "0px",
        stagger: 0.1,
      },
      "sameanim"
    )
    .to(
      ".header-menu li",
      {
        top: "0px",
        opacity: 1,
        stagger: 0.1,
      },
      "sameanim"
    );
}
function scrollevents() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".header",
      start: "500% 40%",
      end: "0% 0%",
      scrub: 1,
    },
  });
  tl.to(".header", {
    position: "fixed",
    height: "100px",
    backgroundColor: "#fff",
  });
  tl.to(".header-menu a", {
    color: "#000",
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-sec",
      start: "0% 80%",
      end: "0% 0%",
      scrub: 1,
    },
  });
  tl.from(
    ".about-01",
    {
      x: -800,
    },
    "sameanim"
  );
  tl.from(
    ".about-02",
    {
      x: 800,
    },
    "sameanim"
  );
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".our-team",
      start: "0% 80%",
      end: "0% 0%",
      scrub: 1,
    },
  });
  tl.from(
    ".about-03",
    {
      x: -800,
    },
    "samanim2"
  );
  tl.from(
    ".about-04",
    {
      x: 800,
    },
    "samanim2"
  );
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".our-works",
      start: "0% 80%",
      end: "0% 0%",
      scrub: 1,
    },
  });
  tl.from(
    ".about-05",
    {
      x: -800,
    },
    "samanim2"
  );
  tl.from(
    ".about-06",
    {
      x: 800,
    },
    "samanim2"
  );
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".our-vision",
      start: "0% 80%",
      end: "0% 0%",
      scrub: 1,
    },
  });
  tl.from(
    ".about-07",
    {
      x: -800,
    },
    "samanim3"
  );
  tl.from(
    ".about-08",
    {
      x: 800,
    },
    "samanim3"
  );
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".management-sec",
      start: "0% 80%",
      end: "0% 0%",
      scrub: 1,
    },
  });
  tl.from(
    ".about-09",
    {
      x: -800,
    },
    "samanim3"
  );
  tl.from(
    ".about-10",
    {
      x: 800,
    },
    "samanim3"
  );
}
textEffect();
scrollevents();
