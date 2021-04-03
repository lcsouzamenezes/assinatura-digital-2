import React, { useState } from "react";
import html2canvas from "html2canvas";
import "file-saver";

import LogoP from "../../assets/img/logo-p.jpg";
import LogoG from "../../assets/img/logo-g.jpg";
import LogoMail from "../../assets/img/icon-mail.jpg";
import LogoWeb from "../../assets/img/icon-web.jpg";
import LogoMap from "../../assets/img/icon-map.jpg";
import LogoPhone from "../../assets/img/icon-phone.jpg";

import * as S from "./styles";
import Header from "../../containers/Header";

const Home = () => {
  const [pessoa, setPessoa] = useState({
    primeiroNome: "",
    segundoNome: "",
    cargo: "",
    email: "",
  });

  const onChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPessoa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      //Imprimi o resultado na DOM
      /*document.body.appendChild(canvas);*/

      canvas.toBlob(function (blob) {
        // Gerando arquivo para download

        window.saveAs(blob, `${pessoa.primeiroNome} ${pessoa.segundoNome}`);
      });
    });
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="container">
        <div className="row g-3 mb-5">
          <div className="col-md-6">
            <label htmlFor="primeiroNome" className="form-label">
              Primeiro nome
            </label>
            <input
              required
              name="primeiroNome"
              value={pessoa.primeiroNome}
              onChange={onChangeForm}
              autoComplete="off"
              type="text"
              className="form-control text-uppercase"
              id="primeiroNome"
              placeholder="Ex: MATHEUS"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="segundoNome" className="form-label">
              Segundo nome
            </label>
            <input
              required
              name="segundoNome"
              value={pessoa.segundoNome}
              onChange={onChangeForm}
              autoComplete="off"
              type="text"
              className="form-control text-uppercase"
              id="segundoNome"
              placeholder="Ex: BERTOLDO"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cargo" className="form-label">
              Cargo
            </label>
            <select
              onChange={onChangeForm}
              id="cargo"
              name="cargo"
              value={pessoa.cargo}
              className="form-select"
            >
              <option selected>Escolha uma opção</option>
              <option>Diretor de Tecnologia</option>
              <option>Líder de Sustentação</option>
              <option>Full Stack Developer</option>
              <option>Mobile Developer</option>
              <option>Diretor de Desenvolvimento</option>
              <option>Front-end Developer</option>
              <option> Back-end Developer</option>
              <option>Product Owner</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              required
              name="email"
              value={pessoa.email}
              onChange={onChangeForm}
              autoComplete="off"
              type="email"
              className="form-control"
              id="email"
              placeholder="Ex: matheus.bertoldo@squads.tec.br"
            />
          </div>
        </div>
        <div className="container-captura d-flex justify-content-center align-items-center flex-column">
          <S.Container id="capture">
            <table>
              <tr>
                <td>
                  <table>
                    <S.Pessoa>
                      <td width="320">
                        <img
                          className="mt-2"
                          alt="logo da squads com o nome squads"
                          src={LogoP}
                        />
                        <p className="nome">
                          {pessoa.primeiroNome} {pessoa.segundoNome}
                        </p>
                        <p className="profissao"># {pessoa.cargo}</p>
                      </td>
                      <td>
                        <img
                          alt="logo da squads sem o nome squads"
                          src={LogoG}
                        />
                      </td>
                    </S.Pessoa>
                  </table>
                </td>
              </tr>
              <tr>
                <S.Contato>
                  <p className="email text-lowercase">
                    <img alt="logo com símbulo de e-mail" src={LogoMail} />
                    {pessoa.email}
                    <img alt="logo com símbulo de web" src={LogoWeb} />
                    <span>www.squads.tec.br</span>
                  </p>

                  <p className="endereco">
                    <img alt="logo com símbulo de mapa" src={LogoMap} /> Av. Dr
                    Aniloel Nazareth, 5650, São José do Rio Preto
                  </p>
                  <p className="endereco">
                    <img alt="logo com símbulo de mapa" src={LogoMap} /> Av. das
                    Nações Unidas, 8501- 17º andar, São Paulo-SP
                  </p>

                  <p className="contato">
                    <img alt="logo com símbulo de telefone" src={LogoPhone} />{" "}
                    +55
                    <span> (17) 3353-0833</span> | <span> (11) 3434-6484</span>
                  </p>
                </S.Contato>
              </tr>
            </table>
          </S.Container>
          <div className="container-fluid mt-3 d-flex justify-content-center">
            <button type="submit" class="btn btn-light">
              Printar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Home;
