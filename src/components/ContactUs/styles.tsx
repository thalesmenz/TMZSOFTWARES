import { styled } from "../../../stitches.config";

export const TextContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "40px"
  });

  export const title = styled('h1', {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  })

  export const category = styled('p', {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'rgb(69 160 217);',
  })

  export const desc = styled('p', {
    fontSize: '16px',
    maxWidth: "550px",
    textAlign: "center",
    color: '#555',
  })