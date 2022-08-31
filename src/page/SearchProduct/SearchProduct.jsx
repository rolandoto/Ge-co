import React,{useState,useEffect} from "react" 
import {useParams} from "react-router-dom"


function comparar ( a, b ){ return a - b; }

const SearchProduct =() => {

    let { id } = useParams();

    const [state,setState] =useState()

    useEffect(() =>{
        fetch(`http://localhost:8000/api/auth/listmotel/${id}`)
        .then(resp => resp.json())
        .then(data => setState(data))
    },[])

    console.log(state)
    return (
       <div>

            <div className="container-table" >
                <table>
                <tr>
                    <th>Producto</th>
                    <th>Precio Venta</th>
                </tr>
                {state?.result?.query.map(index =>{
                    return (
                        <tr>
                            <td> {index.nom_pro}</td>
                            <td>{index.precio_venta}</td>
                        </tr>
                    )
                })}
                
                </table>
               </div>
               <div className="container-table" >
            <table className="to" >
            <tr>
                <th>Item</th>
                <th>Provedor</th>
                <th>Costo de compra</th>
                <th>Dia de la visita</th>
                <th>dia de la entrega</th>
            </tr>
            
    {state?.result?.query2.map((index,e) => (
        <tr  key={e}  className={ e==0 ? "line-green":null}  >
            <th>{e}</th>
            <th>{index.nom_prov}</th>
            <th>{index.costo_compra}</th>
            <th>{index.dia_visita}</th>
            <th>{index.dia_entrega}</th>
        </tr> 
    ))}
  
 
</table>  
</div>  
       </div>
    )

}

export default SearchProduct