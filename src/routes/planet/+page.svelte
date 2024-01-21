<script lang="ts">
	export let data;
    let superData = {};
    let superPlanets1 = data.superPlanets.then(result => {
        superData.id = result.id;
        superData.name = result.name;
        superData.overview = result.overview;
        return (result);
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
    };

</script>

<div class="wrapper">
    <div class="planet-grid">
        <section class="planet-picture">
            <picture>
                <img src="planets/mercury.svg" alt="">
            </picture> 
        </section>
        
        <section class="planet-description">
            <h2 class="planet-description__name">Mercury</h2>
            <p class="planet-description__description">
                {superData.name}
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