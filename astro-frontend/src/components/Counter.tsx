import { createSignal } from "solid-js";

/** */
export default function SolidCounter({ children }) {
	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);

	// create a function to add two integers
	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="children">{children}</div>
		</>
	);
}
