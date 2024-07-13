import { styled } from '@stitches/react';

export const FormContainer = styled('div', {
  maxWidth: '600px',
  width: '100%',
  backgroundColor: 'rgb(227 249 255);',
  padding: '24px',
  border: '5px solid #87CEFA',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '0 auto',
});

export const FormGroup = styled('div', {
  marginBottom: '16px',
});

export const Label = styled('label', {
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '8px',
});

export const Input = styled('input', {
  width: '100%',
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  ':focus': {
    outline: 'none',
    borderColor: '#0070f3',
  },
});

export const TextArea = styled('textarea', {
  width: '100%',
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px',
  ':focus': {
    outline: 'none',
    borderColor: '#0070f3',
  },
});
