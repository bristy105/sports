import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player}) => {
    console.log(player)
    const {strNationality,strCutout,strPlayer, idPlayer, strDescriptionEN} = player
    return (
        <div className='card'>
            <p> {strPlayer}</p>
            <img className='player-img' src= {strCutout} alt="" />
            <p> {strDescriptionEN
            ?strDescriptionEN?.slice(0,70)
            : "lorem dgvdjh sahibhdsbbbj"} </p>
            <button>Details</button>
            <button>Add to cart</button>
            <button>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;