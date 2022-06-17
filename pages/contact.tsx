import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { ContactMe, Layout } from '../components';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Me</title>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<Layout>
					<ContactMe
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
