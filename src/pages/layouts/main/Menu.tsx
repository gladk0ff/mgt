import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { ROUTES } from "constants/routes";
import { NavLink } from "react-router";
import { useAuth } from "src/AuthContext";

export const Menu = () => {
	const buttonType = (isActive: boolean) => (isActive ? "primary" : "default");
	const { logOut } = useAuth();

	return (
		<Flex justify="space-between" align="center">
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
			<Button onClick={logOut} icon={<LogoutOutlined />} type="link" />
		</Flex>
	);
};
