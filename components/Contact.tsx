import Container from './Container';
import SectionHeader from './SectionHeader';
import VerticalLine from './VerticalLine';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

interface InputProps {
	id: string;
	type: string;
	placeholder: string;
	name: string;
}

const Input = ({ type, placeholder, name, id }: InputProps) => {
	return (
		<div className="w-full flex-1">
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				name={name}
				className="w-full p-4 rounded-md outline-none border-[1px]"
				required
			/>
		</div>
	);
};

export default function Contact() {
	const [showAlert, setShowAlert] = useState<{
		show: boolean;
		type: 'failure' | 'success';
		message: string;
	}>({ show: false, type: 'failure', message: '' });

	const gradient = 'from-[#2193b0] to-[#6dd5ed]';

	const ref = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (ref && ref.current) {
			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
					process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
					ref.current,
					process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
				)
				.then((_) => {
					setShowAlert({
						show: true,
						type: 'success',
						message: 'Message sent successfully!',
					});

					e.target.reset();
				})
				.catch((_) =>
					setShowAlert({
						show: true,
						type: 'failure',
						message: 'Something went wrong!',
					}),
				);
		}
	};

	useEffect(() => {
		if (showAlert.show) {
			const timer = setTimeout(() => {
				setShowAlert({ show: false, type: 'failure', message: '' });
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [showAlert]);

	return (
		<>
			{showAlert.show && (
				<div
					className={`fixed right-14 top-28 py-2 px-4 rounded-sm text-white text-xs md:text-lg ${
						showAlert.type === 'failure'
							? 'bg-red-500 '
							: 'bg-green-400'
					}`}
				>
					{showAlert.message}
				</div>
			)}

			<section id="contact" className="p-6 py-0">
				<Container>
					<SectionHeader
						title="Contact Me"
						number={4}
						gradient={gradient}
					/>
					<p className="md:w-2/4 mx-auto text-center my-6">
						I’m interested in freelance opportunities – especially
						ambitious or large projects. However, if you have other
						request or question, don’t hesitate to use the form.
					</p>
					<div className="flex justify-center">
						<VerticalLine height="h-10" gradient={gradient} />
					</div>
					<div
						className={`mx-auto p-0.5 rounded-md bg-gradient-to-r ${gradient} md:w-3/5`}
					>
						<form
							ref={ref}
							onSubmit={handleSubmit}
							className="bg-white p-4 rounded-md space-y-4 dark:bg-black"
						>
							<div className="flex space-x-2">
								<Input
									type="text"
									placeholder="Name"
									name="name"
									id="name"
								/>
								<Input
									type="email"
									placeholder="Email"
									name="email"
									id="email"
								/>
							</div>
							<Input
								type="text"
								placeholder="Subject"
								name="subject"
								id="subject"
							/>
							<textarea
								className="w-full h-36 p-4 rounded-md outline-none border-[1px]"
								placeholder="Message"
								name="message"
								id="message"
							></textarea>
							<button className="w-full py-2 px-4">Submit</button>
						</form>
					</div>
					<div className="relative flex justify-center">
						<span className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-white to-white dark:via-black dark:to-black"></span>
						<VerticalLine height="h-72" gradient={gradient} />
					</div>
				</Container>
			</section>
		</>
	);
}
