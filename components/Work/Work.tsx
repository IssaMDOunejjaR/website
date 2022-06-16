import { Container, Item, Overlay } from './workStyles';
import works from '../../data/work.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function MyWork({ ...restOfProps }) {
	return (
		<Container {...restOfProps}>
			{works.map((work, index) => (
				<Item
					key={index}
					url={work.image}
					initial={{ y: -40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 + index / 5 }}
				>
					<Overlay>
						<h4>{work.title}</h4>
						{work.github && (
							<a
								href={work.github}
								target="_blank"
								rel="noreferrer"
							>
								<GitHubIcon />
							</a>
						)}
						{work.website && (
							<a
								href={work.website}
								target="_blank"
								rel="noreferrer"
							>
								<LanguageIcon />
							</a>
						)}
					</Overlay>
				</Item>
			))}
		</Container>
	);
}
