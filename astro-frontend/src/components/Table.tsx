import {createSignal, createResource} from 'solid-js';

/** */
export default function SolidTable({children}) {
	// const fetchUser = async (id) =>
	// 	(await fetch(`https://swapi.dev/api/people/${id}/`)).json();

	// const fetchUser = async (id) => (await fetch('http://localhost:8000/hello/world')).json();

	// const [count, setCount] = createSignal(0);
	// const add = () => setCount(count() + 1);
	// const subtract = () => setCount(count() - 1);
	// const [userId, setUserId] = createSignal();
	// const [user] = createResource(userId, fetchUser);

	// console.log('user ', user());

	// const setUserIdFn = () => {
	// 	setUserId(2);
	// };

	//create a function to add two integers

	// <th>Eth</th>
	// <th>Eth 2.0</th>
	// <th>Sol</th>
	// <th>Algo</th>
	// <th>Avax</th>
	// <th>elrond</th>
	// <th>Near</th>
	// <th>Radix</th>
	// <th>Dot</th>
	// <th>Ada</th>
	return (
		<div class="comp-table">
			<table class="nes-table is-bordered is-centered">
				<thead>
					<tr>
						<th></th>
						<th>Tps</th>
						<th>Tps limit</th>
						<th>Finality</th>
						<th>Nodes</th>
						<th>Avg node ram</th>
						<th>Avg node hdd</th>
						<th>Composability</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Eth</td>
						<td>?</td>
					</tr>
					<tr>
						<td>Sol</td>
						<td>?</td>
					</tr>
					<tr>
						<td>Ada</td>
						<td>?</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
