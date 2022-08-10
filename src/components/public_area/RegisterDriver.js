import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterDriver() {
    const [institutions, setInstitutions] = useState([]);
    const [institutionID, setInstitutionID] = useState();
    const [formData, setFormData] = useState({});

    const handleChange = (evt) => {
        if(evt.target.id === "select_institution") {
            setInstitutionID(evt.target.value);
            return;
        }
        setFormData(prevState => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }));
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        if(institutionID === undefined) return; 
        console.log(`http://localhost:3000/signup_driver/${institutionID}`);
        const response = await axios({
            url: `http://localhost:3000/signup_driver/${institutionID}`,
            method: "POST",
            data: formData,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        console.log(response.data);
    }

    useEffect(() => {
        const getInstitutionsAvailable = async () => {
            const response = await axios.get("http://localhost:3000/list_institution/");
            const institutionsAvailable = response.data.data.map(elem => (
                <option value={elem.id} key={elem.id}>{elem.name}</option>
            ));
            setInstitutions(institutionsAvailable);
            setInstitutionID(response.data.data[0].id);
        }
        getInstitutionsAvailable();
    }, []);

    return (
        <div className="container row px-4 py-3 mx-auto">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                <form onSubmit={handleSubmit} className="p-4 p-md-5 bg-light rounded"
                    id="form-register-driver">
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="name" name="name"
                            placeholder="Nome do Motorista" required onChange={handleChange} />
                        <label htmlFor="name">Nome do Motorista</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email"
                            required onChange={handleChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="password" className="form-control form-control-lg" id="password" name="password"
                            placeholder="Senha" required onChange={handleChange} />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="CPF_number" name="CPF_number"
                            placeholder="CPF" required onChange={handleChange} />
                        <label htmlFor="CPF_number">CPF</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="tel" className="form-control form-control-lg" id="phone" name="phone" placeholder="Telefone" onChange={handleChange} />
                        <label htmlFor="phone">Telefone</label>
                    </div>
                    <div className="form-floating text-muted mb-3">
                        <input type="text" className="form-control form-control-lg" id="city" name="city" placeholder="Sua cidade"
                            required onChange={handleChange} />
                        <label htmlFor="city">Sua cidade</label>
                    </div>
                    <div>
                        <h6 className="text-muted">Sua Instituição</h6>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg" id="select_institution" name="select_institution" required onChange={handleChange} >
                            {institutions}
                        </select>
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