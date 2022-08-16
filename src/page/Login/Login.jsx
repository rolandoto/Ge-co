import { useState, useEffect } from "react";
import "./Login.css"
import {useNavigate}  from "react-router-dom"

const Login =() =>{

  const navigate =useNavigate()

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

  const handBack =() =>{
      navigate("/Register")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesion</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="text"
              name="Apellido del colaborador"
              placeholder="Contraseña"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button yellow">Iniciar Seccion</button>
          <p>{formErrors.password}</p>
          <button className="fluid ui button yellow" onClick={handBack}  >Crear Cuenta</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
