import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	padding: 4rem;
	font-size: 2rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.mainColor};
	text-align: center;
	background: black;

	/* > p:first-of-type {
		font-size: 5rem;
		margin-bottom: 20px;
		color: ${(props) => props.theme.mainColor};
	} */
`;

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 | This page could not be found</title>
			</Head>
			<Container>
				<Image
					src="/images/404.jpg"
					alt="404"
					width="400"
					height="400"
				/>
				<p>This page could not be found.</p>
			</Container>
		</>
	);
}
