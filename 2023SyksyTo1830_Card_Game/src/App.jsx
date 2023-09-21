import Card from './components/Card'
import './App.css'
const playerCard = {
  image: "http://placekitten.com/120/100",
  stats: [{name:'Cuteness', value: 9},
          {name:'Speed', value: 50}]
}

const opponentCard = {
  image: "http://placekitten.com/120/100?image=2",
  stats: [{name:'Cuteness', value: 90},
          {name:'Speed', value: 5}]
}

export default function App(){
  
  function compareCards(){
    const playerStats = playerCard.stats[0];
    const opponentStats = opponentCard.stats[0];
    let result = '';

    if(playerStats.value === opponentStats.value){
      result = "draw";
    }
    else if(playerStats.value > opponentStats.value){
      result = "win";
    }
    else{
      result = "loss";
    }
    console.log(result);
  }

  return(
    <>
      <h1>Hello world!</h1>
      <Card card={playerCard}/>
      <button type='button' onClick={compareCards} >Play</button>
      <Card card={opponentCard}/>
    </>
  );
}