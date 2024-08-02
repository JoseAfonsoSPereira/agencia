import React from "react";
import { FaBus, FaHotel, FaPlane, FaWalking } from "react-icons/fa";
import "./pacote_viagem"

function PacoteViagem({name,valor_anterior,valor_atual,description}){
    return(
        <div className="card-pacote">
        <div className="pacote-header">
          <h3>{name}</h3>
          <div className="preco">
            <span className="preco-anterior">{valor_anterior}</span>
            <span className="preco-atual">{valor_atual}</span>
          </div>
        </div>
        <p>
         {description}
        </p>
        <p>Incluem:</p>
        <ul>
          <li>
            <FaHotel /> Hospedagem em hotéis 4 estrelas
          </li>
          <li>
            <FaPlane /> Passagens aéreas ida e volta
          </li>
          <li>
            <FaWalking /> Passeios guiados nas cidades
          </li>
          <li>
            <FaBus /> Transporte entre as cidades
          </li>
        </ul>
        <button type="button" className="btn-comprar">
          Comprar
        </button>
      </div>
      
    );
}

export default PacoteViagem;