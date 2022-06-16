import Link from 'next/link';
import { Container, Header, Text, CustomLink } from './aboutStyles';

export default function AboutMe({ ...restOfProps }) {
	return (
		<Container {...restOfProps}>
			<Header
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
			>
				About My Self
			</Header>
			<Text
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				I&apos;m a Full Stack Developer located in Morocco. I have a
				serious passion for everything related to IT and Coding. I love
				building things that live in the internet. Currently, I&apos;m
				focused on building Web Applications.
			</Text>
			<Text
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				My interest in web development started back in 2016 when I
				decided to try creating some E-commerce websites — turns out
				hacking together a custom reblog button taught me a lot about
				HTML & CSS & Javascript!
			</Text>
			<Text
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.6 }}
			>
				Interested in the entire FullStack spectrum and working on
				ambitious projects with positive people.
			</Text>
			<Link href="contact">
				<CustomLink
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8 }}
				>
					{"Let's make something !"}
				</CustomLink>
			</Link>
		</Container>
	);
}
