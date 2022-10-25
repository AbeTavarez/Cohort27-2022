
const MovieDisplay = (props) => {
    const {movie} = props;
    console.log(movie)
    return(
        <div>
            {/* Title */}
            <h2>{movie.Title}</h2>
            {/* Genre */}
            <h3>{movie.Genre}</h3>
            {/* Poster image */}
            <img src={movie.Poster}/>
            {/* Year */}
            <h4>{movie.Year}</h4>
        </div>
    )
}

export default MovieDisplay;