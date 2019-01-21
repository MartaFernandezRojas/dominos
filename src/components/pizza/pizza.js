import React from "react";
import pizza from "../../pizzas.json";
import "./pizza.css";



const Pizza = (props) => (
    <div className="row">
        {pizza.map(e => {
          return (
            <div className="col-l3">
              <div className="card card-hover" style={{ width: "18rem" }}>
                <img className="card-img-top" src={e.imagen} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <h5>{e.precio}€</h5>
                  <p className="card-text">{e.info}</p>
                  <select name="OS" id="tamanio">
                    <option value="Mediano">Mediano</option> 
                    <option value="Grande">Grande</option> 
                  </select>
                 
                  <button onClick={()=>{
                    e.tamano=document.getElementById("tamanio").value;
                    props.anadir(e);
                    }} className="btn btn-primary">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          );
        })}

    </div>
);

export default Pizza;
