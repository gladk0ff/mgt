import { Layout } from "antd";
import { Outlet } from "react-router";
import { Menu } from "./Menu";

const { Header, Footer, Content } = Layout;

import "./styles.css";

export const MainLayout = () => {
	return (
		<Layout className="main-layout">
			<Header className="main-layout__block">
				<Menu />
			</Header>
			<Content className="main-layout__block">
				<Outlet />
			</Content>
			<Footer className="main-layout__block">Footer</Footer>
		</Layout>
	);
};
