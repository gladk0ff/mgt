import { Button, Flex, InputNumber, Typography } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "slices/counterSlice";
import { RootState } from "src/store";

export const CountPage = () => {
	const [count, setCount] = useState(0);
	const { value } = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	return (
		<Flex vertical gap={32}>
			<Flex gap={16}>
				<Button onClick={() => dispatch(incrementByAmount(count))}>Увеличить на: {count}</Button>
				<InputNumber type="nunmber" value={count} onChange={(value) => setCount(value || 0)} />
			</Flex>
			<Typography.Title level={1}>{value}</Typography.Title>
			<Flex gap={16}>
				<Button onClick={() => dispatch(increment())}>+1</Button>
				<Button onClick={() => dispatch(decrement())}>-1</Button>
			</Flex>
		</Flex>
	);
};
