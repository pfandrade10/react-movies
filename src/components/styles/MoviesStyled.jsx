import styled from 'styled-components'

export const TopBarContainer = styled.nav`
  background: #303030;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const TopBarLogo = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: 1rem;
`;

export const TopBarLink = styled.span`
  color: white;
  padding: 0.5rem;
  &:hover {
    font-weight: 500;
  }
`;

export const MoviesHeaderContainer = styled.header`
  padding: 1rem;
  background: #303030;
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 9000;
`;

export const MoviesListContainer = styled.main`
  padding: 1rem;  
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: stretch;
  background: #303030;
`;

export const MoviesListCard = styled.article`
  height: 100%;
  cursor: pointer;
  border: none;
  background: #3d3d3d;
  color: white;
`;

export const MoviesInfoCard = styled.article`
  margin: 1rem;
  display: flex;
  flex-flow: row;
  border: none;
  color: white;
  background: #303030;

`;