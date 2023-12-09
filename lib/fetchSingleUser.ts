const fetchSingleUser = async( id: string ) => {
    const response = await fetch(`https://656ddec6bcc5618d3c242133.mockapi.io/api/v1/users/${id}`,{
        headers:{
            "Content-Type": 'application/json'
        }
    })
        
    if(!response.ok){
        console.log(response);
        // throw new Error('failed to fetch')
    }
    
    return response.json()
}

export default fetchSingleUser