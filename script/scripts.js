//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("gremio_open").addEventListener("click", open_close_menu);
document.getElementById("cuenta_open").addEventListener("click", open_close_menu);
document.getElementById("extra_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var gremio_open = document.getElementById("gremio_open")
var cuenta_open = document.getElementById("cuenta_open")
var extra_open = document.getElementById("extra_open")
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}


//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 768) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {
        body.classList.remove("body_move");
        menu_side.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 768) {
        body.classList.add("body_move");
        menu_side.classList.add("menu__side_move");
    }
});