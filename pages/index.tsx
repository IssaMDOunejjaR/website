import type { NextPage } from 'next';
import { Container } from '../styles/globalStyles';
import {
	AboutMe,
	ContactMe,
	Greeting,
	MyWork,
	SkillsAndTools,
} from '../components';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>{"Hi, I'm Issam Ounejjar"}</title>
			</Head>
			<Container>
				<Greeting />
				<AboutMe />
				<h2 style={{ fontSize: '3rem', margin: '4rem' }}>
					Projects i worked on:
				</h2>
				<MyWork />
				<SkillsAndTools />
				<ContactMe />
			</Container>
		</>
	);
};

export default Home;
