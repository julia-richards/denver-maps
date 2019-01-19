import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import neighborhoods from "./neighborhoods";
class App extends Component {
  state = {
    activeNeighborhood: null,
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
                  key={neighborhood.id}
                  onClick={this.handleNeighborhoodClick.bind(
                    null,
                    neighborhood
                  )}
                >
                  {neighborhood.name}
                </li>
              ))}
            </ul>
          </div>
          <section className="neighborhood-detail">
            {!!activeNeighborhood ? (
              <React.Fragment>
                <article>
                  <h2>{activeNeighborhood.name}</h2>
                  <p>{activeNeighborhood.writeUp}</p>
                </article>
                <aside>
                  <h4>Key Features</h4>
                  <ul>
                    {activeNeighborhood.keyFeats.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </aside>
              </React.Fragment>
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
