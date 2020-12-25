import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loading, BookmarkInsert } from './Icons';
import { insertPlaylist } from '../core/actions/MoviesActions';
import { MoviesHeaderContainer, MoviesInfoCard } from './styles/MoviesStyled';
import useMovies from '../services/hooks/Details';

export const MovieDetail = (props) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(s => s.movies);
  const id = props?.match?.params?.id;
  useMovies({ id });

  return (
    !movies[id]
      ? <Loading />
      : <>
      <div style={{backgroundColor: '#3d3d3d', height:'100%'}}>
        <MoviesHeaderContainer>
          <Link to={'/'}>
            <button style={{border: 'none', color:'white' }} className="btn btn-outline-dark">
              Voltar <ArrowLeft />
            </button>
          </Link>
          <button style={{border: 'none', color:'white' }} className="btn btn-outline-dark" onClick={() => dispatch(insertPlaylist(movies[id]))}>
            Adicionar na Playlist <BookmarkInsert />
          </button>
        </MoviesHeaderContainer>
        <MoviesInfoCard className="card">
          <img src={`http://image.tmdb.org/t/p/w500${movies[id].poster_path}`} alt={movies[id].title} style={{ width: '200px', height: '300px' }} />
          <div className="card-body">
            <h5 className="card-title"> {movies[id].title} </h5>
            <p className="card-text"> {movies[id].overview} </p>
            <p className="card-text"> Release Date: {movies[id].release_date} </p>
            <p className="card-text"> Average Vote: {movies[id].vote_average} / 10 </p>
            <a href={`https://www.imdb.com/title/${movies[id].imdb_id}`}> IMDB Page </a>
          </div>
        </MoviesInfoCard>
        </div>
      </>
  );
}
