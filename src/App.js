import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Image from "./components/Image";
import characters from "./characters.json";
import quotes from "./quotes.json";
import ScoreBoard from "./components/Score";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      score: 0,
      topScore: 0
    };
  }

  addToClicked = id => {
    this.setState(prevState => ({
      clicked: [...prevState.clicked, id]
    }));
  };

  updateScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  updateTopScore = score => {
    if (score >= this.state.topScore) {
      this.setState(prevState => ({ topScore: prevState.topScore + 1 }));
    }
  };

  checkClicked = id => {
    const clickedImageId = id;
    this.addToClicked(clickedImageId);

    if (this.state.clicked.indexOf(clickedImageId) === -1) {
      console.log(
        "Image " + clickedImageId + " is not in the 'state.clicked' array"
      );
      this.updateScore();
      this.updateTopScore(this.state.score);
    } else {
      console.log(
        "Image " + clickedImageId + " is already in the 'state.clicked' array"
      );
      this.setState({ clicked: [], score: 0 });
    }

    if (this.state.score + 1 === 12) {
      console.log("You Won!");
      this.setState({ clicked: [], score: 0 });
    }
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const characterList = characters;

    const characterImage = characterList.map(character => (
      <div className="col-3" position={character.id}>
        <Image
          checkClicked={this.checkClicked}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
        />
      </div>
    ));

    const characterQuote = quotes;

    this.shuffle(characterQuote);

    this.shuffle(characterImage);

    return (
      <div>
        <Nav>
          <ScoreBoard score={this.state.score} topScore={this.state.topScore} />
        </Nav>
        <Header />
        <Main>
          <Modal score={this.state.score} quote={characterQuote[0]} />

          <div className="row game-row">
            {characterImage[0]}
            {characterImage[1]}
            {characterImage[2]}
            {characterImage[3]}
          </div>

          <div className="row game-row">
            {characterImage[4]}
            {characterImage[5]}
            {characterImage[6]}
            {characterImage[7]}
          </div>

          <div className="row game-row">
            {characterImage[8]}
            {characterImage[9]}
            {characterImage[10]}
            {characterImage[11]}
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
