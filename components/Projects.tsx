import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from './Container';
import SectionHeader from './SectionHeader';
import VerticalLine from './VerticalLine';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ItemProps {
	reverse?: boolean;
	imgUrl: string;
	imgAlt: string;
	title: string;
	description: string;
	appLink?: string;
	githubLink?: string;
}

const Item = ({
	reverse = false,
	imgUrl,
	imgAlt,
	title,
	description,
	appLink,
	githubLink,
}: ItemProps) => {
	const gradient = 'from-[#cc2b5e] to-[#753a88]';

	return (
		<div className={`flex flex-col -my-[1px]`}>
			<div className="lg:flex justify-center hidden">
				<div className="flex-1 flex justify-end">
					<div
						className={`${
							!reverse &&
							'pt-[1px] pl-[1px] flex w-2/4 bg-gradient-to-r ' +
								gradient
						}`}
					>
						<div
							className={`${
								!reverse && 'w-full h-20 bg-white dark:bg-black'
							}`}
						></div>
					</div>
				</div>
				<div className="flex-1 flex">
					<div
						className={`${
							reverse &&
							'pt-[1px] pr-[1px] flex w-2/4 bg-gradient-to-r ' +
								gradient
						}`}
					>
						<div
							className={`${
								reverse && 'w-full h-20 bg-white dark:bg-black'
							}`}
						></div>
					</div>
				</div>
			</div>
			<div
				className={`flex overflow-hidden flex-col lg:flex-row ${
					reverse && 'lg:flex-row-reverse'
				}`}
			>
				<div className="rounded-md flex-1">
					<div
						className={`w-full mx-auto bg-gradient-to-r ${gradient} p-[1px]`}
					>
						<motion.img
							src={imgUrl}
							alt={imgAlt}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
						/>
					</div>
				</div>
				<motion.div
					initial={{
						x: !reverse ? -200 : 200,
						opacity: 0,
						zIndex: -10,
					}}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ ease: 'linear' }}
					className="rounded-md flex-1 flex !z-[1] md:items-center"
				>
					<div className="md:w-3/4 md:mx-auto text-center p-6">
						<h3 className="w-full text-xl md:text-2xl mb-6">
							{title}
						</h3>
						<p>{description}</p>
						<span className="flex justify-center gap-4 py-4">
							{appLink && (
								<a href={appLink} target="_blank">
									<OpenInNewIcon />
								</a>
							)}
							{githubLink && (
								<a href={githubLink} target="_blank">
									<GitHubIcon />
								</a>
							)}
						</span>
					</div>
				</motion.div>
			</div>
			<div className="lg:flex justify-center hidden">
				<div className="flex-1 flex justify-end">
					<div
						className={`${
							!reverse &&
							'pt-[1px] pl-[1px] flex w-2/4 rotate-x-180 bg-gradient-to-r from-[#753a88] to-[#cc2b5e]'
						}`}
					>
						<div
							className={`${
								!reverse && 'w-full h-20 bg-white dark:bg-black'
							}`}
						></div>
					</div>
				</div>
				<div className="flex-1 flex">
					<div
						className={`${
							reverse &&
							'pt-[1px] pr-[1px] flex w-2/4 rotate-x-180 bg-gradient-to-r from-[#753a88] to-[#cc2b5e]'
						}`}
					>
						<div
							className={`${
								reverse && 'w-full h-20 bg-white dark:bg-black'
							}`}
						></div>
					</div>
				</div>
			</div>
			<div className="flex justify-center lg:hidden">
				<VerticalLine height="h-20" gradient={gradient} />
			</div>
		</div>
	);
};

export default function Projects() {
	const gradient = 'from-[#cc2b5e] to-[#753a88]';

	return (
		<section id="projects" className="p-6 py-0">
			<Container>
				<SectionHeader
					title="Projects"
					number={3}
					gradient={gradient}
				/>
				<div className="flex justify-center">
					<VerticalLine height="h-20" gradient={gradient} />
				</div>
				<div className="py-[1px]">
					<Item
						imgUrl="/images/anime-list.png"
						imgAlt="Anime List"
						title="Anime List"
						description="Anime List is a website where you can see the latest updates about animes."
						appLink="https://anime-list.issamounejjar.live/"
						reverse
					/>
					<Item
						imgUrl="/images/pong.png"
						imgAlt="Space Pong"
						title="Space Pong"
						description="It's a website where you can create an account and play, chat, compete with other player in a Pong game live. you can also watch other player playing."
						appLink="https://pong.issamounejjar.live/"
					/>
					<Item
						imgUrl="/images/avax.png"
						imgAlt="Avax"
						title="Avax NFT Game"
						description="It's an NFT card game where you connect with your decentralized wallet and play card game with other users."
						appLink="https://avax.issamounejjar.live/"
						reverse
					/>
				</div>
				<div className="flex justify-center">
					<VerticalLine height="h-20" gradient={gradient} />
				</div>
				<div className="flex justify-center">
					<div
						className={`flex p-0.5 bg-gradient-to-r ${gradient} rounded-md`}
					>
						<Link href="/projects">
							<a className="bg-white rounded-md font-semibold text-black py-3 px-6 hover:bg-transparent hover:text-white dark:hover:bg-transparent dark:bg-black dark:text-white">
								See More Projects
							</a>
						</Link>
					</div>
				</div>
				<div className="flex justify-center">
					<VerticalLine height="h-20" gradient={gradient} />
				</div>
			</Container>
		</section>
	);
}
