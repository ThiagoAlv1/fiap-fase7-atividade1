import styled from "styled-components";

export const LinkExterno =styled.a`
  font-size: 4vh;
  margin-right: 10px;
  color: #3498db; /* Cor desejada para ícone - ajuste conforme necessário */
  text-decoration: none; /* Remove sublinhado do link */
  &:visited {
    color: inherit; /* Mantém a cor igual à cor padrão do ícone */
  }
`

export const EstiloLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.7vh;
  width: auto;
`;