import React from 'react'
import './Card1.css';
import icon1 from '../../Assets/Icon (1).png'
import icon2 from '../../Assets/Icon (3).png'
import icon3 from '../../Assets/Icon (4).png'

export default function Card1() {
    return (
        <>
            <div className='card-text'>
                <h1>Manage your entire community <br />
                    in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='main-card'>
                <div className='card'>
                    <img src={icon1} alt='...' />
                </div>
                <div className='card'>
                    <img src={icon2} alt='...' />
                </div>
                <div className='card'>
                    <img src={icon3} alt='...' />
                </div>

            </div>
        </>
    )
}
