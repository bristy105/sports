import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('');
    const [cart,setCart] = useState([]);
    
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    const handleDelete = (id) =>{
        console.log(id)
    }

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data?.player));
    },[search])
   

    return (
        <div>
            <h2>This is home</h2>
            <div className="home-container">
                <div className="left-cont">
                    <input onChange={(e)=>handleChange(e)} type="text" className='search' />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players 
                        players={players}
                       
                        cart ={cart}
                        setCart ={setCart}

                        
                        ></Players>
                    </div>
                </div>
                <div className="right-cont">
                    <div className="cart">
                    {cart?.map((p)=>(
                        <div className="cart-info-container">
                            <li>{p?.idPlayer}</li>
                            <button onClick={()=>handleDelete(p?.idPlayer)} className='delete-btn'>x</button>
                      

                        </div>                        
                        
                        
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;