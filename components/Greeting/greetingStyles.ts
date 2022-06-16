import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
	0%   { transform: translateY(0); }
	50%  { transform: translateY(-20px); }
	100% { transform: translateY(0); }
`;

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	width: 100%;
	padding: 4rem;
`;

export const Header = styled.h1`
	display: flex;
	flex-direction: column;
	font-size: 5rem;
	color: ${(props) => props.theme.textColor};

	strong {
		color: ${(props) => props.theme.mainColor};
	}
`;

export const Text = styled(motion.p)`
	color: ${(props) => props.theme.secondaryTextColor};
	font-size: 1.2rem;
	margin: 10px 0 30px;
`;

export const ScrollIndicator = styled.div`
	color: ${(props) => props.theme.textColor};
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	text-transform: uppercase;
	letter-spacing: 3px;
	padding: 50px;

	svg {
		margin-top: 25px;
		animation: ${bounce} 2s linear infinite;
	}
`;
