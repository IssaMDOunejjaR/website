import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(5px);
	opacity: 0;
	transition: opacity 0.3s ease-in;

	h4 {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	a {
		color: ${(props) => props.theme.textColor};
		margin-top: 10px;

		svg {
			font-size: 2rem;
		}
	}
`;

interface ItemProps {
	url: string;
}

export const Item = styled(motion.div)<ItemProps>`
	height: 250px;
	background-image: ${({ url }) => `url('${url}')`};
	background-size: cover;
	background-position: center;

	:hover ${Overlay} {
		opacity: 1;
	}
`;
