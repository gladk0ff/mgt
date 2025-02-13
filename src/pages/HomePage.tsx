import { Flex } from "antd";
import reactLogo from "src/assets/react.svg";

export const HomePage = () => {
	return (
		<Flex>
			<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
			<h1>Vite + React</h1>
		</Flex>
	);
};
