<script lang="ts">
    import type { LayoutData } from './$types';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/styles/default.css';
    import '$lib/styles/header.css';
    import '$lib/styles/main.css';
    import '$lib/styles/footer.css';
    import 'reset-css';
    import '@fontsource-variable/antonio';
    import '@fontsource/spartan';

    export let data;
	// NOTE: Here you data, use it.
    	console.log('LayoutDataData');

	console.log( data);


    
</script>

<Header incredibleData={data} />

<main class="main">
	<slot />
</main>

<Footer incredibleData={data} />
