import type { AppProps } from 'next/app';
import { Navbar } from '../components';
import { ThemeComponent } from '../context/theme';
import { GlobalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeComponent>
			<GlobalStyles />
			<Navbar />
			<Component {...pageProps} />
		</ThemeComponent>
	);
}

export default MyApp;
