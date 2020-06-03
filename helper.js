const url = 'https://striveschool.herokuapp.com/api/movies/'

const getCategories = async () => {
    // fetch it
    const response = await fetch(url, {
        headers: {
            "Authorization": "Basic " + btoa("user31:testPassword123")
        }
    })
    // transform it
    return await response.json()
}

const getCategory = async (categoryName) =>{
    // fetch the movies from a single category
    const response = await fetch(url + categoryName, {
        headers: {
            "Authorization": "Basic " + btoa("user31:testPassword123")
        }
    }) // /api/movies/horror
    // transfrom them into json
    return await response.json()
    // return them to the caller
}

const getMovie = async (movieId) => {
    const response = await fetch(url + "id/" + movieId, {
        headers: {
            "Authorization": "Basic " + btoa("user31:testPassword123")
        }
    }) 
    return await response.json()
}

const createMovie = async (movie) => {
    // POST the movie to the api
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa("user31:testPassword123"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    }) 

    // transfrom them into json
    return await response.json()
    // return the response
}

const updateMovie = async (movie, movieId) => {
    // PUT on the API for the given id
    const response = await fetch(url + movieId, {
        method: "PUT",
        headers: {
            "Authorization": "Basic " + btoa("user31:testPassword123"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    }) 
    // transfrom them into json
    return await response.json()
    // return the response
}

const deleteMovie = async (movieId) => {
    // DELETE on for the given ID
    const response = await fetch(url + movieId, {
        method: "DELETE",
        headers: {
            "Authorization": "Basic " + btoa("user31:testPassword123"),
        }
    }) 
    // transfrom them into json
    return await response.json()
}