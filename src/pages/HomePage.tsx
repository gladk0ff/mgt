import { Flex, Typography } from "antd";

export const HomePage = () => {
	return (
		<Flex vertical>
			<Typography.Title>Технологии:</Typography.Title>
			<ol>
				<li>
					<a href="https://vitejs.dev/" target="_blank">
						<Typography.Link>Vite</Typography.Link>
					</a>
				</li>
				<li>
					<a href="https://react.dev/" target="_blank">
						<Typography.Link>React</Typography.Link>
					</a>
				</li>
				<li>
					<a href="https://redux-toolkit.js.org/" target="_blank">
						<Typography.Link>Redux-toolkit</Typography.Link>
					</a>
				</li>
				<li>
					<a href="https://reactrouter.com/" target="_blank">
						<Typography.Link>React-router</Typography.Link>
					</a>
				</li>
				<li>
					<a href="https://ant.design/" target="_blank">
						<Typography.Link>Ant Design </Typography.Link>
					</a>
				</li>
			</ol>
		</Flex>
	);
};
