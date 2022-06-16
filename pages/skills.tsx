import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { Layout, SkillsAndTools } from '../components';

export default function Skills() {
	return (
		<>
			<Head>
				<title>Skills & Tools</title>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<Layout>
					<SkillsAndTools
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
