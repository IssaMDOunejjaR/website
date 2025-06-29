import React, { useEffect, useState } from 'react';
import Container from './Container';
import { useTheme } from 'next-themes';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { useRouter } from 'next/router';

interface NavLinkProps {
	name: string;
	close: () => void;
}

const NavLink = ({ name, close }: NavLinkProps) => {
	return (
		<li>
			<LinkScroll
				activeClass="text-black dark:text-white"
				to={`${name.toLowerCase()}`}
				spy={true}
				smooth={true}
				offset={-70}
				duration={0}
				className="cursor-pointer font-semibold transition-all hover:text-black dark:hover:text-white"
				onClick={close}
			>
				{name}
			</LinkScroll>
		</li>
	);
};

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const { theme, setTheme, systemTheme } = useTheme();
	const { pathname } = useRouter();

	const currentTheme = theme === 'system' ? systemTheme : theme;

	const iconClass = '!text-white';

	const toggleDarkMode = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	};

	const handleCloseMenu = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleScroll = (_e: any) => {
			setScrollY(window.scrollY);
			if (window.scrollY > 0) setScrolled(true);
			else setScrolled(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Drawer anchor="right" open={open} onClose={handleCloseMenu}>
				<div className="w-screen md:w-[50vw] bg-white dark:bg-[#222] h-full py-8 flex flex-col">
					<div className="w-full px-8 mb-8">
						<IconButton
							className="group flex items-center justify-center w-10 h-10 bg-white hover:!bg-black dark:bg-black dark:hover:!bg-white"
							onClick={() => setOpen(false)}
						>
							<CloseIcon className="!w-6 !h-6 fill-black group-hover:fill-white dark:fill-white dark:group-hover:fill-black" />
						</IconButton>
					</div>
					<ul className="space-y-6 flex flex-col items-center">
						{pathname !== '/projects' ? (
							<>
								<NavLink name="Home" close={handleCloseMenu} />
								<NavLink name="About" close={handleCloseMenu} />
								<NavLink
									name="Skills"
									close={handleCloseMenu}
								/>
								<NavLink
									name="Projects"
									close={handleCloseMenu}
								/>
								<NavLink
									name="Contact"
									close={handleCloseMenu}
								/>
							</>
						) : (
							<li>
								<Link href="/">
									<a className="cursor-pointer font-semibold transition-all hover:text-black dark:hover:text-white">
										Home
									</a>
								</Link>
							</li>
						)}
					</ul>
					<div className="flex mt-auto flex-col items-center">
						<a
							target="_blank"
							href="/resume.pdf"
							className="btn-link py-2"
						>
							Resume
						</a>
						<div className="mt-6 space-x-4">
							<a
								href="https://www.facebook.com/issam.d.ounejjar/"
								className="group"
								target="_blank"
							>
								<FacebookIcon
									className={`${iconClass} group-hover:fill-[#4267B2]`}
								/>
							</a>
							<a
								href="https://twitter.com/IssaMDOunejjaR"
								className="group"
								target="_blank"
							>
								<TwitterIcon
									className={`${iconClass} group-hover:fill-[#1DA1F2]`}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/issam-ounejjar/"
								className="group"
								target="_blank"
							>
								<LinkedInIcon
									className={`${iconClass} group-hover:fill-[#0072b1]`}
								/>
							</a>
							<a
								href="https://github.com/IssaMDOunejjaR"
								className="group"
								target="_blank"
							>
								<GitHubIcon
									className={`${iconClass} group-hover:fill-[#171515] dark:group-hover:fill-white`}
								/>
							</a>
						</div>
					</div>
				</div>
			</Drawer>
			<nav
				className={`sticky top-0 p-4 z-10 ${
					scrolled &&
					'backdrop-blur-[5px] shadow-dark dark:shadow-light'
				}`}
			>
				<Container>
					<div className="flex items-center">
						<div className="flex items-center">
							<img
								src="/images/avatar-rounded.png"
								alt="Issam Ounejjar"
								className="w-12 h-12 rounded-full p-0.5 border-[2px] border-black dark:border-white"
							/>
							<span className="px-2 whitespace-nowrap overflow-hidden border-r-[.15em] border-orange-400 animate-typing uppercase text-black font-extrabold text-sm md:text-xl dark:text-white">
								Issam Ounejjar
							</span>
						</div>
						<ul className="space-x-6 ml-auto hidden lg:flex">
							{pathname !== '/projects' ? (
								<>
									<NavLink
										name="Home"
										close={handleCloseMenu}
									/>
									<NavLink
										name="About"
										close={handleCloseMenu}
									/>
									<NavLink
										name="Skills"
										close={handleCloseMenu}
									/>
									<NavLink
										name="Projects"
										close={handleCloseMenu}
									/>
									<NavLink
										name="Contact"
										close={handleCloseMenu}
									/>
								</>
							) : (
								<li>
									<Link href="/">
										<a className="cursor-pointer font-semibold transition-all hover:text-black dark:hover:text-white">
											Home
										</a>
									</Link>
								</li>
							)}
						</ul>
						<div className="ml-auto flex items-center space-x-4 lg:ml-4">
							<DarkModeToggle
								mode={
									currentTheme === 'dark' ? 'dark' : 'light'
								}
								size="sm"
								inactiveTrackColor="#e2e8f0"
								inactiveTrackColorOnHover="#f8fafc"
								inactiveTrackColorOnActive="#cbd5e1"
								activeTrackColor="#334155"
								activeTrackColorOnHover="#1e293b"
								activeTrackColorOnActive="#0f172a"
								inactiveThumbColor="#1e293b"
								activeThumbColor="#e2e8f0"
								onChange={toggleDarkMode}
							/>
							<a
								target="_blank"
								href="/resume.pdf"
								className={`overflow-hidden text-center btn-link py-2 px-0 hidden duration-700 lg:block ${
									pathname !== '/projects' && scrollY <= 900
										? 'w-0 p-0'
										: 'w-24'
								}`}
							>
								Resume
							</a>
							<IconButton
								className="!group !flex !items-center !justify-center !w-10 !h-10 !bg-white hover:!bg-black dark:!bg-black dark:hover:!bg-white lg:!hidden"
								onClick={() => setOpen(true)}
							>
								<MenuIcon className="!w-6 !h-6 !fill-black group-hover:!fill-white dark:!fill-white dark:group-hover:!fill-black" />
							</IconButton>
						</div>
						<div className="ml-4 hidden items-center space-x-4 lg:flex">
							<a
								target="_blank"
								href="https://www.facebook.com/issam.d.ounejjar/"
								className="group"
							>
								<FacebookIcon
									className={`${iconClass} group-hover:fill-[#4267B2]`}
								/>
							</a>
							<a
								href="https://twitter.com/IssaMDOunejjaR"
								className="group"
								target="_blank"
							>
								<TwitterIcon
									className={`${iconClass} group-hover:fill-[#1DA1F2]`}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/issam-ounejjar/"
								className="group"
								target="_blank"
							>
								<LinkedInIcon
									className={`${iconClass} group-hover:fill-[#0072b1]`}
								/>
							</a>
							<a
								href="https://github.com/IssaMDOunejjaR"
								className="group"
								target="_blank"
							>
								<GitHubIcon
									className={`${iconClass} group-hover:fill-[#171515] dark:group-hover:fill-white`}
								/>
							</a>
						</div>
					</div>
				</Container>
			</nav>
		</>
	);
}
