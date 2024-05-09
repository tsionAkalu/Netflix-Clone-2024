import React, { useEffect, useState} from 'react'
import "./Row.css"
import localAxios from "../../../Utils/Axios"
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube"

const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() =>{
        (async () =>{
            try {
                console.log(fetchUrl)
                const Request = await localAxios.get(fetchUrl);
                console.log(Request)
                setMovie(Request.data.results);
            }catch (error) {
                console.log("error", error);
            }
        })()

    },[fetchUrl]);
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else{
            movieTrailer(movie?.title || movie.name || movie?.orginal_name)
            .then((url) =>{
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'));

            })

        }
    }
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className= "row_posters">
            {movies?.map((movie, index) => (

                <img 
                onClick={() => handleClick(movie)}

                key={index} src={`${base_url}${isLargeRow ? movie.poster_paht : movie.backdrop_path}`} alt={movie.name} className= {`row_poster ${isLargeRow && "row_posterLarge"}`}/>
            )
            )}
        </div>
        <div style={{padding: '0px 20px'}}>
            {trailerUrl && <YouTube videoId= {trailerUrl} opts={opts} />}

        </div>
      
    </div>
  )
 }

export default Row
