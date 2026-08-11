function irAlCatalogo() {
    document.getElementById("catalogo").scrollIntoView({
        behavior: "smooth"
    });
}

function mostrarContacto() {
    alert("Puedes contactarnos por WhatsApp o redes sociales.");
}

const enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", function () {
        enlaces.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {
    producto.addEventListener("click", function () {
        const nombre = this.querySelector("h3").textContent;
        const precio = this.querySelector("p").textContent;

        alert(`${nombre}\nPrecio: ${precio}`);
    });
});