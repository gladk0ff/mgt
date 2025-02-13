import { useSelector, useDispatch } from "react-redux";
import { increment } from "slices/counterSlice";
import { RootState } from "src/store";

export const CountPage = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div className="card">
				<button onClick={() => dispatch(increment())}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
};
