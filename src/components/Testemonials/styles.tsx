import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  background: "#87CEFA",
  padding: "40px",
  '@media(max-width: 768px)': {
    padding: "20px",
  },
});

export const TextContainer = styled('div', {
  marginBottom: '32px',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: "fit-content",
  '@media(min-width: 768px)': {
    padding: '40px',
  },
});

export const Category = styled('p', {
  fontSize: '18px',
  fontWeight: 'bold',
  color: "rgb(69 160 217);",
  margin: '0',
});

export const Desc = styled('p', {
  fontSize: '16px',
  color: '#555',
  margin: '0',
});

export const TestimonialsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginTop: '30px',
  flexWrap: 'wrap',
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
});