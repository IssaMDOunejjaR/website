interface Props {
	height: string;
	gradient: string;
}

export default function VerticalLine({ height, gradient }: Props) {
	return (
		<span
			className={`w-[1px] ${height} bg-gradient-to-r ${gradient}`}
		></span>
	);
}
