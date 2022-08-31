import { useState, useEffect } from "react";
import "./Register.css"
import {useHistory}  from "react-router-dom"
import RegisterService from "../../Service/RegisterService";

const Register =() =>{

  const navigate = useHistory()

  const [datos, setDatos] = useState({
    namecompany:"",
    namecolaborador: "",
    lastname:"",
    address:"",
    phone:"",
    email:"",
    password:""
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
    RegisterService(datos).then(index =>{
      console.log(index)
      setLoading(true)
    }).catch(e =>{
      setLoading(false)
    })
  };

 
  const handNextLogin =() =>{
    navigate.push("/Login")
  }

  console.log(datos)

  return (
    <div className="container">
      {loading ?  <h1>registrado</h1>:
      <form onSubmit={handleSubmit}>
        <h1>Registrase</h1>
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
            <label>Direccion</label>
            <input
              type="text"
              name="address"
              placeholder="Direccion"
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
            <label>Correo</label>
            <input
              type="text"
              name="email"
              placeholder="Correo"
              value={datos.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={datos.password}
              onChange={handleInputChange}
            />
          </div>
        
          <button className="fluid ui button ">Crear cuenta</button>
     
          <button className="fluid ui button yellow" onClick={handNextLogin} >Ya tengo cuenta</button>
        </div>
      </form>
        }
    </div>
  );
}

export default Register;
