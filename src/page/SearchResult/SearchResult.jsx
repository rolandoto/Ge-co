import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const SearchResult =() =>{
    
    let { id } = useParams();

    const [state,setState] =useState()

    useEffect(() =>{
        fetch(`http://localhost:8000/api/auth/listprovesor/${id}`)
        .then(resp => resp.json())
        .then(data => setState(data))
    },[])

    console.log(state)
    

    return (
        <div>
            <div className="container-table" >
                <table>
                <tr>
                    <th>Nombre del provedor </th>
                    <th>Nombre del colaborador</th>
                    <th>Correo</th>
                    <th>Telofono</th>
                    <th>Dia de la visita</th>
                    <th>Dia de la entraga</th>
                </tr>

                 
                {state?.query.map(index =>{
                    return (
                        <tr>
                            <td>{index.nom_prov}</td>
                            <td>{index.nom_colaborador}</td>
                            <td>{index.direc}</td>
                            <td>{index.tel}</td>
                            <td>{index.dia_visita}</td>
                            <td>{index.dia_entrega}</td>
                        </tr>
                        )
                })}
                </table>
               </div>

<div className="container-table" >
<table className="to" >
  <tr>
    <th>Codigo de barra</th>
    <th>Producto</th>
    <th>Costo de compra</th>
    <th>Precio de venta</th>
    <th>Imagen del producto</th>
  </tr>
  
    {state?.query2.map(index => (
        <tr>
            <th>{index.codigo_barra}</th>
            <th>{index.nom_pro}</th>
            <th>{index.costo_compra}</th>
            <th>{index.costo_venta}</th>
            <th><img className="provedor-image" src={index.imagen} /></th>
        </tr> 
    ))}
  
 
</table>  
</div>  
        </div>


    )

}

export default SearchResult