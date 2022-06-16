import Head from 'next/head';
import { AboutMe } from '../components';
import { AnimatePresence } from 'framer-motion';

export default function About() {
	return (
		<>
			<Head>
				<title>About Me</title>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<AboutMe
					initial={{ x: '-100%' }}
					animate={{ x: 0 }}
					exit={{ x: '-100%' }}
					transition={{ type: 'tween' }}
				/>
			</AnimatePresence>
		</>
	);
}
