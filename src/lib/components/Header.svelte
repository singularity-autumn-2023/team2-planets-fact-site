<script>
    export let incredibleData;
    let objectMenu = {
        count: 3,
        data: [
            { id: 'jupiter', name: 'JUPITER' },
            { id: 'mars', name: 'MARS' },
            { id: 'mercury', name: 'MERCURY' },
            { id: 'neptune', name: 'NEPTUNE' },
            { id: 'uranus', name: 'URANUS' },
            { id: 'saturn', name: 'SATURN' },
             { id: 'venus', name: 'VENUS' },
             { id: 'earth', name: 'EARTH' }
        ],
        id: 'mars',
        name: 'Mars',
        rotation: 88992000,
        revolution: 59329912320
    };
    console.log("incredibleData");
    console.log(incredibleData);

</script>
<!-- {#await incredibleData.superPlanets}
<p>...waiting</p>
{:then rot}
<p>{rot}</p>
{:catch error}
<p style="color: red">{error.message}</p>
{/await} hours -->

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