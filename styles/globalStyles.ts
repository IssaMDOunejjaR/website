import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		/* width */
		::-webkit-scrollbar {
			width: 10px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background: transparent;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: ${(props) => props.theme.inputBackgroundColor};
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: ${(props) => props.theme.secondaryTextColor};
		}
	}

	html {
		font-size: calc(60% + 0.8vmin);
	}

	body {
		font-family: 'Rubik', sans-serif;
		background-color: ${(props) => props.theme.backgroundColor};
		height: 100vh;
		overflow: hidden;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	h1,h2,h3,h4,h5,h6 {
		color: ${(props) => props.theme.mainColor};
	}

	#__next {
		display: flex;
		height: 100%;
	}
`;

export const Container = styled.div`
	width: 100%;
	overflow-y: auto;
`;

export const Button = styled(motion.button)`
	background-color: transparent;
	color: ${(props) => props.theme.mainColor};
	/* min-width: 200px; */
	border: 2px solid ${(props) => props.theme.mainColor};
	padding: 20px;
	text-align: center;
	position: relative;
	cursor: pointer;
	transition: color 0.3s ease-in-out;
	overflow: hidden;
	text-transform: uppercase;
	letter-spacing: 5px;
	font-weight: 500;
	align-self: flex-start;

	::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: -50px;
		background-color: blue;
		height: 100%;
		background-color: ${(props) => props.theme.mainColor};
		z-index: -1;
		width: 0;
		transform: skewX(-20deg);
		transition: all 0.3s ease-in-out;
	}

	:hover,
	:focus {
		color: white;
	}

	:hover::before,
	:focus::before {
		width: 150%;
	}
`;
