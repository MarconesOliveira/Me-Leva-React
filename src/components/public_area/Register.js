import React from "react";
import logoDriver from "../img/new_img/driver.svg";
import logoPerson from "../img/new_img/student.svg";
import logoSchool from "../img/new_img/institution.svg";
import { Link } from "react-router-dom";

export default function Register() {
    return(
        <div>
            <div className="container row mx-auto">
                <h1 className="display-4 mb-5">Escolha uma opção de cadastro:</h1>
                <Link to={"/register/student"} className="col-6 col-sm-4 mx-auto mb-3">
                    <div className="h-100">
                        <div className="bg-light rounded text-center h-100">
                            <button className="btn btn-primary w-100 w-100 mb-3" id="student">Aluno</button>
                            <label htmlFor="student">
                                <img src={logoPerson} className="img-fluid p-4" width="200px" alt=""></img>
                            </label>
                        </div>
                    </div>
                </Link>
                <Link to={"/register/driver"} className="col-6 col-sm-4 mx-auto mb-3">
                    <div className="h-100">
                        <div className="bg-light rounded text-center h-100">
                            <button className="btn btn-primary w-100 mb-3" id="driver">Motorista</button>
                            <label htmlFor="driver">
                                <img src={logoDriver} className="img-fluid p-4" width="200px" alt=""></img>
                            </label>
                        </div>
                    </div>
                </Link>
                <Link to={"/register/institution"} className="col-6 col-sm-4 mx-auto mb-3">
                    <div className="h-100">
                        <div className="bg-light rounded text-center h-100">
                            <button className="btn btn-primary w-100 mb-3" id="institution">Instituição</button>
                            <label htmlFor="institution">
                                <img src={logoSchool} className="img-fluid p-4" width="200px" alt=""></img>
                            </label>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="container row mx-auto">
                <Link className="mx-auto col-4 text-center" to={"/"}>
                    <button className="mx-auto w-100 btn btn-lg btn-secondary mt-3">Voltar</button>
                </Link>
            </div>
        </div>
    );
}