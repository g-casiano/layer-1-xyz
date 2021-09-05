import { createSignal, createResource } from "solid-js";

/** */
export default function SolidCounter({ children }) {
	// const fetchUser = async (id) =>
	// 	(await fetch(`https://swapi.dev/api/people/${id}/`)).json();

	const fetchUser = async (id) =>
		(await fetch("http://localhost:8000/hello/world")).json();

	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);
	const [userId, setUserId] = createSignal();
	const [user] = createResource(userId, fetchUser);

	console.log("user ", user());

	const setUserIdFn = () => {
		setUserId(2);
	};

	//create a function to add two integers
	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="children">{children}</div>
			<div>
				<button onClick={setUserIdFn}>set user id </button>
			</div>
			<div>
				<span>{user.loading && "Loading..."}</span>
				<div>
					<pre>{JSON.stringify(user(), null, 2)}</pre>
				</div>
			</div>
		</>
	);
}
