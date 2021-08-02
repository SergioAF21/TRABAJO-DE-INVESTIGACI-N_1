import React from 'react'
import Proyecto from './Proyecto'


const MostrarProyectos = () => {
    const proyectos = [
        {nombre: 'Tienda virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de un sitio web'}
          
    ]
    return(
        <div className="list-group">
            {proyectos.map(proyecto => (
                <Proyecto proyecto={proyecto}/>
            ))}
        </div>
    )
}
export default MostrarProyectos
