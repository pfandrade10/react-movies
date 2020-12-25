import React from 'react';
import { Link } from 'react-router-dom';
import { TopBarContainer, TopBarLogo, TopBarLink } from './styles/MoviesStyled';

const TopBar = () => {
  return (
    <>
      <TopBarContainer className="navbar">
        <Link to="/movies" style={{ textDecoration: 'none' }}>
          <TopBarLink> Filmes </TopBarLink>
        </Link>
        <Link to="/playlist" style={{ textDecoration: 'none' }}>
          <TopBarLink> Minha Playlist </TopBarLink>
        </Link>
      </TopBarContainer>
    </>
  );
};

export default TopBar;