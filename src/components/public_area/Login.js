import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useEffect({});

    const handleChange = (evt) => {
        setFormData(prevState => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }));
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        console.log(formData.select_institution);
        const response = await axios({
            url: `http://localhost:3000/signup_student/${institutionID}`,
            method: "POST",
            data: formData,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        console.log(response.data);
    }
    
    return(
        <div className="container row px-4 py-3 mx-auto">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                <form className="p-4 p-md-5 border bg-light rounded" id="form-login">
                    <div>
                        <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Usuário"
                            required></input>
                        <label htmlFor="email">Usuário</label>
                    </div>
                    <div>
                        <input type="password" className="form-control form-control-lg" id="password" name="password"
                            placeholder="Senha" required></input>
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div>
                        <h3 className="lead text-dark">Entrar como:</h3>
                        <div className="col-6 text-dark text-start">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="loginTypeSelector" id="loginTypeSelector1"
                                    value="student" required></input>
                                <label className="form-check-label" htmlFor="loginTypeSelector1">
                                    Aluno
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="loginTypeSelector" id="loginTypeSelector2"
                                    value="driver"></input>
                                <label className="form-check-label" htmlFor="loginTypeSelector2">
                                    Motorista
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="loginTypeSelector" id="loginTypeSelector3"
                                    value="institution"></input>
                                <label className="form-check-label" htmlFor="loginTypeSelector3">
                                    Instituição
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Entrar</button>
                    <Link to={"/"}>
                        <button className="w-100 mx-auto btn btn-lg btn-secondary mt-3">Voltar</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}