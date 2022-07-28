import { Button } from '../../styles/globalStyles';
import { Container, Header, Text, ScrollIndicator } from './greetingStyles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from 'framer-motion';

export default function Greeting() {
	return (
		<Container>
			<Header>
				<motion.span
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					Hi,
				</motion.span>
				<motion.span
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					{"I'm "}
					<strong>Issam,</strong>
				</motion.span>
				<motion.span
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Software Engineer
				</motion.span>
			</Header>
			<Text
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.7 }}
			>
				Full Stack Developer / DevOps
			</Text>
			<a
				href="https://drive.google.com/file/d/1PA5bL4g4zQNxbYt2H7nk-b5D1-ry7-Nx/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				<Button
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.9 }}
				>
					{'Resume'}
					<span></span>
				</Button>
			</a>
			<ScrollIndicator>
				Scroll <ArrowDownwardIcon />
			</ScrollIndicator>
		</Container>
	);
}
