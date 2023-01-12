import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player,cart, setCart}) => {
        
    const {strNationality,strCutout,strPlayer, idPlayer, strDescriptionEN} = player
    const info = {
        idPlayer,
        strPlayer,
        strCutout,
        price: 40
    }
    const handleCart = ()=>{
        console.log('clicked')
        console.log(cart)
        if (cart){
            const newPlayer = [...cart,info]
            setCart(newPlayer)
        } //not empty
        else{
            const newPlayer = [info]
            setCart(newPlayer)
        }

    }
    return (
        <div className='card'>
            <p> {strPlayer}</p>
            <img className='player-img' src= {strCutout} alt="" />
            <p> {strDescriptionEN
            ?strDescriptionEN?.slice(0,70)
            : "lorem dgvdjh sahibhdsbbbj"} </p>
            <button className='card-btn'>Details</button>
            <button onClick={handleCart} className='card-btn'>Add to cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;