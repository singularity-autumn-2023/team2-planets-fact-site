<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/default.css';
	import '$lib/styles/header.css';
	import '$lib/styles/main.css';
	import '$lib/styles/footer.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
