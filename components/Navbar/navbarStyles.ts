import styled from 'styled-components';

export const MenuButton = styled.button`
	position: fixed;
	top: 20px;
	right: 20px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: none;
	z-index: 99999;

	svg {
		color: white;
		font-size: 55px;
	}

	@media (max-width: 799px) {
		display: block;
	}
`;

interface ContainerProps {
	open: boolean;
}

export const Container = styled.div<ContainerProps>`
	background-color: ${(props) => props.theme.boxBackgroundColor};
	position: fixed;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 99999;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 799px) {
		transform: ${({ open }) =>
			open ? 'translateX(0)' : 'translateX(-100%)'};
	}

	@media (min-width: 800px) {
		width: 120px;
		position: static;
	}
`;

export const LogoContainer = styled.div<NavLinkProps>`
	width: 100%;
	height: 150px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	> a {
		border: 2px solid
			${(props) => (props.active ? props.theme.mainColor : 'transparent')};
		padding: 5px;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	background-color: transparent;
	cursor: pointer;
	border: none;

	svg {
		color: white;
		font-size: 55px;
	}

	@media (min-width: 800px) {
		display: none;
	}
`;

export const LinksContainer = styled.ul`
	width: 100%;
`;

interface NavLinkProps {
	active: boolean;
}

export const NavLink = styled.li<NavLinkProps>`
	padding: 20px 0;
	text-align: center;
	border-top: 1px solid ${(props) => props.theme.inputBackgroundColor};
	font-size: 1.1rem;

	:last-child {
		border-bottom: 1px solid ${(props) => props.theme.inputBackgroundColor};
	}

	a {
		color: ${(props) =>
			props.active
				? props.theme.mainColor
				: props.theme.secondaryTextColor};
		transition: color 0.3s ease-in;
	}

	:hover a,
	a:focus {
		outline: none;
		color: ${(props) => props.theme.mainColor};
	}
`;

export const SocialMediaContainer = styled.div`
	padding: 10px;
	margin-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
`;

export const SocialMediaItem = styled.div`
	padding: 10px 0;
	width: 50%;
	text-align: center;

	a {
		color: ${(props) => props.theme.secondaryTextColor};
		transition: color 0.3s ease-in;
	}

	:hover a,
	a:focus {
		outline: none;
		color: ${(props) => props.theme.mainColor};
	}
`;
