import styled from "styled-components";

export const Efeito = styled.div`
  width: min-content;
  min-width: 450px;
  border-radius: 2px;
  /*box-shadow: 10px 10px 5px #404759;*/
`;

export const Container = styled.div`
  width: min-content;
  min-width: 450px;
  border-radius: 2px;
  border: 1px dashed #404759;
  padding: 0 0.5rem 0.7rem 0.7rem;
  background-color: #fff;
`;

export const Pessoa = styled.tr`
  position: relative;
  width: 420px;
  img {
    position: relative;
  }
  .nome {
    font-family: "Montserrat", sans-serif;
    color: #404759;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 4px;
  }

  .profissao {
    font-family: "Montserrat", sans-serif;
    color: #5aa3af;
    font-size: 13px;
    text-transform: capitalize;
    font-weight: 600;
    margin-top: 4px;
  }
`;

export const Contato = styled.td`
  .email {
    font-family: "Montserrat", sans-serif;
    color: #5aa3af;
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 4px;

    img {
      display: inline-block;
      vertical-align: middle;
    }

    span {
      color: #aaaaaa;
    }
  }

  .endereco {
    font-family: "Montserrat", sans-serif;
    color: #aaaaaa;
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 4px;

    img {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .contato {
    font-family: "Montserrat", sans-serif;
    color: #5aa3af;
    font-size: 13px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 4px;

    img {
      display: inline-block;
      vertical-align: middle;
    }

    span {
      font-weight: 400;
    }
  }
`;
