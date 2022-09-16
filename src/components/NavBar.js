import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul>
                <Link className='link' role={"button"} to="/">Volver</Link>
            </ul>
        </div>
    )
}