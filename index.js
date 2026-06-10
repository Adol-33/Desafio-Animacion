// Javascript para inex.html



function observarElemento( elemento, className, tiempo=0.3, repetir=false) {
    const observar = new IntersectionObserver( (entries) => {
        entries.forEach( entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);

                if (!repetir) {
                    observar.unobserve(entry.target); // Deja de observar si no quiero repetir
                }
            } else {
                if (repetir) {
                    entry.target.classList.remove(className); // permite animar al subir y abajar
                }
            }
        });
    }, { threshold: tiempo });

    document.querySelectorAll(elemento).forEach(el => observar.observe(el));
};

observarElemento(".animar-trigger", "animar", 0.5);
observarElemento(".card", "card-animacion", 0.5);

// MODAL

const linkSobreMiUno = document.querySelector("#sobreMi-1");
// console.log(linkSobreMi);
const linkSobreMiDos = document.querySelector("#sobreMi-2");
// console.log(linkSobreMi-2);
const contenedor = document.querySelector("#modales");
// console.log(contenedor);

// Menu Desplegable
linkSobreMiUno.addEventListener("click", async (e) => {
    e.preventDefault();

    const respuesta = await fetch("sobremi.html");
    const html = await respuesta.text();
    console.log(html);

    contenedor.innerHTML = html;
    console.log(contenedor);

    const modal = document.querySelector("dialog");
    console.log(modal);
    modal.showModal();

    const btnCerrar = document.querySelector("#btn-cerrar-sM");
    btnCerrar.addEventListener("click", () => modal.close());
});
// Menu Lateral
linkSobreMiDos.addEventListener("click", async (e) => {
    e.preventDefault();

    const respuesta = await fetch("sobremi.html");
    const html = await respuesta.text();
    console.log(html);

    contenedor.innerHTML = html;
    console.log(contenedor);

    const modal = document.querySelector("dialog");
    console.log(modal);
    modal.showModal();

    const btnCerrar = document.querySelector("#btn-cerrar-sM");
    btnCerrar.addEventListener("click", () => modal.close());
});








