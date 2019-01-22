import React, { Component } from "react";
import "./carrito.css";
var precio = 0;

export class Carrito extends Component {
  state = {
    pizzas: []
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ pizzas: nextProps.arrayPizzas });
  }
  render() {
    var total = 0;
    return (
      <div className="container-fluid navbar1">
        <div className="row">
          <div className="col-l12">
          <nav className="navbar navbar-expand-lg  bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pedidos 
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#"> 
                    <div>
                      {this.state.pizzas.map(e => {
                      precio = parseInt(e.precio);
                      if(e.tamano=="Grande"){
                        precio=precio*2;
                      }
                      total = total + precio;
                        return (
                          <p>
                            {e.name}-{e.tamano}-{precio}€
                          </p>
                        );
                      })}
                      <p>Total Pedido:{total} €</p>
                    </div>
                    </a>
                  </div>
                </li>
                <li><p>{this.state.pizzas.length}</p></li>
              </ul>
            </div>
          </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrito;
