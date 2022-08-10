import React from "react";
import Map from "./Map";

export default function Home() {
    return(
        <div className="container row align-items-center mb-5 mx-auto">
            <div className="col-lg-6 my-3">
                <h1 className="display-4">Bem vindo ao <span id="logod">_Me_Leva</span></h1>
                <p className="lead">
                    Este é um sistema desenvolvido para auxiliar quem precisa de transporte público para ter acesso a
                    Educação.
                </p>
                <p className="lead">
                    Por meio do compartilhamento de informações, ajudamos jovens e adultos a encontrar seus caminhos até o
                    futuro!
                </p>
            </div>
            <div className="col-lg-6 my-3 overflow-hidden shadow-lg">
                <div id="map">
                    <Map />
                </div>
            </div>
        </div>
    );
}