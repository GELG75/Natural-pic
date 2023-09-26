import React, { useContext} from 'react'
import MyContext from '../Context/MyContext';
import CardImg from '../Components/CardImg';
import Container from 'react-bootstrap/Container';
import './Home.css'

const Home = () => {
    const { images } = useContext(MyContext);

    return (
        <>
            <h1 className='title'>Natural Pic</h1>
        <Container>
                <div className='content'>
                {images.map((dat, index) => (
                    <CardImg key={index} datImg={dat} index={index} />
                ))}
                 </div>
        </Container>
        </>
    )
}
export default Home