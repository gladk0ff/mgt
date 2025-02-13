import reactLogo from "src/assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "slices/counterSlice";
import { RootState } from "src/store";

export const CountPage = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<main>
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => dispatch(increment())}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</main>
	);
};
