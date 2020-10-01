import React, { useState , useEffect }  from 'react';
import StartRaiting from './StartRaiting';
const axios = require('axios');

function App() {
    const [loading, setLoading] = useState(null); 
    const [error, setError] = useState(null);
    const [comicNum, setComicNum] = useState(null);
    const [comic, setComic] = useState(null);
    const [latestComic, setLatestComic] = useState(null);



    const fetchComic = (number) =>{
        setLoading(0);
        axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${number}/info.0.json`)
        .then(response => setComic(response.data))
        .catch(error => { 
            console.log('error', error);
            setError(error);
        })
        .finally(() => setLoading(1));
    };
    const randomComic = () => {
        const numComic = Math.floor(Math.random() * (latestComic - 1)) + 1;
        return (numComic);
    }
    const fetchLatestComic = () => {
        setLoading(0);
        axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json')
            .then(response => {
                setComic(response.data);
                setLoading(1);
                setLatestComic(response.data.num);
            })
            .catch(error => {
                console.log('error', error);
                setLoading(1);
                setError(error);
        });
    }

    useEffect(() => {
        if (comicNum === null){
            fetchLatestComic();
        } else {
            fetchComic(comicNum);
        }
        
    },[comicNum]);


    if (error || !comic) {
        return <div>error</div>;
    }


        return (
            <div className="app">
                <title>{loading == 0 ? 'Loading...' : comic.title}</title>
                <h1>{loading == 0 ? 'Loading...' : comic.title}</h1>
                <div className="buttons">
                <button 
                    disabled={ loading == 0 }
                    onClick={() => setComicNum(1)}
                >First comic</button>
                <button 
                    onClick={() => setComicNum(null)}
                >Latest comic</button>
                <button 
                    disabled={ loading == 0 || comic.num <= 1} 
                    onClick={() => setComicNum(comic.num - 1)}
                >Previous</button>
                <button 
                    disabled={ loading == 0 || comic.num === latestComic}
                    onClick={() => setComicNum(comic.num + 1)}>Next</button>
                <button 
                    disabled={ loading == 0 }
                    onClick={() => setComicNum(randomComic)}>Random</button>
                </div>
                { loading == 0 ? <div className="loading"><div className="spinner"/></div> :
                <div className="comic">
                    <img src={comic.img} title={comic.alt} alt={comic.title}/>
                 </div>
                 }
                 <StartRaiting />
            </div>
        );
    };
export default App;