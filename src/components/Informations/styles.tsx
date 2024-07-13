import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

  '@media (max-width: 768px)': {
    padding: '16px',
  },
});

export const TextContainer = styled('div', {
  marginBottom: '32px',
  textAlign: 'center',
  maxWidth: '600px',

  'p:first-of-type': {
    fontSize: '18px',
    fontWeight: 'bold',
    color: "rgb(69 160 217);",
    margin: '0',
  },

  'h1': {
    fontSize: '36px',
    margin: '16px 0',
    color: '#333',

    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },

  'p:last-of-type': {
    fontSize: '16px',
    color: '#666',
  },
});

export const ContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  gap: '32px',
  marginBottom: "40px",

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '16px',
  },
});

export const ServiceBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '24px',
});

export const TextBox = styled('div', {
  backgroundColor: '#fff',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  'h2': {
    fontSize: '24px',
    marginBottom: '8px',
    color: 'rgb(69 160 217);',

    '@media (max-width: 768px)': {
      fontSize: '20px',
    },
  },

  'p': {
    fontSize: '16px',
    color: '#666',
  },
});

export const ImageBox = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  'img': {
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  }
});

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '24px',
  padding: '16px',
  backgroundColor: '#f1f1f1',
  borderRadius: '8px',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '16px',
  },
});

export const FooterItem = styled('div', {
  textAlign: 'center',

  'p:first-of-type': {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'rgb(69 160 217);',

    '@media (max-width: 768px)': {
      fontSize: '20px',
    },
  },

  'p:last-of-type': {
    fontSize: '16px',
    color: '#666',
  },
});
