import React from 'react'
import Row from '../Row/Row'
import Request from '../../../Utils/Request'

const RowList = () => {
  return (
    <>
      <Row 
      title= "NETFLIX ORGINALS" fetchUrl={Request.fetchNetFlixOriginal}
    //   isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Tv Show" fetchUrl={Request.fetchTvShow} />
      <Row title="Documentary" fetchUrl={Request.fetchDocumentary} />
    </>
  )
}

export default RowList
