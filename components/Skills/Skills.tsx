import Image from 'next/image';
import Layout from '../Layout/Layout';
import { Container, Header, Text, Tools, Item, Info } from './skillsStyles';
import skills from '../../data/skills.json';

export default function SkillsAndTools({ ...restOfProps }) {
	return (
		<Container {...restOfProps}>
			<Header
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				Skills & Tools
			</Header>
			<Text
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				The skills, tools and technologies I use to bring your products
				to life:
			</Text>
			<Tools>
				{skills.map((skill: { name: string; img: string }, index) => (
					<Item
						key={index}
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.6 + index / 10 }}
					>
						<Image
							src={skill.img}
							alt={skill.name}
							width={120}
							height={120}
						/>
						<p>{skill.name}</p>
					</Item>
				))}
			</Tools>
			<Info
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 1.5 }}
			>
				<h3>Currently working on :</h3>
				<p>
					Improving my skills in, and understanding of vanilla
					JavaScript and NodeJs. Also, learning new Frontend and
					Backend frameworks like React, NextJs, ExpressJs, NestJS.
					I&apos;m currently having fun learning DevOps too.{' '}
					<a href="https://github.com/IssaMDOunejjaR/devops-roadmap">
						Follow my journey here.
					</a>
				</p>
			</Info>
		</Container>
	);
}
