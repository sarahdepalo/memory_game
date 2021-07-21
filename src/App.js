import React from 'react';
import MemoryCard from './components/MemoryCard';
import './App.css';

function generateDeck() {
  const symbols = ["🐶", "🦊", "🦑", "🐼", "🐧", "🦧", "🐢", "🐔"]
  let deck = [];
  for (let i = 0; i < 16; i++) {
    let card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    deck.push(card);
  }
  shuffle(deck);
  return deck;
}
// More information on this shuffle function for ref: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  console.log(deck)
  return deck;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped === true) {
      return
    }
    let cardToFlip = { ...this.state.deck[cardIndex] }
    cardToFlip.isFlipped = true;
    //returns a new array with old contents and inserts cardIndex
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    //This will also return a new/copied array
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card
    });

    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0]
      let card2Index = newPickedCards[1]
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
        console.log('no match')
      }
      newPickedCards = [];
    }

    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    })
  }

  unflipCards(card1Index, card2Index) {
    let newDeck = this.state.deck.map((card) => {
      return {...card}
    });

    newDeck[card1Index].isFlipped = false;
    newDeck[card2Index].isFlipped = false;

    this.setState({
      deck: newDeck
    })
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        //bind(this, index) is making sure that the function remembers which app instance it is
        pickCard={this.pickCard.bind(this, index)}
      />
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3 className="Subtitle">Match Cards to Win</h3>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }

}

export default App;
