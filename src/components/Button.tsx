
import { styled } from '../../stitches.config';

const Button = styled('button', {
  backgroundColor: '#87CEFA',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$secondary',
  },
});

  
  export default Button;