import React from "react";
import CrearProyecto from '../proyectos/CrearProyecto'
import  MostrarProyectos from '../proyectos/MostrarProyectos'

function MenuVertical () {
    return(
        <aside className="text-center p-4">
            <h2 className="fst-italic text-danger bg-success bg-gradient ">Gestor Proyectos</h2>
            <CrearProyecto/>
            <h3 className="text-ligth border border-botton fw-bold">Panel de Proyectos</h3>
            <MostrarProyectos/>
        </aside>
    )
}

export default MenuVertical