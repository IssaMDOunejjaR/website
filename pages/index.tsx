import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Hi, I`m Issam Ounejjar</title>
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
