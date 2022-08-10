import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterInstitution() {
    const [formData, setFormData] = useState({});
    const handleChange = (evt) => {
        setFormData(prevState => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }));
    }
    const handleSubmit = async(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        try {
            const response = await axios({
                url: "http://localhost:3000/signup_institution/",
                method: "POST",
                data: formData,
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            if(response.data.data.has_error) return;
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container row px-4 py-3 mx-auto">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                <form className="p-4 p-md-5 bg-light rounded"
                    id="form-register-institution" onSubmit={handleSubmit}>
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="name" name="name"
                            placeholder="Nome da Instituição" required onChange={handleChange}/>
                        <label htmlFor="name">Nome da Instituição</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="tel" className="form-control form-control-lg" id="phone" name="phone" placeholder="Telefone" onChange={handleChange}/>
                        <label htmlFor="phone">Telefone</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email"
                            required onChange={handleChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="CNPJ_number" name="CNPJ_number"
                            placeholder="CNPJ" required onChange={handleChange} />
                        <label htmlFor="CNPJ_number">CNPJ</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="password" className="form-control form-control-lg" id="password" name="password"
                            placeholder="Senha" required onChange={handleChange} />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="d-flex">
                        <div className="form-floating text-muted mb-3">
                            <input type="text" className="form-control form-control-lg px-3" id="latitude" name="latitude"
                                placeholder="Latitude" required onChange={handleChange} />
                            <label htmlFor="latitude">Latitude</label>
                        </div>
                        <div className="form-floating text-muted mb-3">
                            <input type="text" className="form-control form-control-lg" id="longitude" name="longitude"
                                placeholder="longitude" onChange={handleChange} required />
                            <label htmlFor="Longitude">Longitude</label>
                        </div>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Cadastrar Instituição</button>
                    <Link to={"/register"}>
                        <button className="w-100 btn btn-lg btn-secondary mt-3">Voltar</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}