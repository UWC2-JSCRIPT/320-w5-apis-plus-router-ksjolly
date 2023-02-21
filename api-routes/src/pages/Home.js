import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
    return (

        <div className="Item-box">
            <h1>Home Page!</h1>
            <Link to="/items">See Our Items!</Link>
        </div>
    )
}