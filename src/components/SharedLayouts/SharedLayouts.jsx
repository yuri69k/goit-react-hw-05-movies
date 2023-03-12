import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link,Title} from './SharedLayouts.styled';
import { Loader } from '../Loader/Loader';
import { GiFilmSpool } from 'react-icons/gi';

export const SharedLayout = () => {
  
  return (
    <Container>
      <Header>     
        
        <nav>
          <Link to="/" end onClick={e => e.currentTarget.blur()}>
            Home
          </Link>
          <Link to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </Link>
        </nav>
         <Logo >
            <GiFilmSpool color={"#F66B0E"} size={50} />
              <Title>Filmoteka</Title>
        </Logo >
        
      
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
