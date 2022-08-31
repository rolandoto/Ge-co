import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";

const Product =() =>{

  const [data, setData] =useState();
  const [name, setName] = useState("");

    useEffect(() =>{
        fetch("http://localhost:8000/api/auth/getProductos")
        .then(resp => resp.json())
        .then(data => setData(data))
    },[])

    console.log(data)

    const [product,setProduct] =useState()

    const filtrar=(terminoBusqueda)=>{
        let resultadosBusqueda= data.result?.filter((elemento,index)=>{
            if(elemento.nom_pro.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())||
            elemento.codigo_barra.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) 
            ){
            return elemento;
            }
        });
        setProduct(resultadosBusqueda);
        } 

    const hannChange=(e) =>{
        setName(e.target.value)
        filtrar(name)
    }

  return (
    <div>
    <Sidebar />
    <main className={"expenses"}>
        <div className={"expensesCard"}>
        <section className={"expensesOverview"}>
        <div className="App">
            <input
                type="text"
                placeholder="buscar Productos"
                value={name}
                onChange={hannChange}
            />
           
           <ul className="search" >
                {product?.map((dt,e) => {
                return <li key={e}>
                    <Link to={`SeachResultProduct/${dt.cod_prod}`} >
                     <span>{dt.nom_pro}</span> </Link>
                        </li>;
                })}
            </ul>
            </div>
        </section>
        </div>
    </main>
</div>  
  )

}

export default Product