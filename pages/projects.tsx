import Container from '../components/Container';
import data from '../data/projects.json';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionHeader from '../components/SectionHeader';
import VerticalLine from '../components/VerticalLine';
import { IconButton, Tooltip } from '@mui/material';
import { Fragment } from 'react';

interface TechProps {
	name: string;
}

const Tech = ({ name }: TechProps) => {
	return (
		<Tooltip title={name} arrow placement="bottom">
			<img
				src={`/images/icons/${name.toLowerCase()}.svg`}
				alt={name}
				className={`w-7 h-7 ${
					name === 'NextJs' ? 'dark:invert' : null
				}`}
			/>
		</Tooltip>
	);
};

interface ProjectProps {
	data:
		| {
				title: string;
				github: string;
				website: string;
				image: string;
				description: string;
				technologies: string[];
		  }
		| {
				title: string;
				github?: undefined;
				website: string;
				image: string;
				description: string;
				technologies: string[];
		  };
	reverse?: boolean;
}

const Project = ({ data, reverse = false }: ProjectProps) => {
	const gradient = 'from-[#2193b0] to-[#6dd5ed]';

	return (
		<div
			className={`relative flex flex-col md:flex-row min-h-[500px] ${
				reverse ? 'flex-row-reverse' : null
			}`}
		>
			<div
				className={`flex-1 p-[1px] flex justify-center items-center relative md:absolute -z-10 md:w-2/3 md:h-full ${
					reverse ? 'left-0' : 'right-0'
				}`}
			>
				<span
					className={`absolute w-full h-full -z-10 bg-gradient-to-r ${gradient}`}
				></span>
				<img
					src={data.image}
					alt={data.title}
					className="w-full h-full"
				/>
			</div>
			<div
				className={`flex w-full flex-col justify-center items-center ${
					reverse ? 'md:items-end' : 'md:items-start'
				}`}
			>
				<h2 className="text-3xl mt-4">{data.title}</h2>
				<p className="my-6 bg-gray-200 dark:bg-slate-800 p-4 max-w-lg">
					{data.description}
				</p>
				<div className="flex space-x-4 mb-2 px-2">
					{data.technologies.map((name, index) => (
						<Tech key={index} name={name} />
					))}
				</div>
				<div className="space-x-4 p-2">
					<a href={data.website} target="_blank">
						<OpenInNewIcon />
					</a>
					{data.github && (
						<a href={data.github} target="_blank">
							<GitHubIcon />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default function projects() {
	const gradient = 'from-[#2193b0] to-[#6dd5ed]';

	return (
		<section className="p-10">
			<Container>
				<SectionHeader
					title="Projects"
					number={0}
					gradient={gradient}
				/>
				<div className="flex justify-center">
					<VerticalLine gradient={gradient} height="h-20" />
				</div>
				{data.map((p, index) => (
					<Fragment key={index}>
						<Project data={p} reverse={index % 2 === 0} />
						<div className="flex justify-center">
							<VerticalLine gradient={gradient} height="h-28" />
						</div>
					</Fragment>
				))}
			</Container>
		</section>
	);
}
