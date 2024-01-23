<script lang="ts">
    export let links: Array<{
        id: string;
        name: string;
    }>;
    
    console.log("links", links);
</script>

<header class="header">
    <div class="logo">
        <a href="index.html">The Planets</a>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
        {#each links as planet}
            <a href="/{planet.id}">{planet.name}</a>
        {/each}
    </ul>
</header>