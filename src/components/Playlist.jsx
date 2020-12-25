import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removePlaylist } from '../core/actions/MoviesActions';
import { BookmarkRemove } from './Icons';
import { MoviesListContainer } from './styles/MoviesStyled';

const Playlist = () => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { playlist } = moviesStore;

  return (
    !playlist.length
    
      ? <div style={{backgroundColor:"#303030", color:"white", height:"95.6vh"}}><h4 className="pa4 tc"> Você não tem filmes em sua Playlist!</h4></div>
      : <>
        <MoviesListContainer>
          {playlist.map((movie, index) => (
            <article key={index} className="card h-100 flex flex-column"  style={{border: 'none'}}>
              <Link to={`/movies/${movie.id}`} className="pointer" style={{ flexGrow: '1', color:"white", textDecoration:"none" }}>
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="card-body" style={{border: 'none', backgroundColor:"#3d3d3d"}}>
                  <h5 className="card-title"> {movie.title} </h5>
                </div>
              </Link>
              <button style={{border: 'none', backgroundColor:"#3d3d3d", color: "white", borderRadius:"none"}} className="btn-outline-dark card-button-playlist" onClick={() => dispatch(removePlaylist(index))}>
                Remover
              </button>
            </article>
          ))}
        </MoviesListContainer>
      </>
  );
};

export default Playlist;