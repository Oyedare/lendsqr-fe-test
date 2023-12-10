const fetchUsers = async() => {
    const url = new URL('https://656ddec6bcc5618d3c242133.mockapi.io/api/v1/users');
    url.searchParams.append('page', '1');
    url.searchParams.append('limit', '10');
   
    const response = await fetch(url.toString(),{ cache: 'no-store' })

    if(!response.ok){
        throw new Error('failed to fetch')
    }
    
    return response.json()
    
}

export default fetchUsers