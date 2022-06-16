import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { ContactMe } from '../components';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Me</title>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<ContactMe
					initial={{ x: '-100%' }}
					animate={{ x: 0 }}
					exit={{ x: '-100%' }}
					transition={{ type: 'tween' }}
				/>
			</AnimatePresence>
		</>
	);
}
