import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'

const Players = ({players}) => {
    //console.log(players)
    return (
        <div className='players-container'>
            {
                players.map((pd) => (
                  
                    <SinglePlayer 
                    key = {pd?.idPlayer}
                    player = {pd}>

                    </SinglePlayer>

                ))}
        </div>
    );
};

export default Players;