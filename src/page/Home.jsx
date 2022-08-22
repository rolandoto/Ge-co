import React from "react"
import Expenses from "../components/expenses/expense"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/sidebar/sidebar"

const Home =() =>{

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Expenses/>
        </div>
    )
}
export default Home