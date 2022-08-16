import { useState, useEffect } from "react";
import "./Register.css"
import {useNavigate}  from "react-router-dom"

const Register =() =>{

  const navigate = useNavigate()


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
    navigate("/Login")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registrase</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nombre del colaborador</label>
            <input
              type="text"
              name="nombre del colaborador"
              placeholder="Nombre del colaborador"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Apellido del colaborador</label>
            <input
              type="text"
              name="Apellido del colaborador"
              placeholder="Apellido del colaborador"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Direccion</label>
            <input
              type="password"
              name="Direccion"
              placeholder="Direccion"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Telefono</label>
            <input
              type="password"
              name="Telefono"
              placeholder="Telefono"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Correo</label>
            <input
              type="password"
              name="Correo"
              placeholder="Correo"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              name="Contraseña"
              placeholder="Contraseña"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button ">Crear cuenta</button>
          <p>{formErrors.password}</p>
          <button className="fluid ui button yellow" onClick={handNextLogin} >Ya tengo cuenta</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
