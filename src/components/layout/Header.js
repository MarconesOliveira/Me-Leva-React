import React from "react";
import logo from "../img/bus.png";
import { Link } from "react-router-dom";

export default function Header() {
    const playAudio = () => {
        const audio = document.querySelector('audio');
        audio.currentTime = 0;
        if(audio.classList.contains('sound-stopped')){
          audio.play();
          audio.classList.remove('sound-stopped');
          return;
        }
        audio.pause();
        audio.classList.add('sound-stopped');
    }
    return (
        <header>
            <div className="container row justify-content-center align-items-center mx-auto">
                    <div className="col-md-6 mt-3">
                        <h1><a href="/" id="link-logo"><strong id="logo">_Me_Leva</strong></a></h1>
                    </div>
                    <div className="col-md-6 my-3" id="nav-bar">
                        <nav>
                            <Link to={"/"}>
                                <button className="btn btn-outline-info btn-sm mx-1">Home</button>
                            </Link>
                            <Link to={"/login"}>
                                <button className="btn btn-outline-info btn-sm mx-1">Login</button>
                            </Link>
                            <Link to={"/register"}>
                                <button className="btn btn-outline-info btn-sm mx-1">Registro</button>
                            </Link>
                            <button className="btn btn-outline-light btn-sm sound-stopped mx-1" onClick={playAudio}>
                                Sound
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="row text-center justify-content-center align-items-center mt-3" id="img-div">
                    <div className="col-md-8"><h3 id="text">Seu caminho até a Educação</h3></div>
                    <div className="col-md-4"><img src={logo} alt="Ônibus Escolar" id="img-bus"></img></div>
                </div>
        </header>
    );
}