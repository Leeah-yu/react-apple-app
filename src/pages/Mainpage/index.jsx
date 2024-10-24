import { styled } from 'styled-components'
import Row from './../../../components/MovieModal/Row';
import Banner from './../../../components/MovieModal/Banner';
import requests from './../../api/requests';


const Mainpage = () => {
  return (
    <Container>
      <Banner />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row 
        title="Action Movies" 
        id="AM" 
        fetchUrl={requests.fetchActionMovies} 
        />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </Container>  )
}


const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default Mainpage
