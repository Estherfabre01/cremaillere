// Compteur

const eventDate =
  new Date("2026-09-05");

const now =
  new Date();

const days =
  Math.ceil(
    (eventDate - now)
    /
    (1000 * 60 * 60 * 24)
  );

document.getElementById(
  "daysLeft"
).textContent = days;


// Apparition douce

const observer =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add(
        "visible"
      );

    }

  });

});

document
.querySelectorAll(".section, .card")
.forEach(el => {

  el.classList.add("reveal");
  observer.observe(el);

});


// Retour haut

const topBtn =
document.getElementById(
  "backToTop"
);

window.addEventListener(
"scroll",
() => {

  if (window.scrollY > 300) {

    topBtn.classList.add("show");

  } else {

    topBtn.classList.remove("show");

  }

});

topBtn.addEventListener(
"click",
() => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// Confettis

document
.querySelectorAll(".confetti-btn")
.forEach(btn => {

  btn.addEventListener(
    "click",
    () => {

      for (let i = 0; i < 30; i++) {

        const confetti =
          document.createElement("div");

        confetti.className =
          "confetti";

        confetti.style.left =
          Math.random()
          * window.innerWidth
          + "px";

        confetti.style.top =
          "-10px";

        confetti.style.background =
          [
            "#1C4717",
            "#751616",
            "#A3827A"
          ][
            Math.floor(
              Math.random() * 3
            )
          ];

        document.body.appendChild(
          confetti
        );

        setTimeout(() => {
          confetti.remove();
        }, 2000);
      }
    }
  );
});