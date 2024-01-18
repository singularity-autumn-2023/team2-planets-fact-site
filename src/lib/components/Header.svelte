<script>
console.log('test: ' + 2*6);
let objectMenu = {
  count: 3,
  data: [
    { id: 'jupiter', name: 'Jupiter' },
    { id: 'mars', name: 'Mars' },
    { id: 'mercury', name: 'Mercury' }
  ],
  id: 'mars',
  name: 'Mars',
  rotation: 88992000,
  revolution: 59329912320,
  };

</script>
			<header class="header">
		  <div class="logo">
			<a href="index.html">The Planets<span></span></a>
		  </div>
		  <input type="checkbox" id="menu-toggle">
		  <label for="menu-toggle" class="menu-icon">&#9776;</label>
		  <ul class="menu">
			{#each objectMenu.data as planet}
			<a href="/planet/{planet.id}/{planet.id}">{planet.name}</a>
		{/each}
		</ul>
</header>