import Card from './components/Card'
import './App.css'
import { useState } from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1) + min); 

const playerCard = {
  image: "http://placekitten.com/120/100",
  stats: [{name:'Cuteness', value: getRandomInt(1,999)},
          {name:'Speed', value: getRandomInt(1,999)}]
}

const opponentCard = {
  image: "http://placekitten.com/120/100?image=2",
  stats: [{name:'Cuteness', value: 90},
          {name:'Speed', value: 5}]
}

const createCard = index =>({
  image: "http://placekitten.com/120/100?=" + index,
  stats: [{name:'Cuteness', value: getRandomInt(1,999)},
          {name:'Speed', value: getRandomInt(1,999)},
          {name:'Weight', value: getRandomInt(1,999)}
        ],
  id: crypto.randomUUID()
})

export default function App(){
  
  const [result, setResult] = useState('');

  function compareCards(){
    const playerStats = playerCard.stats[0];
    const opponentStats = opponentCard.stats[0];

    if(playerStats.value === opponentStats.value){
      setResult('Draw');
    }
    else if(playerStats.value > opponentStats.value){
      setResult('Win');
    }
    else{
      setResult('Loss');
    }

  }

  return(
    <>
      <h1>Hello world!</h1>
      <div className='game'>
        <Card card={playerCard}/>
        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <button type='button' onClick={compareCards} >Play</button>
        </div>
        <Card card={opponentCard}/>
      </div>
    </>
  );
}