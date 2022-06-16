import { Container } from './layoutStyles';

export default function Layout({
	children,
}: {
	children: JSX.Element | JSX.Element[] | string;
}) {
	return <Container>{children}</Container>;
}
