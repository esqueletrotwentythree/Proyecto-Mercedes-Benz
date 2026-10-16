const btn  = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open");
  btn.classList.toggle("active", abierto);
  btn.setAttribute("aria-expanded", abierto);
  btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});


const caja = document.querySelector(".caja-login");
const auto = document.querySelector(".auto");


caja.addEventListener("animationend", () => {
    caja.style.animation = "none";
    caja.style.opacity = "1";
});

auto.addEventListener("animationend", (e) => {
    if (e.animationName === "autoEntra") {
        auto.style.opacity = "1";
        auto.style.animation = "none";
        // reinicia la animación de flotar
        void auto.offsetWidth;
        auto.classList.add("flotando");
    }
});

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;


    auto.style.transform = `translate(${x * 25}px, ${y * 15}px) rotate(${x * 2}deg)`;
    caja.style.transform = `translate(${x * 8}px, ${y * 5}px)`;
});