const ENDPOINT ='http://localhost:8000/api/auth/insertproduct'

const RegisterProduct =({nameproduct,codebarra,imagen,precioventa,costo_compra,checked})=>{
    return fetch(`${ENDPOINT}`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({nameproduct,codebarra,imagen,precioventa,costo_compra,checked})
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
         return resp
    })
}
export default RegisterProduct