import { Layout } from "antd";
import { Outlet } from "react-router";
import { Menu } from "./Menu";

const { Header, Footer, Content } = Layout;

import "./styles.css";

export const MainLayout = () => {
	return (
		<Layout className="main-layout">
			<Header className="main-layout__block main-layout__header">
				<Menu />
			</Header>
			<Content className="main-layout__block main-layout__content">
				<Outlet />
			</Content>
			<Footer className="main-layout__block main-layout__footer">
				Базовая сборка приложения для{" "}
				<a href="https://www.modernglass.ru" target="_blank">
					ModernGlass
				</a>
			</Footer>
		</Layout>
	);
};
