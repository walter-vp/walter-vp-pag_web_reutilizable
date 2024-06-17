AOS.init();
const header = document.querySelector("header");
const aside = document.querySelector("aside");
const footer = document.querySelector("footer");

/* Despliegue del contenido del elemento HEADER */
header.innerHTML = `
            <div class="logo">
                <div class="logo__contenedor">
                    <h1 class="logo__h1"><p>Dirección General de Planeamiento y Presupuesto</p></h1>
                    <h2 class="logo__h2">Dirección de Desarrollo Organizacional y Modernización</h2>
                </div>
            </div>

            <div class="menu" id="menu">
                <ul class="menu__ul">
                    <li class="menu__li">
                        <a class="menu__a" href="index.html">Modernización GP</a>
                    </li>
                    <li class="menu__li">
                        <a class="menu__a" href="simplificacion_admin.html">Simplificacion Administrativa</a>
                    </li>
                    <li class="menu__li">
                        <a class="menu__a" href="estructura_organica.html">Estructura Orgánica</a>
                    </li>
                    <li class="menu__li">
                        <a class="menu__a" href="gestion_procesos.html">Gestión por Procesos</a>
                    </li>
                    <li class="menu__li">
                        <a class="menu__a" href="evaluacion_riesgos.html">Evaluación de Riesgos</a>
                    </li>
                    <li class="menu__li">
                        <a class="menu__a" href="gestion_calidad.html">Gestion Calidad</a>
                    </li>
                    <li class="menu__li">
                        <a class="menu__a" href="gestion_conocimiento.html">Gestión del conocimiento</a>
                    </li>
                </ul>
            </div>
`;

/* Despliegue del contenido del elemento ASAIDE */
aside.innerHTML = `
    <h2 class="aside__h2">Topicos :</h2>
    <ul class="aside__ul">
        <li class="aside__li">
            <a class="aside__a" href="#Concepto">Concepto</a>
        </li>
        <li class="aside__li">
            <a class="aside__a"href="#Alcances_Generales">Alcances generales</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="#Preguntas_frecuentes">Preguntas frecuentes</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="#Publicaciones_vinculadas">Publicaciones vinculadas</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="contacto.html">Contacto</a>
        </li>                    
    </ul>

    <h2 class="aside__h2">Publicaciones :</h2>
    <ul class="aside__ul">
        <li class="aside__li">
            <a class="aside__a" href="doc_gestion.html">Documentos de Gestión</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="publicaciones.html">Diapositivas</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="publicaciones.html">infografías</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="publicaciones.html">Boletines</a>
        </li>
        <li class="aside__li">
            <a class="aside__a" href="publicaciones.html">Otros</a>
        </li>                    
    </ul>
`;

/* Despliegue del contenido del elemento FOOTER */
footer.innerHTML = `
    <p>
            Dirección de Desarrollo Organizacional y Modernización &copy;2024 Actulizada: 27 de mayo del 2024
    </p>
`;
