const ENDPOINT ='http://localhost:8000/api/auth/register'

const RegisterService =({namecompany,namecolaborador,lastname,address,phone,email,password})=>{
    return fetch(`${ENDPOINT}`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({namecompany,namecolaborador,lastname,address,phone,email,password})
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
         return resp
    })
}
export default RegisterService