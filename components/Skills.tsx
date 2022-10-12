import { useCallback, useEffect, useRef, useState } from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import VerticalLine from './VerticalLine';

export default function Skills() {
	const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
	const [width, setWidth] = useState(0);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const skills = [
		'/images/icons/docker.svg',
		'/images/icons/node-js.svg',
		'/images/icons/react-js.svg',
		'/images/icons/typescript.svg',
		'/images/icons/kubernetes.svg',
		'/images/icons/cpp.svg',
	];
	let count = 0;

	const drawCircle = useCallback(
		(
			posX: number,
			posY: number,
			radius: number,
			startAngle: number,
			endAngle: number,
			fillColor: CanvasGradient,
			strokeColor: CanvasGradient,
		) => {
			if (ctx) {
				ctx.beginPath();
				ctx.arc(posX, posY, radius, startAngle, endAngle);
				ctx.fillStyle = fillColor;
				ctx.fill();
				ctx.lineWidth = 1;
				ctx.strokeStyle = strokeColor;
				ctx.stroke();
			}
		},
		[ctx],
	);

	const drawLine = useCallback(
		(
			fromX: number,
			fromY: number,
			toX: number,
			toY: number,
			lineWidth: number,
			color: CanvasGradient,
		) => {
			if (ctx) {
				ctx.beginPath();
				ctx.strokeStyle = color;
				ctx.moveTo(fromX, fromY);
				ctx.lineTo(toX, toY);
				ctx.lineWidth = lineWidth;
				ctx.stroke();
			}
		},
		[ctx],
	);

	const drawItem = useCallback(
		(
			startX: number,
			startY: number,
			widthX: number,
			widthY: number,
			radius: number,
			gradient: CanvasGradient,
		) => {
			if (canvasRef && canvasRef.current) {
				const endX = startX + widthX;
				const endY = startY + widthY;

				drawLine(startX, startY, endX, endY, 2, gradient);
				drawCircle(
					endX,
					endY,
					radius,
					0,
					2 * Math.PI,
					gradient,
					gradient,
				);

				const imgObj = new Image();

				imgObj.onload = () => {
					ctx?.drawImage(
						imgObj,
						endX - radius / 2,
						endY - radius / 2,
						radius,
						radius,
					);
				};

				imgObj.src = skills[count];
				count++;
			}
		},
		[drawCircle, drawLine],
	);

	useEffect(() => {
		if (canvasRef && canvasRef.current) {
			setCtx(canvasRef.current.getContext('2d'));

			canvasRef.current.width =
				canvasRef.current.parentElement?.clientWidth || 0;
			canvasRef.current.height = canvasRef.current.width / 2 + 100;

			const canvasWidth = canvasRef.current.width;
			const canvasHeight = canvasRef.current.height;

			if (ctx) {
				const gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0);

				gradient.addColorStop(0, '#ff4e50');
				gradient.addColorStop(1, '#f9d423');

				drawLine(
					canvasWidth / 2 + 0.5,
					0,
					canvasWidth / 2 + 0.5,
					canvasHeight,
					1.5,
					gradient,
				);

				const startPosX = canvasWidth / 2;
				const startPosY = canvasHeight / 2;
				const radius = canvasWidth / 16;

				drawItem(
					canvasWidth / 2,
					canvasHeight / 2,
					250,
					250,
					radius,
					gradient,
				);
				drawItem(
					canvasWidth / 2,
					canvasHeight / 2,
					-150,
					200,
					radius,
					gradient,
				);
				// drawItem(
				// 	canvasWidth / 2,
				// 	canvasHeight / 2,
				// 	350,
				// 	-280,
				// 	radius,
				// 	gradient
				// );
				// drawItem(
				// 	canvasWidth / 2,
				// 	canvasHeight / 2,
				// 	-500,
				// 	0,
				// 	radius,
				// 	gradient
				// );
				// drawItem(
				// 	canvasWidth / 2,
				// 	canvasHeight / 2,
				// 	500,
				// 	-50,
				// 	radius,
				// 	gradient
				// );
				// drawItem(
				// 	canvasWidth / 2,
				// 	canvasHeight / 2,
				// 	-300,
				// 	-270,
				// 	radius,
				// 	gradient
				// );

				drawCircle(
					startPosX,
					startPosY,
					radius,
					0,
					2 * Math.PI,
					gradient,
					gradient,
				);

				const imgObj = new Image();

				imgObj.onload = () => {
					ctx?.drawImage(
						imgObj,
						canvasWidth / 2 - radius / 2,
						canvasHeight / 2 - radius / 2,
						radius,
						radius,
					);
				};

				imgObj.src = '/images/icons/technology.svg';
			}
		}

		return () => {
			if (ctx && canvasRef.current) {
				ctx.clearRect(
					0,
					0,
					canvasRef.current.width,
					canvasRef.current.height,
				);
			}
		};
	}, [canvasRef, ctx, width]);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const gradient = 'from-[#ff4e50] to-[#f9d423]';

	return (
		<section id="skills">
			<Container>
				<SectionHeader title="Skills" number={2} gradient={gradient} />
				<p className="text-center mb-8 md:w-2/4 md:mx-auto">
					Tools and technologies I use to bring your products to life
				</p>
				<div className="flex justify-center">
					<VerticalLine height="h-20" gradient={gradient} />
				</div>
				{/* <canvas ref={canvasRef} className='w-full'></canvas> */}
				<img src="/images/skills.png" alt="Tools" />
				<div className="flex justify-center">
					<VerticalLine height="h-20" gradient={gradient} />
				</div>
			</Container>
		</section>
	);
}
