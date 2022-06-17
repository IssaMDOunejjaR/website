import {
	Container,
	Header,
	Text,
	Form,
	FormGroup,
	FormInput,
	FormTextArea,
	FormButton,
} from './contactStyles';

export default function ContactMe({ ...restOfProps }) {
	return (
		<Container {...restOfProps}>
			<Header
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				Contact Me
			</Header>
			<Text
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				{`I’m interested in freelance opportunities – especially
					ambitious or large projects. However, if you have other
					request or question, don’t hesitate to use the form.`}
			</Text>
			<Form action="mailto:issam.ounejjar@gmail.com">
				<FormGroup>
					<FormInput
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						<input type="text" placeholder="Name" name="name" />
						<span></span>
					</FormInput>
					<FormInput
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						<input type="text" placeholder="Email" name="email" />
						<span></span>
					</FormInput>
				</FormGroup>
				<FormInput
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8 }}
				>
					<input type="text" placeholder="Subject" name="subject" />
					<span></span>
				</FormInput>
				<FormTextArea
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 1 }}
				>
					<textarea placeholder="Message" name="message" />
					<span></span>
				</FormTextArea>
				<FormButton
					type="submit"
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 1.1 }}
				>
					Send Message
				</FormButton>
			</Form>
		</Container>
	);
}
