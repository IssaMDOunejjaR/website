import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	padding: 4rem;
	margin: auto 0;
	/* height: 100%; */
	width: 100%;
`;

export const Header = styled(motion.h2)`
	font-size: 3rem;
`;

export const Text = styled(motion.p)`
	font-size: 1.1rem;
	margin-top: 30px;
	color: ${(props) => props.theme.textColor};
	line-height: 1.5;

	:last-of-type {
		margin-bottom: 30px;
	}

	@media (min-width: 800px) {
		width: 50%;
	}
`;

export const CustomLink = styled(motion.a)`
	color: ${(props) => props.theme.mainColor};
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}
`;
