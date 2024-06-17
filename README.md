# pag_web_reutilizable

Página web de práctica, que permite reutilizar código HTML, usando solo Javascript.
Esta es la sintaxis.

const [Variable] = document.querySelector("[Elemento HTML]");



const header = document.querySelector("header");

[Variable].innerHTML = `
 
/* Despliegue del contenido del elemento HTML */

`;

Ejemplo:


const footer = document.querySelector("footer");

/* Despliegue del contenido del elemento FOOTER */
footer.innerHTML = `
    <p>
            Dirección de Desarrollo Organizacional y Modernización @2024 Actulizada: 27 de mayo del 2024
    </p>
`;
