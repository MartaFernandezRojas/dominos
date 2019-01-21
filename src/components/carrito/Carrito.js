import React, { Component } from 'react'
var total=0;

export class Carrito extends Component {

    state = {
      pizzas: []
      };
      componentWillReceiveProps(nextProps) {
        this.setState({ pizzas: nextProps.arrayPizzas });
      }
    
  render() {
return(
    <ul className="navbar-nav mr-auto">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Carrito<p>{this.state.pizzas.length}</p>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#"> <div>
    {this.state.pizzas.map(e=>{
      return <p>{e.name}-{e.precio}€</p>
      total=total+e.precio;
      console.log(total);
    })}
  </div></a>
        </div>
    </li>
    </ul>
)
}
}

export default Carrito;
