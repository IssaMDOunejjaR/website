import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Hi, I`m Issam Ounejjar</title>
			</Head>
			<ThemeProvider attribute="class">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
