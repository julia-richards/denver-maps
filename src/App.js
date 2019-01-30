import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import neighborhoods from "./neighborhoods.json";

console.log(neighborhoods);

const NeighborhoodWriteup = ({ name, writeUp, keyFeats }) => {
  return (
    <React.Fragment>
      <article>
        <h2>{name}</h2>
        <p>{writeUp}</p>
      </article>
      <aside>
        <h4>Key Features</h4>
        <ul>
          {keyFeats.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </aside>
    </React.Fragment>
  );
};
class App extends Component {
  state = {
    activeNeighborhood: null
  };

  handleNeighborhoodClick = neighborhood => {
    this.setState({ activeNeighborhood: neighborhood });
  };

  render() {
    const { activeNeighborhood } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>Logo</p>
        </header>
        <main className="App-main">
          <div id="map">
            <ul>
              {neighborhoods.map(neighborhood => (
                <li
                  key={neighborhood.properties.id}
                  onClick={this.handleNeighborhoodClick.bind(
                    null,
                    neighborhood
                  )}
                >
                  {neighborhood.properties.name}
                </li>
              ))}
            </ul>
          </div>
          <section className="neighborhood-detail">
            {!!activeNeighborhood ? (
              <NeighborhoodWriteup
                name={activeNeighborhood.properties.name}
                writeUp={activeNeighborhood.properties.writeUp}
                keyFeats={activeNeighborhood.properties.keyFeats}
              />
            ) : (
              <h4>Select a neighborhood</h4>
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
