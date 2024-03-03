const baseURL = "https://sendsnile-server.onrender.com"
const fetchApi = async (Link, method, body) => {
    const url = baseURL + Link;


    return await fetch(url, {
        method: method || 'GET',
        headers:{
            'Content-Type':'appliction/json'
        },
        body: JSON.stringify(body),
    }).then(res => res.json())
    .catch ((error)=>{
        console.error("Error",error.message);
    })
}
   
    export const creatUser =async (body) =>{
        const url="/creatUser" ;
        return await fetchApi(url , 'post ',body)
    }
