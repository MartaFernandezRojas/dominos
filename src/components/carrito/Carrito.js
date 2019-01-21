import React, { Component } from 'react'

var precio=0;

export class Carrito extends Component {
    state = {
      pizzas: []
      };
      componentWillReceiveProps(nextProps) {
        this.setState({ pizzas: nextProps.arrayPizzas });
      }
  render() {
    var total=0;
return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Carrito<p>{this.state.pizzas.length}</p>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#"> 
              <div>
                  {this.state.pizzas.map(e=>{
                    precio=parseInt(e.precio);
                    total=total+precio;
                    return <p>{e.name}-{e.precio}€</p>
                  })}
                  <p>Total Pedido:{total} €</p>
              </div>
            </a>
          </div>
      </li>
    </ul>
)
}
}

export default Carrito;
