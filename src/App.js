import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Image from "./components/Image";
import characters from "./characters.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters
    };
  }

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const characterList = this.state.characters;

    const characterImage = characterList.map(character => (
      <div className="col-3" position={character.id}>
        <Image
          key={character.id}
          name={character.name}
          image={character.image}
        />
      </div>
    ));

    this.shuffle(characterImage);

    return (
      <div>
        <Nav />
        <Header />
        <Main>
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
