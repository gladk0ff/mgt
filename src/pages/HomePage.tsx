import { Flex, Typography } from "antd";

export const HomePage = () => {
	return (
		<Flex vertical>
			<Typography.Title>Технологии:</Typography.Title>
			<ol>
				<li>
					<Typography.Link href="https://vitejs.dev/" target="_blank">
						Vite
					</Typography.Link>
				</li>
				<li>
					<Typography.Link href="https://react.dev/" target="_blank">
						React
					</Typography.Link>
				</li>
				<li>
					<Typography.Link href="https://redux-toolkit.js.org/" target="_blank">
						Redux-toolkit
					</Typography.Link>
				</li>
				<li>
					<Typography.Link href="https://reactrouter.com/" target="_blank">
						React-router
					</Typography.Link>
				</li>
				<li>
					<Typography.Link href="https://ant.design/" target="_blank">
						Ant Design
					</Typography.Link>
				</li>
			</ol>
		</Flex>
	);
};
