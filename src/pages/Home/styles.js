import styled from "styled-components";

export const Container = styled.div`
  width: min-content;
  min-width: 420px;
  border-radius: 2px;
  padding: 0 0.5rem 0.7rem 0.7rem;
  background-color: #fff;
`;

export const Pessoa = styled.tr`
  position: relative;
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
    margin-bottom: 8px;

    img {
      margin: 0 2px;
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
      font-weight: 600;
    }
  }
`;
