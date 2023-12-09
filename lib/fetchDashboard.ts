const fetchDashboard = async() => {
    
        const response = await fetch('https://656ddec6bcc5618d3c242133.mockapi.io/api/v1/dashboard')
        
        if(!response.ok){
            throw new Error('failed to fetch')
        }
        return response.json()
    
}

export default fetchDashboard