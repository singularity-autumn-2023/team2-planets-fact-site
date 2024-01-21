<script>
	export let incredibleData;
	let objectMenu = {
		count: 3,
		data: [
			{ id: 'jupiter', name: 'Jupiter' },
			{ id: 'mars', name: 'Mars' },
			{ id: 'mercury', name: 'Mercury' },
			{ id: 'neptune', name: 'Neptune' },
			{ id: 'uranus', name: 'Uranus' },
			{ id: 'saturn', name: 'Saturn' },
			 { id: 'venus', name: 'Venus' },
			 { id: 'earth', name: 'Earth' }
		],
		id: 'mars',
		name: 'Mars',
		rotation: 88992000,
		revolution: 59329912320
	};
	console.log("incredibleData");
	console.log(incredibleData);

</script>
{#await incredibleData.superPlanets}
<p>...waiting</p>
{:then rot}
<p>{rot}</p>
{:catch error}
<p style="color: red">{error.message}</p>
{/await} hours

<header class="header">
	<div class="logo">
		<a href="index.html">The Planets<span></span></a>
	</div>
	<input type="checkbox" id="menu-toggle" />
	<label for="menu-toggle" class="menu-icon">&#9776;</label>
	<ul class="menu">
		{#each objectMenu.data as planet}
			<a href="/planet/{planet.id}/{1}">{planet.name}</a>
		{/each}
	</ul>
</header>
