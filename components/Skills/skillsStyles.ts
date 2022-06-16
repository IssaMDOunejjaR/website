import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem;
	width: 100%;
	margin: auto 0;
`;

export const Header = styled(motion.h2)`
	font-size: 3rem;
`;

export const Text = styled(motion.p)`
	font-size: 1.1rem;
	margin: 30px 0;
	color: ${(props) => props.theme.textColor};
	line-height: 1.5;
`;

export const Tools = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Item = styled(motion.div)`
	width: 150px;
	height: 150px;
	text-align: center;
	text-transform: uppercase;
	margin: 0 20px 60px;

	p {
		margin-top: 5px;
		color: ${(props) => props.theme.secondaryTextColor};
	}
`;

export const Info = styled(motion.div)`
	margin: 40px 0;

	h3 {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	p {
		color: ${(props) => props.theme.textColor};
		line-height: 2;
		font-size: 1.1rem;

		a {
			color: ${(props) => props.theme.mainColor};
			cursor: pointer;

			:hover {
				text-decoration: underline;
			}
		}

		@media (min-width: 800px) {
			width: 50%;
		}
	}
`;
