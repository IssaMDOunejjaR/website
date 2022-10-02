import VerticalLine from './VerticalLine';

interface Props {
	title: string;
	number: number;
	gradient: string;
}

export default function SectionHeader({ title, number, gradient }: Props) {
	return (
		<div className='pb-4 flex flex-col items-center'>
			<div className='relative flex justify-center w-full'>
				{number === 1 && (
					<span className='absolute top-0 w-full h-full bg-gradient-to-b from-white via-white to-transparent dark:from-black dark:via-black dark:to-transparent'></span>
				)}
				<VerticalLine
					height={`${number === 1 ? 'h-40' : 'h-20'}`}
					gradient={gradient}
				/>
			</div>
			<span
				className={`flex items-center justify-center bg-gradient-to-r ${gradient} w-10 h-10 rounded-full text-white mb-4`}
			>
				{number}
			</span>
			<h2 className='text-3xl md:text-5xl md:my-6 py-2'>{title}</h2>
		</div>
	);
}
