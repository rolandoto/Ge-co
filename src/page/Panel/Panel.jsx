import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import Product from "../Product/Product";
import "./Panel.css"

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}


const Panel =() =>{

    const [state,setState] = useState("productos")

    return (
        <div className="container-panel" >
                <button className={state  ?`button-one`:"button-" } onClick={() => setState(true)}  >Productos</button>
                <button className={state  ?`button-`:"button-one"} onClick={() => setState(false)}   >Provedores</button>

                {state ? <Product name={"productos"} /> : <Product name={"provedores"} /> }  
        </div>
    )
}

export default Panel 