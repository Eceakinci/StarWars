const getData = async (apiUrl) => {
    apiUrl = 'https://swapi.dev/api/starships/' + apiUrl
    const api = await fetch(apiUrl)
    const data = await api.json()
    return data
}

export default getData