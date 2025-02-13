import { HomeOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { ROUTES } from "constants/routes";
import { NavLink } from "react-router";

export const Menu = () => {
	return (
		<Flex>
			<Flex gap={16}>
				<NavLink to={ROUTES.base}>
					<Button icon={<HomeOutlined />}></Button>
				</NavLink>
				<NavLink to={ROUTES.users}>Пользователи</NavLink>
				<NavLink to={ROUTES.product}>Продукты</NavLink>
				<NavLink to={ROUTES.counter}>Счетчик</NavLink>
			</Flex>
		</Flex>
	);
};
