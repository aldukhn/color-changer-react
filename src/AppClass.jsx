import React from "react";
import colors from "./common/colors";
import "./App.sass";

class AppClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndexColor: 0,
    };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    this.setState({ currentIndexColor: randomIndex });
  }

  handleClick = (index) => {
    document.body.style.backgroundColor = colors[index];
    this.setState({ currentIndexColor: index });
  };

  render() {
    return (
      <div id="app">
        <h1 id="current-color">{colors[this.state.currentIndexColor]}</h1>
        <div className="colors">
          {colors.map((color, index) => (
            <button
              key={`color-${index}`}
              style={{ backgroundColor: color }}
              onClick={() => this.handleClick(index)}
              className={this.state.currentIndexColor === index ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default AppClass;
