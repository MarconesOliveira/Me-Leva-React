import React from "react";
import { Link } from "react-router-dom";

export default function RegisterDriver() {
    return (
        <div className="container row px-4 py-3 mx-auto">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                <form className="p-4 p-md-5 bg-light rounded"
                    id="form-register-driver">
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="name" name="name"
                            placeholder="Nome do Motorista" required />
                        <label htmlFor="name">Nome do Motorista</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email"
                            required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="password" className="form-control form-control-lg" id="password" name="password"
                            placeholder="Senha" required />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="CPF_number" name="CPF_number"
                            placeholder="CPF" required />
                        <label htmlFor="CPF_number">CPF</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="tel" className="form-control form-control-lg" id="phone" name="phone" placeholder="Telefone" />
                        <label htmlFor="phone">Telefone</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="city" name="city" placeholder="Sua cidade"
                            required />
                        <label htmlFor="city">Sua cidade</label>
                    </div>
                    <div>
                        <h6 className="text-muted">Sua Instituição</h6>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg" id="select_institution" name="select_institution" required></select>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Cadastrar Motorista</button>
                    <Link to={"/register"}>
                        <button className="w-100 btn btn-lg btn-secondary mt-3">Voltar</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}