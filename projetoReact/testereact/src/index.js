import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marca: 'Ford',
      carro: 'Ká',
      cor: 'azul',
      ano: 2008,
    };
  }

  changeColor = () => {
    this.setState({cor: "Vermelho"})
  }

  render() {
    return (
      <div>
        <h1>Meu carro é o {this.state.marca} {this.state.carro}</h1>
        <p>Alguns detalhes do carro - cor: {this.state.cor} - ano:{this.state.ano}</p>
        <button onClick={this.changeColor}>Mudar a cor</button>
      </div>
    )
  }
}


ReactDOM.render(
  <Car />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
