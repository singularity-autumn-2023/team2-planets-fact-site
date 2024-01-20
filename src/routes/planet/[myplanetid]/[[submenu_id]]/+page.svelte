<script lang="ts">
    // import Mercury from '$static/planets/mercury.svg';
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
    
    // let superData = {};
    // let superPlanets1 = data.superPlanets.then(result => {
    //     superData.id = result.id;
    //     superData.name = result.name;

    //     return (result);
    // });    

    console.log('superData');
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(superData.overview);
    console.log('page svelte hahahahahahahah');
    console.log(superData.name);
    console.log(superData);
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
    console.log(superData.overview);

    const iconMappings = {
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

<article>
	<h1>{superData.name}</h1>
    <h1>{typeof superData.name}</h1>
    <p>id: {superData.id}</p>
</article>

<div class="wrapper">
    <div class="planet-grid">
        <picture>
            <img src="/planets/mercury.svg" alt="fdsfsdfsfsdfs">
        </picture> 
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
            <h2 class="planet-description__name">{#await superData.name then hahahaha}{hahahaha}{/await}</h2>
            {superData.revolution}
            <p class="planet-description__description">
                {#await superData.overview["content"] then uraaaaaaaa}{uraaaaaaaa}{/await}
            </p>
    
            <p class="planet-description__source">
                Source : <span class="planet-description__source_span">Wikipedia</span>
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