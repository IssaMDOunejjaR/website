import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from './Container';
import SectionHeader from './SectionHeader';
import VerticalLine from './VerticalLine';

interface ItemProps {
	reverse?: boolean;
	imgUrl: string;
	imgAlt: string;
	title: string;
	description: string;
	appLink: string;
	githubLink: string;
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
						x: !reverse ? -400 : 400,
						opacity: 0,
						zIndex: -10,
					}}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ ease: 'linear' }}
					className="rounded-md flex-1 flex md:items-center"
				>
					<div className="md:w-3/4 md:mx-auto text-center p-6">
						<h3 className="w-full text-xl md:text-2xl mb-6">
							{title}
						</h3>
						<p className="">{description}</p>
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
						imgUrl="/images/pong.png"
						imgAlt="Space Pong"
						title="Space Pong"
						description="It's a website where you can create an account and play, chat, compete with other player in a Pong game live. you can also watch other player playing."
						appLink=""
						githubLink=""
						reverse
					/>
					<Item
						imgUrl="/images/netflix.png"
						imgAlt="Netflix"
						title="Netflix Clone"
						description="It's just a clone to the Netflix platform where you can see the movies and tv shows information."
						appLink="https://netflix-clone-v2-omega.vercel.app/"
						githubLink="https://github.com/IssaMDOunejjaR/netflix-clone-v2"
					/>
					<Item
						imgUrl="/images/amazon.png"
						imgAlt="Amazon"
						title="Amazon Clone"
						description="It's just a clone to the Amazon platform where you can create an account and see the products and order them."
						appLink=""
						githubLink=""
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
