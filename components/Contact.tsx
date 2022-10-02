import Container from './Container';
import SectionHeader from './SectionHeader';
import VerticalLine from './VerticalLine';

interface InputProps {
	type: string;
	placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
	return (
		<div className='w-full flex-1'>
			<input
				type={type}
				placeholder={placeholder}
				className='w-full p-4 rounded-md outline-none border-[1px]'
			/>
		</div>
	);
};

export default function Contact() {
	const gradient = 'from-[#2193b0] to-[#6dd5ed]';

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<section id='contact' className='p-6 py-0'>
			<Container>
				<SectionHeader
					title='Contact Me'
					number={4}
					gradient={gradient}
				/>
				<p className='md:w-2/4 mx-auto text-center my-6'>
					I’m interested in freelance opportunities – especially
					ambitious or large projects. However, if you have other
					request or question, don’t hesitate to use the form.
				</p>
				<div className='flex justify-center'>
					<VerticalLine height='h-10' gradient={gradient} />
				</div>
				<div
					className={`mx-auto p-0.5 rounded-md bg-gradient-to-r ${gradient} md:w-3/5`}
				>
					<form
						onSubmit={handleSubmit}
						className='bg-white p-4 rounded-md space-y-4 dark:bg-black'
					>
						<div className='flex space-x-2'>
							<Input type='text' placeholder='Name' />
							<Input type='email' placeholder='Email' />
						</div>
						<Input type='text' placeholder='Subject' />
						<textarea
							className='w-full h-36 p-4 rounded-md outline-none border-[1px]'
							placeholder='Message'
						></textarea>
						<button className='w-full py-2 px-4'>Submit</button>
					</form>
				</div>
				<div className='relative flex justify-center'>
					<span className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-white to-white dark:via-black dark:to-black'></span>
					<VerticalLine height='h-48' gradient={gradient} />
				</div>
			</Container>
		</section>
	);
}
