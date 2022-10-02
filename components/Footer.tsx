import Container from './Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ItemProps {
	children: React.ReactNode;
	url: string;
}

const Item = ({ children, url }: ItemProps) => {
	return (
		<a
			href={url}
			className='rounded-full border-[1px] w-14 h-14 flex items-center justify-center'
			target='_blank'
		>
			{children}
		</a>
	);
};

export default function Footer() {
	return (
		<footer className='bg-gray-100 p-8 border-t-2 dark:bg-[#111111] dark:border-[#333]'>
			<Container>
				<div className='flex flex-col items-center space-y-6'>
					<p className='text-center'>
						Living, learning, & leveling up one day at a time.
					</p>
					<div className='text-center'>
						<p>Say Hello,</p>
						<p>issam.ounejjar@gmail.com</p>
					</div>
					<div className='flex items-center space-x-4'>
						<Item url='https://www.facebook.com/issam.d.ounejjar/'>
							<FacebookIcon className='!text-3xl' />
						</Item>
						<Item url='https://twitter.com/IssaMDOunejjaR'>
							<TwitterIcon className='!text-3xl' />
						</Item>
						<Item url='https://www.linkedin.com/in/issam-ounejjar/'>
							<LinkedInIcon className='!text-3xl' />
						</Item>
						<Item url='https://github.com/IssaMDOunejjaR'>
							<GitHubIcon className='!text-3xl' />
						</Item>
					</div>
					<p>
						Handcrafted by{' '}
						<span className='font-bold underline'>
							Issam Ounejjar
						</span>
					</p>
				</div>
			</Container>
		</footer>
	);
}
