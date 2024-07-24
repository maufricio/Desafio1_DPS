import React, { useRef } from "react";

const Scam = ({ scams }) => {

    return (
        <div className="scam-container">
            <div>
                <h1 className="scam-title">{scams.titulo}</h1>
            </div>
            
            <div className="scam-descrip-container">
                <section className="scam-decrip-text-container">
                    <h2>DESCRIPCIÓN</h2>
                    <p className="scam-descrip">{scams.descripcion}</p>
                </section>
                <section className="scam-descrip-img-container">
                    <img src={scams.imagen_de_referencia} alt={scams.titulo} className="scam-img" />
                </section>
            </div>
            
            <div className="scam-features-container">
                <h3 className="scam-feature-title">Características</h3>
                <ul>
                    {scams.caracteristicas.map((feature, index) => ( // Iterate over the features of the scam
                        <li className = "scam-feature" key={index}> - {feature}</li>
                    ))}
                </ul>
            </div>
            

            
        </div>
    );
    }

export default Scam;
