import { Button, Flex, InputNumber, Typography } from "antd";
import { useState } from "react";

export const CountPage = () => {
	const [count, setCount] = useState(0);
	const [inputValue, setInputvalue] = useState(0);

	return (
		<Flex vertical gap={32}>
			<Flex gap={16}>
				<Button onClick={() => setCount((count) => count + inputValue)}>Увеличить на: {inputValue}</Button>
				<InputNumber type="nunmber" value={inputValue} onChange={(value) => setInputvalue(value || 0)} />
			</Flex>
			<Typography.Title level={1}>{count}</Typography.Title>
			<Flex gap={16}>
				<Button onClick={() => setCount((c) => ++c)}>+1</Button>
				<Button onClick={() => setCount((c) => --c)}>-1</Button>
			</Flex>
		</Flex>
	);
};
