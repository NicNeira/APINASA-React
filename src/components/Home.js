import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
    return(
        <div className='home-container'>
            <h1 className='home-title'> WebPage para ver la imagen del dia de la NASA a traves de su API</h1>
            <Link className='link' role={"button"} to="/nasaphoto">Mira las estrellas!</Link>
        </div>
    );
}
