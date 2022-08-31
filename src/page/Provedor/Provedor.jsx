import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import {Link}  from "react-router-dom"

const Provedor =() => {

    const [data, setData] = React.useState();
    const [name, setName] = React.useState("");

    useEffect(() =>{
        fetch("http://localhost:8000/api/auth/getprovedor")
        .then(resp => resp.json())
        .then(data => setData(data))
    },[])

    console.log(data)

    const [product,setProduct] =useState()

    const filtrar=(terminoBusqueda)=>{
        let resultadosBusqueda= data.result?.filter((elemento,index)=>{
            if(elemento.nom_prov.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) 
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
                        placeholder="buscar Provedor"
                        value={name}
                        onChange={hannChange}
                    />
                   
                   <ul className="search" >
                        {product?.map((dt,e) => {
                        return <li key={e}>
                            <Link to={`SeachResult/${dt.cod_prov}`} >{dt.nom_prov}</Link>
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

export default Provedor