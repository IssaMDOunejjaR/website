import Head from 'next/head';
import { AboutMe, Layout } from '../components';
import { AnimatePresence } from 'framer-motion';

export default function About() {
	return (
		<>
			<Head>
				<title>About Me</title>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<Layout>
					<AboutMe
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						exit={{ x: '-100%' }}
						transition={{ type: 'tween' }}
					/>
				</Layout>
			</AnimatePresence>
		</>
	);
}
