export function createMovieUrl(path){
    return process.env.REACT_APP_MOVIE_BASE_URL + "/movie" + path + '?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US';
}

export function createSingleMovieUrl(id){
    return process.env.REACT_APP_MOVIE_BASE_URL + '/movie/' + id + '?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US';
}

export function createMovieCastUrl(id){
    return process.env.REACT_APP_MOVIE_BASE_URL + '/movie/' + id + '/credits?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US';
}

export function createSearchMovieUrl(query){
    return process.env.REACT_APP_MOVIE_BASE_URL + '/search/movie?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&query=' + query;
}

export function log(message){
    console.log(message);
}