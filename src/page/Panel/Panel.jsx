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
                
        </div>
    )
}

export default Panel 