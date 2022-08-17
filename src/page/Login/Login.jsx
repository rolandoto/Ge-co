import { useState, useEffect, useCallback } from "react";
import "./Login.css"
import {useHistory}  from "react-router-dom"

const Login =() =>{

  const navigate =useHistory()

  const initialValues = { username: "",password: "" };
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
    login()
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
      navigate.push("/Register")
  }

  const login = useCallback(() =>{
        sessionStorage.setItem('jwt',JSON.stringify("index"))
        setTimeout(() =>{
          navigate.push('/Panel')
        },3000)
  },[])

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
              name="username"
              placeholder="Nombre"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button yellow">Iniciar Seccion</button>
          <p>{formErrors.password}</p>
          <button className="fluid ui button yellow" onClick={handBack}>Crear Cuenta</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
