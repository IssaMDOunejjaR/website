import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { Layout, MyWork } from '../components';

export default function Work() {
	return (
		<>
			<Head>
				<title>My Work</title>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<Layout>
					<MyWork
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
