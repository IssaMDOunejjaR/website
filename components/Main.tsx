import { useEffect, useState } from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Main() {
	const [order, setOrder] = useState(0);

	let bgClass;

	if (order === 0) bgClass = 'from-[#2193b0] to-[#6dd5ed]';
	else if (order === 1) bgClass = 'from-[#ff4e50] to-[#f9d423]';
	else if (order === 2) bgClass = 'from-[#cc2b5e] to-[#753a88]';

	useEffect(() => {
		const interval = setInterval(() => {
			setOrder(order === 2 ? 0 : order + 1);
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [order]);

	const variant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<main id="home">
			<Container>
				<motion.div className="px-6 py-10">
					<motion.h1
						initial="hidden"
						whileInView="visible"
						transition={{
							staggerChildren: 0.2,
						}}
						viewport={{ once: true }}
						className="flex p-2 flex-col items-center text-center text-6xl md:text-8xl lg:text-[9rem]"
					>
						<motion.div
							variants={variant}
							className={`text-black p-4 dark:text-white ease-in-out ${
								order === 0 &&
								'!text-transparent bg-clip-text bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] dark:text-transparent'
							}`}
						>
							Hi, I'm
						</motion.div>
						<motion.div
							className="relative p-2 my-4 text-black dark:text-white"
							variants={variant}
						>
							<span
								className={`absolute left-0 w-full h-full -z-10 bg-gradient-to-r duration-1000 from-[#ff4e50] to-[#f9d423] ${
									order === 1 ? 'opacity-100' : 'opacity-0'
								}`}
							></span>
							Issam Ounejjar
						</motion.div>
						<motion.div
							variants={variant}
							className={`text-black p-4 dark:text-white ease-in-out ${
								order === 2 &&
								'!text-transparent bg-clip-text bg-gradient-to-r from-[#cc2b5e] to-[#753a88] dark:text-transparent'
							}`}
						>
							Software Engineer.
						</motion.div>
					</motion.h1>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						className="flex flex-col justify-center items-center mt-12 space-y-4 md:flex-row md:space-y-0 md:space-x-4"
					>
						<Link
							activeClass="text-black dark:text-white"
							to={`about`}
							spy={true}
							smooth={true}
							offset={-70}
							duration={0}
							className="cursor-pointer btn-link bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
						>
							About Me
						</Link>
						<a
							target="_blank"
							href="https://drive.google.com/file/d/1l6fmOtp23chHn2JEhCmBvfanrUUiBkf2/view"
							className={`btn-link group p-0.5 border-0 bg-gradient-to-r ${bgClass}`}
						>
							<span className="block text-black rounded-md bg-white py-3 px-8 group-hover:text-white group-hover:bg-transparent dark:text-white dark:bg-black dark:group-hover:bg-transparent">
								Resume
							</span>
						</a>
					</motion.div>
				</motion.div>
			</Container>
		</main>
	);
}
