<script lang="ts">
	export let data;
    interface SuperData {
        id: string;
        name: string;
        overview: {};
        revolution: number;
    }

    let superData: SuperData = { id: "", name: "", overview: {}, revolution: 0 };

    data.superPlanets.then(result => {
        superData.id = result.id;
        superData.name = result.name;
        superData.overview = result.overview;
        superData.revolution = result.revolution;
    });

    let iconMappings = {
        "mars": "/planets/mars.svg",
        "mercury": "/planets/mercury.svg",
        "venus": "/planets/venus.svg",
        "earth": "/planets/earth.svg",
        "jupiter": "/planets/jupiter.svg",
        "saturn": "/planets/saturn.svg",
        "uranus": "/planets/uranus.svg",
        "neptune": "/planets/neptune.svg",
    };

    let iconName = superData.name as keyof typeof iconMappings;
</script>

<div class="wrapper">
    <div class="planet-grid">
        <section class="planet-picture">
            {#if superData.id in iconMappings}
            <picture>
                <img src={iconMappings[superData.id]} alt={superData.id} />
            </picture>
            {:else}
                <p>Icon not found for {superData.id}</p>
            {/if}
        </section>
        
        <section class="planet-description">
            <h2 class="planet-description__name">
                {#await superData.name then planet_name}
                    {planet_name}
                {/await}
            </h2>

            <p class="planet-description__description">
                {#await superData.overview["content"] then uraaaaaaaa}
                    {uraaaaaaaa}
                {/await}
            </p>
    
            <p class="planet-description__source">
                Source :
                {#if superData.id in iconMappings}
                    <a href="https://en.wikipedia.org/wiki/{superData.name}" class="planet-description__source_span">Wikipedia</a>
                {:else}
                    <a href="https://en.wikipedia.org/wiki/Solar_System" class="planet-description__source_span">Wikipedia</a>
                {/if}
            </p>
        </section>
    
        <section class="planet-buttons">
            <button>
                Overview
            </button>
            
            <button>
                Internal Structure
            </button>
            
            <button>
                Surface Geology
            </button>
        </section>
    </div>  
</div> 

<!-- JUST IN CASE -->
<!-- <script lang="ts">
    import { page } from '$app/stores';
	const pager = $page;

	export let data;
    interface SuperData {
        id: string;
        name: string;
        overview: {};
        revolution: number;
    }

    let superData: SuperData = { id: "", name: "", overview: {}, revolution: 0 };

    data.superPlanets.then(result => {
        superData.id = result.id;
        superData.name = result.name;
        superData.overview = result.overview;
        superData.revolution = result.revolution;
        console.log('')
        console.log(result);
    });


    const iconMappings = {
        "mars": "/planets/mars.svg",
        "mercury": "/planets/mercury.svg",
        "venus": "/planets/venus.svg",
        "earth": "/planets/earth.svg",
        "jupiter": "/planets/jupiter.svg",
        "saturn": "/planets/saturn.svg",
        "uranus": "/planets/uranus.svg",
        "neptune": "/planets/neptune.svg",
    }
</script>

<div class="wrapper">
	<div class="planet-grid">
		<section class="planet-picture">
			<picture>
				<img src="planets/mercury.svg" alt="" />
			</picture>
		</section>

		<section class="planet-description">
			<h2 class="planet-description__name">Mercury</h2>

			<p class="planet-description__description">
				{#if pager.params['submenu_id'] == '1'}
					{#await superData.overview['content'] then planet_overview}
						{planet_overview}
					{/await}
				{:else if pager.params['submenu_id'] == '2'}
					{#await superData.structure['content'] then planet_structure}
						{planet_structure}
					{/await}
				{:else if pager.params['submenu_id'] == '3'}
					{#await superData.geology['content'] then planet_geology}
						{planet_geology}
					{/await}
				{/if}
			</p>

			<p class="planet-description__source">
				Source : <span class="planet-description__source_span">Wikipedia</span>
			</p>
		</section>

		<section class="planet-buttons">
			<form action="http://localhost:5173/planet/{superData.id}/1" method="get">
				<button class="button"> Overview </button>
			</form>

			<form action="http://localhost:5173/planet/{superData.id}/2" method="get">
				<button class="button"> Internal Structure </button>
			</form>

			<form action="http://localhost:5173/planet/{superData.id}/3" method="get">
				<button class="button"> Surface Geology </button>
			</form>
		</section>
	</div>
</div> -->