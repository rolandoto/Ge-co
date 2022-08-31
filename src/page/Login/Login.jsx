import { useState, useEffect, useCallback, useContext } from "react";
import "./Login.css"
import {useHistory}  from "react-router-dom"
import LoginService from "../../Service/LoginService";
import  AutoProvider  from "../../PrivateRoute/AuthContext";

const Login =() =>{

  const navigate =useHistory()

  const initialValues = { email: "",password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {setJwt} = useContext(AutoProvider)
  const [loading,setLoading] =useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setLoading(true)
    console.log(formValues)
    LoginService(formValues).then(index =>{
      sessionStorage.setItem('jwt',JSON.stringify(index))
      setJwt(index)
      setLoading(false)
      setTimeout(() =>{
        navigate.push('/Producto')
    },3000)
    }).catch(e =>{
      console.log(e)
      setLoading(true)
    })
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
    if (!values.email) {
      errors.email = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } 
    return errors;
  };

  const handBack =() =>{
      navigate.push("/Register")
  }

  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesion</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
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
          <button className="fluid ui button yellow">Iniciar Sesion</button>
          <p>{loading  && <h1>cargando</h1> }</p>
          <button className="fluid ui button yellow" onClick={handBack}>Crear Cuenta</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
