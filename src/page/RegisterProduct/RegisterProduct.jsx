import { useState, useEffect } from "react";

import {useHistory}  from "react-router-dom"

const RegisterProduct =() =>{
  
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
    <div className="container-flex">
      <form onSubmit={handleSubmit}>
        <h1>Registrar Producto</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nombre del Producto</label>
            <input
              type="text"
              name="nombre del colaborador"
              placeholder="Nombre del Producto"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>codigo de barra</label>
            <input
              type="text"
              name="Apellido del colaborador"
              placeholder="codigo de barra"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>imagen</label>
            <input
              type="password"
              name="Direccion"
              placeholder="imagen"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>provedor</label>
            <input
              type="password"
              name="Telefono"
              placeholder="provedor"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>costo de compra</label>
            <input
              type="password"
              name="Correo"
              placeholder="costo de compra"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>precio de venta</label>
            <input
              type="password"
              name="Contraseña"
              placeholder="precio de venta"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button ">Guardar Producto</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterProduct;
