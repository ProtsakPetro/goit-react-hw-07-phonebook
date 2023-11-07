import styled from 'styled-components';

export const Label = styled('div')({
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  marginBottom: 20,
});

export const Input = styled('input')({
  height: 34,
  borderWidth: '0px 0px 2px',
  borderBottom: '2px, solid, #8597a3',
  padding: 8,
  fontSize: 16,
  backgroundColor: 'transparent',

});

export const Button = styled('button')({
  width: '100%',
  height: 40,
  fontSize: 16,
  fontWeight: 600,
  transition: 'boxShadow, easy, 300ms; backgroundColor, easy, 300ms',
  cursor: 'pointer',
  borderRadius: 6,
  border:0,
  backgroundColor: 'rgb(105, 105, 105)',
  marginBottom: 25,
  marginTop:15,

  '&:hover, &:focus': {
    
    backgroundColor: 'rgb(128, 128, 128)',
  },

  
});

export const ContactFormContainer = styled.div`
     background-color: rgb(128, 128, 128);
    border-radius: 25px;
	color: #8597a3;
    margin: 15px auto;
    padding: 25px;
    width: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;