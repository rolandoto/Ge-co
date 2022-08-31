import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar"
import RegisterProvedor from "../../Service/RegisterProvedor"

const SubirProvedor=() => {

    const navigate = useHistory()

    const [datos, setDatos] = useState({
        namecompany:"",
        namecolaborador: "",
        lastname:"",
        address:"",
        phone:"",
        dia_visita:"",
        dia_entraga:""
  })
  
  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }
  
    const [loading,setLoading] =useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      RegisterProvedor(datos).then(index =>{
          console.log(index)
          setLoading(true)
      }).catch(e => {
          console.log(e)
          setLoading(false)
      })
    };
  
   
    
    

    return (
        
        <div>
        <Sidebar />
            <main className={"expenses"}>
                <div className={"expensesCard"}>
                <section className={"expensesOverview"}>
                <div className="container provedor-subir">
            {loading ?  <h1>Provedor Registrado</h1>:
            <form onSubmit={handleSubmit} className="pro"  >
                <h1>Crear Provedor</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                <div className="field">
                    <label>Nombre de la empresa</label>
                    <input
                    type="text"
                    name="namecompany"
                    placeholder="Nombre del empresa"
                    value={datos.namecompany}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>Nombre del colaborador</label>
                    <input
                    type="text"
                    name="namecolaborador"
                    placeholder="Nombre del colaborador"
                    value={datos.namecolaborador}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>Apellido del colaborador</label>
                    <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido del colaborador"
                    value={datos.lastname}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>Correo</label>
                    <input
                    type="text"
                    name="address"
                    placeholder="Correo"
                    value={datos.address}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>Telefono</label>
                    <input
                    type="text"
                    name="phone"
                    placeholder="Telefono"
                    value={datos.phone}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>dia de visita</label>
                    <input
                    type="text"
                    name="dia_visita"
                    placeholder="dia visita"
                    value={datos.dia_visita}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>dia de entrega</label>
                    <input
                    type="text"
                    name="dia_entraga"
                    placeholder="dia de entrega"
                    value={datos.dia_entraga}
                    onChange={handleInputChange}
                    />
                </div>
                
                <button className="fluid ui button ">Crear Provedor </button>
                </div>
            </form>
                }
            </div>
                </section>
                </div>
            </main>
    </div>
    )
}

export default SubirProvedor