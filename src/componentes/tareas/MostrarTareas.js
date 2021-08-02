import React, {Fragment} from "react";
import Tarea from './Tarea'


const MostrarTareas = () => {
    const tareas = [
        {nombre: 'Elegir Ssitema Operativo', estado:true},
        {nombre: 'Elegir base de datos', estado:false},
        {nombre: 'Elegir lenguaje',estado:true},
        {nombre: 'Elegir Frameworks', estado:false}
    ]
    return(
        <Fragment>
        <div className="d-flex justify-content-center">
            <h2><span className="text-danger ">Proyecto:</span>Comercio Electronico</h2>  
                <button type="button" className="btn btn-outline-danger h=50 m=2">Eliminar Proyecto</button>
        </div>   
            { tareas.length === 0
                ? (<h1>No hay Tareas</h1>)
                : (<div className="table-responsive">
                    <table className="table" id="tabla">
                        <thead>
                            <tr>
                                <th scope="col">Tarea</th>
                                <th scope="col">Estados</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tareas.map(tarea =>(
                                <Tarea tarea={tarea}/>
                            ))}
                        </tbody>
                    </table>
                </div>)
            }
        </Fragment>
    )
}

export default MostrarTareas

