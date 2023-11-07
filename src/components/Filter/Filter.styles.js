import styled from "styled-components";

export const Form = styled.form`
	padding: 0 20px;
`

export const FormInputContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	padding-top: 25px; // Опечатка: 'PX' повинно бути з маленької літери 'px'
`

export const InputLabel = styled.label`
	color: #8597a3;
	margin-top: 20px;
`

export const InputField = styled.input`
	border: 0;
	z-index: 0;
	background-color: transparent;
	
	font: inherit;
	font-size: 1.125rem;
	padding: 15px 0;
	&:focus {
		cursor: pointer;
			
	}
`

// export const FormButton = styled.button`
// 	height: 40px;
// 	cursor: pointer;
// 	margin-top: 15px;
// 	width: 100%;
// 	background-color: #696969;
// 	border-radius: 6px;
// 	color: #000;
// 	border: 0;
// 	margin-bottom: 25px;
// 	&:focus {
// 		outline: 0;
// 	}
// `

export const FilterInputContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	padding-top: 15px;
`

export const FilterInputLabel = styled.label`
	color: #8597a3;
	margin-top: 20px;
   
`

export const FilterInput = styled.input`
	border: 0;
	background-color: transparent;
	border-bottom: 2px solid #808080;
	font: inherit;
	font-size: 1.125rem;
	padding: 15px 0;

    
	&:focus, &:valid {
		outline: 0;
		border-bottom-color:#808080;
	}
`
