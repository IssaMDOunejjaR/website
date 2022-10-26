import Container from './Container';
import SectionHeader from './SectionHeader';
import VerticalLine from './VerticalLine';
import { Link } from 'react-scroll';

export default function About() {
	const gradient = 'from-[#2193b0] to-[#6dd5ed]';

	return (
		<section id="about" className="p-6 pb-0">
			<Container>
				<SectionHeader
					title="About Me"
					number={1}
					gradient={gradient}
				/>
				<div className="flex flex-col items-center">
					<div className={`octagon p-1 bg-gradient-to-r ${gradient}`}>
						<div className="octagon">
							<img
								src="https://cdn.intra.42.fr/users/c313acb89f1c9ba0a7cadc92d3c199c3/iounejja.jpg"
								alt="Issam Ounejjar"
							/>
						</div>
					</div>
					<h3 className="text-xl py-4">Who's this guy?</h3>
					<VerticalLine height="h-20" gradient={gradient} />
					<div
						className={`md:w-2/4 bg-gradient-to-r ${gradient} p-0.5 rounded-md`}
					>
						<p className="p-4 bg-white rounded-md dark:bg-black">
							I'm a Full Stack Developer located in Casablanca,
							Morocco. I have a serious passion for everything
							related to IT and Coding. I love building things
							that live in the internet. Currently, I'm focused on
							building Web Applications. Check out some of my work
							in the{' '}
							<Link
								activeClass="text-black dark:text-white"
								to={`projects`}
								spy={true}
								smooth={true}
								offset={-70}
								duration={0}
								className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
							>
								Projects
							</Link>{' '}
							section.
							<br />
							<br />
							My interest in web development started back in 2016
							when I decided to try creating some E-commerce
							websites — turns out hacking together a custom
							reblog button taught me a lot about HTML & CSS &
							Javascript! Interested in the entire FullStack
							spectrum and working on ambitious projects with
							positive people.
							<br />
							<br />
							I'm open to Job opportunities where I can
							contribute, learn and grow. If you have a good
							opportunity that matches my skills and experience
							then don't hesitate to contact me.
							<br />
							<br />
							<Link
								activeClass="text-black dark:text-white"
								to={`contact`}
								spy={true}
								smooth={true}
								offset={-70}
								duration={0}
								className={`cursor-pointer font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
							>
								Let's make something !
							</Link>
						</p>
					</div>
					<VerticalLine height="h-20" gradient={gradient} />
				</div>
			</Container>
		</section>
	);
}
