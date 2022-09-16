import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';

export default function NasaPhoto () {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
        
        async function fetchPhoto(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=m1zSSTJGpDyZhN9YLdIb4N5UxKdUMrZcfiGqwmwR'
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    },[]);

    if(!photoData) return <div />;

    return (
        <div className='nasaPhoto-container'>

            
            <div>
                <h1 className='nasaPhoto-title'>{photoData.title}</h1>
                <img
                className='nasaPhoto-img'
                src={photoData.url}
                alt={photoData.title}
            />
                <p className='nasaPhoto-date'>{photoData.date}</p>
                <p className='nasaPhoto-explanation'>{photoData.explanation}</p>
            </div>
            <NavBar />

        </div>
    )
    
}