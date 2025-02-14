import { HomeOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { ROUTES } from "constants/routes";
import { NavLink } from "react-router";

export const Menu = () => {
	const buttonType = (isActive: boolean) => (isActive ? "primary" : "default");

	return (
		<Flex>
			<Flex gap={16}>
				<NavLink to={ROUTES.base}>
					{({ isActive }) => <Button icon={<HomeOutlined />} type={buttonType(isActive)}></Button>}
				</NavLink>
				<NavLink to={ROUTES.users}>
					{({ isActive }) => <Button type={buttonType(isActive)}> Пользователи</Button>}
				</NavLink>
				<NavLink to={ROUTES.counter}>
					{({ isActive }) => <Button type={buttonType(isActive)}> Счетчик</Button>}
				</NavLink>
				<NavLink to={ROUTES.product}>
					{({ isActive }) => <Button type={buttonType(isActive)}> Продукты</Button>}
				</NavLink>
			</Flex>
		</Flex>
	);
};
