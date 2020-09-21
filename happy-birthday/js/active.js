var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  $("video").get(0).play();

  tl.from(
    ".event-img",
    {
      duration: 0.5,
      opacity: 0,
      y: 100,
      ease: "expo.in",
    },
    "+=1"
  );
  tl.from(".big-font", { opacity: 0, y: -30, duration: 0.5, ease: "back.out" });
  tl.to("#preloader", { duration: 0.3, y: "-100%", ease: "expo.in" }, "+=3");
  tl.to("#preloader", { display: "none", ease: "expo.in" }, "+=2.5");

  tl.from(
    ".congratulate",
    {
      opacity: 0,
      y: -30,
      diration: 0.5,
      ease: "back.out",
      stagger: "0.01s",
    },
    "-=1.2"
  );

  tl.to(".expand", {
    width: 0,
    duration: 0.5,
    ease: "expo.inOut",
    onComplete: function () {
      $(".expand").addClass("zero").removeAttr("style");
    },
  });

  $(".name").on("mouseover", function () {
    $(".expand").removeClass("zero");
  });

  $(".name").on("mouseleave", function () {
    $(".expand").addClass("zero");
  });

  gsap.to(".wrapper", {
    left: 0,
    translateX: 0,
    duration: 1,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#section2",
      start: "top 20%",
      markers: true,
    },
  });

  const text = [
    "здоровья",
    "счастья",
    "заботы",
    "тепла",
    "богатства",
    "успехов",
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === text.length) {
      count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 350);
  })();

  const texts = [
    "заботу",
    "любовь",
    "еду на столе",
    "крышу над головой",
    "терпение",
  ];

  let counts = 0;
  let indexes = 0;

  (function typing() {
    if (counts === texts.length) {
      counts = 0;
    }
    currentText = texts[counts];
    letter = currentText.slice(0, ++indexes);

    document.querySelector(".press-typing").textContent = letter;

    if (letter.length === currentText.length) {
      counts++;
      indexes = 0;
    }
    setTimeout(typing, 300);
  })();

  function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-depth");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  document.addEventListener("mousemove", parallax);

  $(".burger").click(function () {
    $(".content").toggleClass("translate");
  });

  ScrollTrigger.create({
    trigger: ".blocks_thank",
    start: "bottom top",
    onEnter: () => $(".name").toggleClass("black").next().toggleClass("black"),
    onEnterBack: () =>
      $(".name").toggleClass("black").next().toggleClass("black"),
  });
});

const cursorArea = document.querySelector(".blocks_thank");
const cursor = document.querySelector(".cursor");

cursorArea.addEventListener("mousemove", cursorMove);
cursorArea.addEventListener("click", function () {
  this.classList.toggle("white");
});
cursorArea.addEventListener("mouseleave", function () {
  cursor.style.opacity = 0;
});

cursorArea.addEventListener("mouseover", function () {
  cursor.style.opacity = 1;
});

function cursorMove(ev) {
  cursor.style.top = ev.pageY + "px";
  cursor.style.left = ev.pageX + "px";
}

const skew = document.querySelector(".skew");
skew.addEventListener("mouseover", function () {
  cursor.classList.add("expand");
});
skew.addEventListener("mouseleave", function () {
  cursor.classList.remove("expand");
});
