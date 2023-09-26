import React, { useContext } from 'react'
import  MyContext   from '../Context/MyContext'
import CardImg from '../Components/CardImg';
import Container from 'react-bootstrap/Container';


const Favoritos = () => {
  const { images } = useContext(MyContext);
  return (
    <>
    <h1 className='title'>Favotitos</h1>
      <Container>
      <div className='content'>
      {images.map((dat, index) =>
        dat.liked ? <CardImg key={index} datImg={dat} /> : null
      )}
      </div>
           
        </Container>
    </>
  )
}
export default Favoritos