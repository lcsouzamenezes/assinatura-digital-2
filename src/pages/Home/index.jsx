import React, { useState } from "react";
import * as S from "./styles";

//Libs
import SaveIcon from "@material-ui/icons/Save";
import html2canvas from "html2canvas";
import { message } from "antd";
import "file-saver";

//Files
import LogoP from "../../assets/img/logo-p.jpg";
import LogoG from "../../assets/img/logo-g.jpg";
import LogoMail from "../../assets/img/icon-mail.jpg";
import LogoWeb from "../../assets/img/icon-web.jpg";
import LogoMap from "../../assets/img/icon-map.jpg";
import LogoPhone from "../../assets/img/icon-phone.jpg";
import profissoes from "../../assets/json/profissoes.json";

//Conponents
import Header from "../../components/Header";
import Input from "../../components/Input";
import Selected from "../../components/Selected";
import { ButtonIcon } from "../../components/ButtonIcon";

const Home = () => {
  const key = "updatable";

  const [loadings, setLoadings] = useState(false);
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
    setLoadings(true);

    message.loading({ content: "Gerando assinatura...", key });
    setTimeout(() => {
      message.success({ content: "Sucesso!", key, duration: 3 });
      setLoadings(false);
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        canvas.toBlob(function (blob) {
          // Gerando arquivo para download
          window.saveAs(blob, `${pessoa.primeiroNome} ${pessoa.segundoNome}`);
        });
      });
    }, 2000);
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="container">
        <div className="row g-3 mb-5">
          <div className="col-md-6">
            <Input
              name="primeiroNome"
              id="primeiroNome"
              label="Primeiro nome"
              onChange={onChangeForm}
              value={pessoa.primeiroNome}
              required
            />
          </div>

          <div className="col-md-6">
            <Input
              name="segundoNome"
              id="segundoNome"
              label="Segundo nome"
              onChange={onChangeForm}
              value={pessoa.segundoNome}
              required
            />
          </div>

          <div className="col-md-6">
            <Selected
              name="cargo"
              id="cargo"
              label="Área de atuação"
              onChange={onChangeForm}
              value={pessoa.cargo}
              currencies={profissoes}
              required
            />
          </div>

          <div className="col-md-6">
            <Input
              name="email"
              id="email"
              label="E-mail"
              onChange={onChangeForm}
              value={pessoa.email}
              required
            />
          </div>
        </div>
        <div className="container-captura d-flex justify-content-center align-items-center flex-column">
          <S.Efeito>
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
                          <p className="profissao text-capitalize">
                            # {pessoa.cargo}
                          </p>
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
                      <img alt="logo com símbulo de e-mail" src={LogoMail} />{" "}
                      {pessoa.email}
                      <img alt="logo com símbulo de web" src={LogoWeb} />
                      <span> www.squads.tec.br</span>
                    </p>

                    <p className="endereco">
                      <img alt="logo com símbulo de mapa" src={LogoMap} /> Av.
                      Dr Aniloel Nazareth, 5650, São José do Rio Preto - SP
                    </p>
                    <p className="endereco">
                      <img alt="logo com símbulo de mapa" src={LogoMap} /> Av.
                      das Nações Unidas, 8501- 17º andar, São Paulo-SP
                    </p>

                    <p className="contato">
                      <img alt="logo com símbulo de telefone" src={LogoPhone} />{" "}
                      +55
                      <span> (17) 3353-0833</span> |{" "}
                      <span> (11) 3434-6484 </span>
                    </p>
                  </S.Contato>
                </tr>
              </table>
            </S.Container>
          </S.Efeito>
          <div className="container-fluid mt-5 d-flex justify-content-center">
            <ButtonIcon
              label="Salvar"
              type="primary"
              htmlType="submit"
              loadings={loadings}
              icon={<SaveIcon />}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Home;
