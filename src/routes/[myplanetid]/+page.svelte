<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import ExternalIcon from '$lib/components/ExternalIcon.svelte';
    import Footer from '$lib/components/Footer.svelte';
    export let data;

    enum TabState {
        Overview = 'overview',
        Structure = 'structure',
        Geology = 'geology',
    }

    $: images = {
      "overview": `/planets/${data.planetInfo.id}.svg`,
      "structure": `/internal_structure/planet-${data.planetInfo.id}-internal.svg`,
      "geology": `/surface_geology/geology-${data.planetInfo.id}.svg`
    }

    let activeTab: TabState = TabState.Overview;

    $: mainImage = images[activeTab];
</script>

<main class="main">
	<div class="wrapper">
        <div class="planet-grid">
            <section class="planet-picture">
                <picture>
                    <img src={mainImage} alt={data.planetInfo.name} />
                </picture>
                
            </section>
            
            <section class="planet-description">
                <h2 class="planet-description__name">
                    {data.planetInfo.name}
                </h2>
    
                <p class="planet-description__description">
                    {data.planetInfo[activeTab].content}
                </p>
        
                <p class="planet-description__source">
                    Source: &nbsp;
                    <a href={data.planetInfo[activeTab].source}>
                        Wikipedia &nbsp;
                        <ExternalIcon />
                      </a>
                </p>
            </section>
        
            <section class="planet-buttons">
                {#each Object.values(TabState) as tab, idx}
                    <Button active={activeTab === tab} on:click={() => (activeTab = tab)}>
                        <span>0{idx + 1}</span>
                        &nbsp;{tab.toUpperCase()}
                    </Button>
                {/each}
            </section>
        </div>  
    </div>
</main> 

<Footer statistics={data.planetInfo} />