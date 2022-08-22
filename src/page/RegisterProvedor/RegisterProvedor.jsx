import { useState, useEffect } from "react";

import {useHistory}  from "react-router-dom"

const RegisterProvedor =() =>{

  const navigate = useHistory()

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const handNextLogin =() =>{
    navigate.push("/Login")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registrar Provedor</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nombre de la empresa provedor</label>
            <input
              type="text"
              name="nombre del colaborador"
              placeholder="Nombre de la empresa provedor"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Nombre asesora de la empresa</label>
            <input
              type="text"
              name="Apellido del colaborador"
              placeholder="Nombre asesora de la empresa"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>apellido acesor de la empresa</label>
            <input
              type="password"
              name="Direccion"
              placeholder="apellido acesor de la empresa"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>dia de visita</label>
            <input
              type="password"
              name="Telefono"
              placeholder="dia de visita"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>dia de entrega</label>
            <input
              type="password"
              name="Correo"
              placeholder="dia de  entrega"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>telefono</label>
            <input
              type="password"
              name="Contraseña"
              placeholder="telefono"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>correo</label>
            <input
              type="password"
              name="Contraseña"
              placeholder="correo"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button ">Guardar Provedor</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterProvedor;
