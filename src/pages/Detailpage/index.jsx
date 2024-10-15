import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from '../../api/axios';
import { imageBasePath } from "../../../components/MovieModal/constant";
import "./Detailpage.css";


const Detailpage = () => {

  const {movieId} = useParams();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      );
    setMovie(response.data);
    }
    fetchData();
  }, [movieId])
  
if(!movie) return null;

  return (
    <div className="container">
      <section>
        <img
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
        className="detail_img"></img>

      </section>
      <h2 className="detail_title"> {movie.title} </h2>
      <h4 className="detail_vote"> 평점 : {movie.vote_average} </h4>
      <p className="detail_overview"> {movie.overview} </p>
      
    </div>
  )
}

export default Detailpage