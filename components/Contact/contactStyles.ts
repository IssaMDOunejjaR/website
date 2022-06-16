import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Button } from '../../styles/globalStyles';

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem;
	width: 100%;
`;

export const Header = styled(motion.h2)`
	font-size: 3rem;
`;

export const Text = styled(motion.p)`
	font-size: 1.1rem;
	margin: 30px 0;
	color: ${(props) => props.theme.textColor};
	line-height: 1.5;

	@media (min-width: 800px) {
		width: 70%;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FormGroup = styled.div`
	display: flex;
	justify-content: space-between;

	> div {
		width: 49%;
	}
`;

export const FormInput = styled(motion.div)`
	position: relative;

	input {
		padding: 15px;
		background-color: ${(props) => props.theme.inputBackgroundColor};
		border: none;
		margin-bottom: 15px;
		width: 100%;
		font-size: 18px;
		color: ${(props) => props.theme.secondaryTextColor};

		:focus {
			outline: none;
		}
	}

	span {
		display: block;
		height: 2px;
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 0;
		background-color: ${(props) => props.theme.mainColor};
		transition: width 0.3s ease-in-out;
	}

	input:focus + span {
		width: 100%;
	}
`;

export const FormTextArea = styled(motion.div)`
	position: relative;
	width: 100%;

	textarea {
		width: 100%;
		padding: 15px;
		background-color: ${(props) => props.theme.inputBackgroundColor};
		border: none;
		font-size: 18px;
		margin-bottom: 20px;
		resize: vertical;
		color: ${(props) => props.theme.secondaryTextColor};
		min-height: 250px;

		:focus {
			outline: none;
		}
	}

	span {
		display: block;
		height: 2px;
		position: absolute;
		bottom: 18px;
		left: 0;
		width: 0;
		background-color: ${(props) => props.theme.mainColor};
		transition: width 0.3s ease-in-out;
	}

	textarea:focus + span {
		width: 100%;
	}
`;

export const FormButton = styled(Button)`
	align-self: flex-end;
`;
