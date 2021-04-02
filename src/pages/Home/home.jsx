import React from "react";

import LogoP from "../../assets/img/logo-p.jpg";
import LogoG from "../../assets/img/logo-g.jpg";
import LogoMail from "../../assets/img/icon-mail.jpg";
import LogoWeb from "../../assets/img/icon-web.jpg";
import LogoMap from "../../assets/img/icon-map.jpg";
import LogoPhone from "../../assets/img/icon-phone.jpg";

import * as S from "./styles";

const Home = () => {
  return (
    <>
      <S.Container>
        <table>
          <tr>
            <td>
              <table>
                <S.Pessoa>
                  <td width="320">
                    <img alt="logo da squads com o nome squads" src={LogoP} />
                    <p className="nome">Cintia Mara</p>
                    <p className="profissao"># Product Owner</p>
                  </td>
                  <td>
                    <img alt="logo da squads sem o nome squads" src={LogoG} />
                  </td>
                </S.Pessoa>
              </table>
            </td>
          </tr>
          <tr>
            <S.Contato>
              <p className="email">
                <img alt="logo com símbulo de e-mail " src={LogoMail} />
                cintia.mara@squads.tec.br
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
                <img alt="logo com símbulo de telefone" src={LogoPhone} /> +55
                <span>17 3353 0833</span> | 11 3434 6484
              </p>
            </S.Contato>
          </tr>
        </table>
      </S.Container>
    </>
  );
};

export default Home;
