const ENDPOINT ='http://localhost:8000/api/auth/insertprovedores'

const RegisterProvedor =({namecompany,namecolaborador,lastname,address,phone,dia_visita,dia_entraga})=>{
    return fetch(`${ENDPOINT}`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({namecompany,namecolaborador,lastname,address,phone,dia_visita,dia_entraga})
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
         return resp
    })
}
export default RegisterProvedor