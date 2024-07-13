import { styled } from "../../../stitches.config";


export const Header = styled("div", {
  width: "100%",
  height: "3.5rem",
  borderBottom: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Centraliza o texto no meio
  padding: "0 20px",
  background: "rgb(17 88 141);",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.2rem",
  letterSpacing: "0.05rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  '@media(min-width: 768px)': { // Estilos responsivos
    height: '4rem',
    fontSize: '1.4rem',
  }
});
