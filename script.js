document.addEventListener("DOMContentLoaded", () => {

    // MENSAJE EN CONSOLA
    console.log("Taty Cristal cargado correctamente");

    // BOTONES PRINCIPALES
    const buttons = document.querySelectorAll(".btn-primary");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Gracias por contactarnos. Te responderemos pronto.");
        });
    });

    // BOTÓN VER SERVICIOS
    const serviceButton = document.querySelector(".btn-secondary");

    if(serviceButton){
        serviceButton.addEventListener("click", () => {
            const section = document.querySelector("#servicios");

            if(section){
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // NAVBAR EFECTO SCROLL
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(!navbar) return;

        if(window.scrollY > 50){
            navbar.style.background = "rgba(0,0,0,0.85)";
            navbar.style.backdropFilter = "blur(8px)";
        } else {
            navbar.style.background = "transparent";
        }

    });
    // FORMULARIO RESERVA WHATSAPP

const bookingForm = document.getElementById("booking-form");

if(bookingForm){

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const fecha = document.getElementById("fecha").value;
        const servicio = document.getElementById("servicio").value;
        const mensaje = document.getElementById("mensaje").value;

        const texto =
`📅 NUEVA RESERVA — Crystal Taty

👤 Cliente: ${nombre}
📞 Teléfono: ${telefono}
📅 Fecha: ${fecha}
🧹 Servicio: ${servicio}

📝 Comentarios:
${mensaje}`;

        const url =
`https://wa.me/5351273027?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });

}

});