import React, {useState} from 'react'


const CrearProyecto = () => {
    const [proyecto, guardarProyecto] = useState({nombre:''})
    const [formulario, setFormulario] = useState(false)
    const {nombre} = proyecto

    const activarFormulario = () => {
        setFormulario(!formulario)
    }
    
    // Guardar en el state los contenidos del input

    const onChange = e =>{
        guardarProyecto({...proyecto,[e.target.name]:e.target.value})
    }

    // const [elemento, gruardarUsuario] = useState({
    //     tareas:'',
    // });
    // const {tareas} = elemento;
    // const onChange = dato =>{
    //     gruardarUsuario({...elemento,[dato.target.name]:''})
    // }

    //Guardar el Proyecto
    const onSubmit = e => {
        e.preventDefault();
        //Validar el formulario
        if(nombre.trim() ===''){
            alert('Todos los campos son obligatorios')
        }
    }
    
    return(
        <>
        <div class="d-grid pb-2">
            <button class="btn btn-outline-light text-danger fw-bold fs-2"
                type="button"
                onClick={activarFormulario}
                >Nuevo Proyecto</button>
        </div>
        { formulario
            ? ( <form onSubmit={onSubmit}>
                    <div className='row'>
                        <div className='col-md-14'>
                            <div className="input-group my-4">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text text-danger"></span>
                                </div>
                                <input 
                                    type="text"
                                    className="from-control fs-1"
                                    placeholder="Nombre Proyecto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center mb-4'>
                            <div className="d-grid">
                                <input type="submit" className="btn btn-success bg-gradient fs-1"
                                // name="tareas"
                                // aria-describedby="basic-addon1"
                                // value={tareas}
                                // onChange={onChange}
                                value="Guardar Tarea"/>
                                
                            </div>
                        </div>
                    </div>
                </form>
                )
            : null
            }
        </>
        )
}
export default CrearProyecto