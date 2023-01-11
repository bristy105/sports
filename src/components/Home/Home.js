import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('');
    
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data?.player));
    },[search])
    //console.log(players)

    return (
        <div>
            <h2>This is home</h2>
            <div className="home-container">
                <div className="left-cont">
                    <input onChange={(e)=>handleChange(e)} type="text" className='search' />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players players={players}></Players>
                    </div>
                </div>
                <div className="right-cont">
                    <div className="cart">Player cart</div>
                </div>
            </div>
        </div>
    );
};

export default Home;