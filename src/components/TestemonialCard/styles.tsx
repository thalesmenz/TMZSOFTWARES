import { styled } from '@stitches/react';

export const CardContainer = styled('div', {
    backgroundColor: '#FFF',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    maxWidth: '500px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  });
  
  export const Header = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  });
  
  export const Avatar = styled('img', {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  });
  
  export const UserInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  });
  
  export const UserName = styled('p', {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '18px',
  });
  
  export const UserTitle = styled('p', {
    margin: 0,
    fontSize: '14px',
  });
  
  export const Testimonial = styled('div', {
    fontStyle: 'italic',
    lineHeight: '1.6',
    paddingTop: '12px',
    borderTop: '1px solid #eaeaea',
  });