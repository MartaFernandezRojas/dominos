import React from "react";
import pizza from "../../pizzas.json";
import "./pizza.css";

function atugusto(name){
 
    if (name=="A tu gusto"){
     return (<div><select name="OS" id="2">
      <option value="elige">Elige Ingrediente</option> 
     <option value="Pollo">Pollo</option> 
     <option value="Cebolla">Cebolla</option> 
     <option value="Pimiento">Pimiento</option>
   </select><button> ingrediente</button></div>)
    }
}

const Pizza = (props) => (
    <div className="row">
        {pizza.map((e, index) => {
          let idd = `tamanio${index}`;
          let idd2 = `ingrediente${index}`;
        
          return (
            <div className="col-l3">
              <div className="card card-hover" style={{ width: "18rem" }}>
                <img className="card-img-top" src={e.imagen} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <h5>{e.precio}€</h5>
                  <p className="card-text">{e.info}</p>
                  <select name="OS" id={idd}>
                    <option value="Mediano">Mediano</option> 
                    <option value="Grande">Grande</option> 
                  </select>
                  {atugusto(e.name)}
                  <button onClick={()=>{
                    e.tamano=document.getElementById(idd).value;
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
