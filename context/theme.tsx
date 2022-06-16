import { ThemeProvider, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		mainColor: string;
		backgroundColor: string;
		boxBackgroundColor: string;
		textColor: string;
		secondaryTextColor: string;
		inputBackgroundColor: string;
	}
}

export const ThemeComponent = ({
	children,
}: {
	children: JSX.Element | JSX.Element[] | string;
}) => {
	const defaultTheme: DefaultTheme = {
		mainColor: '#F24C4C',
		backgroundColor: '#1D1D1D',
		boxBackgroundColor: '#181818',
		textColor: 'white',
		secondaryTextColor: '#ABABAB',
		inputBackgroundColor: '#2B2B2B',
	};

	return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
