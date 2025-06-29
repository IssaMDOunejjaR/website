import type { NextPage } from 'next';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
	return (
		<>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
};

export default Home;
