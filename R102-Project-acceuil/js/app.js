const arrowDown = document.querySelector(".fa-angle-double-down");
const header = document.querySelector("header");
const paragrapheHeader = document.querySelectorAll(".menu ul li a");
const title = document.querySelector(".titleRobotino");

// SCROLL PAR BLOCS

title.querySelector("mouseover", () => {
  alert("Cunny")
})

var doc = window.document,
  context = doc.querySelector(".js-loop"),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  i = 0;

arrowDown.addEventListener("click", () => {
  setScrollPos(context.clientHeight);
});

function getScrollPos() {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos(pos) {
  context.scrollTop = pos;
}

function reCalc() {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;

  if (scrollPos <= 0) {
    setScrollPos(1);
  }
}

function bck(precedent, suivant, color) {
  if (
    scrollPos >= context.clientHeight * precedent - 50 &&
    scrollPos <= context.clientHeight * suivant
  ) {
    header.style.backgroundColor = color; // "#E74C3C"
    paragrapheHeader.forEach((e) => {
      e.style.color = "#ffffff";
    });
  }
}

// Changes header color
function scrollUpdate() {
  if (!disableScroll) {
    scrollPos = getScrollPos();
    if (scrollPos >= 0 && scrollPos < context.clientHeight) {
      header.style.backgroundColor = "#000000";
    }
    bck(1, 2, "#1a5276");
    bck(2, 3, "#E74C3C");

    if (
      scrollPos >= context.clientHeight * 3 - 50 &&
      scrollPos <= context.clientHeight * 4 - 50
    ) {
      header.style.backgroundColor = "rgba(223, 219, 219, 0.555)";
      paragrapheHeader.forEach((e) => {
        e.style.color = "#000000";
      });
    }

    bck(4, 5, "#3498DB");
    bck(5, 6, "#5D6D7E");
    bck(6, 7, "#EB984E");
    bck(7, 8, "SeaGreen");
    bck(8, 9, "#7C8FD0");
    bck(9,10, "#1B2631");
    bck(10,11, "red");
  }

  if (disableScroll) {
    window.setTimeout(function () {
      disableScroll = false;
    }, 100);
  }
}

function init() {
  reCalc();

  context.addEventListener(
    "scroll",
    function () {
      window.requestAnimationFrame(scrollUpdate);
    },
    false
  );

  window.addEventListener(
    "resize",
    function () {
      window.requestAnimationFrame(reCalc);
    },
    false
  );
}

if (document.readyState !== "loading") {
  init();
} else {
  doc.addEventListener("DOMContentLoaded", init, false);
}

// Animation arrivée

const titreRobotino = document.querySelector(".titleRobotino");
window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true }, 0.3);
  TL.from(paragrapheHeader, 0.3, {
    opacity: 0,
    stagger: 0.1,
    right: 25,
    ease: "sine",
  })
    .from(titreRobotino, 0.5, { opacity: 0, top: 15, stagger: 0.1 }, "1")
    .from(arrowDown, 0.5, { opacity: 0, top: 5 }, "1");

  TL.play();
});

let observer = new IntersectionObserver(
  (observable) => {
    observable.forEach((observable) => {
      if (observable.intersectionRatio > 0.5) {
        console.log("Intersection");
      }
    });
  },
  {
    threshold: [0.5],
  }
);

// Bar de menu * context

const allLinks = document.querySelectorAll(".menu ul li a");

const tab = new Array();

for (let i = 0; i < allLinks.length; i++) {
  tab.push(allLinks[i]);
}

allLinks.forEach((e) => {
  e.addEventListener("click", () => {
    setScrollPos(context.clientHeight * (tab.indexOf(e) + 1));
  });
});

// DOM

const schema2d = document.querySelector(".schema2d");
schema2d.addEventListener("click", () => {
  schema2d.classList.toggle("bckd");
});


const arrowUp = document.querySelector(".fa-arrow-up")
arrowUp.addEventListener("click", ()=> {
  setScrollPos(0)
})


