import { useCallback, useEffect, useState } from 'react';
import axios from '../../src/api/axios';     // 경로 수정
import './Row.css';

const Row = ({title, id, fetchUrl}) => {

  const [movies, setMovies] = useState([]);
 //영화정보 가져온 뒤 화면에다가 보여주기 


  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl])


  useEffect(() => { 
    fetchMovieData();
  }, [fetchMovieData])

  return (
    <>
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie) =>(
            <img 
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}    
            />
          ))}
      </div>

          <div className='slider__arrow-right'>
            <span className='arrow'>
              {">"}
            </span>
          </div>

      </div>
    </div>
    </>
  )
}

export default Row;