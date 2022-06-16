import Link from 'next/link';
import {
	MenuButton,
	Container,
	CloseButton,
	LogoContainer,
	LinksContainer,
	NavLink,
	SocialMediaContainer,
	SocialMediaItem,
} from './navbarStyles';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function NavItem({
	children,
	href,
	active,
	onClick,
}: {
	children: JSX.Element | JSX.Element[] | string;
	href: string;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<NavLink active={active}>
			<Link href={href}>
				<a onClick={onClick}>{children}</a>
			</Link>
		</NavLink>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const { pathname } = useRouter();

	return (
		<>
			<MenuButton onClick={() => setOpen(true)}>
				<MenuIcon />
			</MenuButton>
			<Container open={open}>
				<LogoContainer active={pathname === '/'}>
					<CloseButton onClick={() => setOpen(false)}>
						<CloseIcon />
					</CloseButton>
					<Link href="/">
						<a onClick={() => setOpen(false)}>
							<Image
								src="/images/avatar.jpg"
								alt="Issam Ounejjar"
								width={70}
								height={70}
								style={{ borderRadius: '50%' }}
							/>
						</a>
					</Link>
				</LogoContainer>
				<LinksContainer>
					<NavItem
						onClick={() => setOpen(false)}
						active={pathname === '/about'}
						href="/about"
					>
						About
					</NavItem>
					<NavItem
						onClick={() => setOpen(false)}
						active={pathname === '/skills'}
						href="/skills"
					>
						Skills
					</NavItem>
					<NavItem
						onClick={() => setOpen(false)}
						active={pathname === '/work'}
						href="/work"
					>
						Work
					</NavItem>
					<NavItem
						onClick={() => setOpen(false)}
						active={pathname === '/contact'}
						href="/contact"
					>
						Contact
					</NavItem>
				</LinksContainer>
				<SocialMediaContainer>
					<SocialMediaItem>
						<a
							href="https://www.facebook.com/issam.d.ounejjar/"
							target="_blank"
							rel="noreferrer"
						>
							<FacebookOutlinedIcon />
						</a>
					</SocialMediaItem>
					<SocialMediaItem>
						<a
							href="https://twitter.com/IssaMDOunejjaR"
							target="_blank"
							rel="noreferrer"
						>
							<TwitterIcon />
						</a>
					</SocialMediaItem>
					<SocialMediaItem>
						<a
							href="https://github.com/IssaMDOunejjaR"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon />
						</a>
					</SocialMediaItem>
					<SocialMediaItem>
						<a
							href="https://www.linkedin.com/in/issam-ounejjar/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon />
						</a>
					</SocialMediaItem>
				</SocialMediaContainer>
			</Container>
		</>
	);
}
