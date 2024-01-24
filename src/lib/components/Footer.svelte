<script lang="ts">
	export let statistics: {
		geology: {
			content: 'string';
			source: 'string';
		};
		id: 'string';
		name: 'string';
		overview: {
			content: 'string';
			source: 'string';
		};
		radius: number;
		revolution: number;
		rotation: number;
		structure: {
			content: 'string';
			source: 'string';
		};
		temperature: number;
	};

	$: rotationTime = statistics.rotation / 1000 / 60 / 60 / 24;
	$: revolutionTime = statistics.revolution / 1000 / 60 / 60 / 24;
	$: radius = statistics.radius / 1000;
	$: temperature = statistics.temperature;
</script>

<footer class="footer">
	<div class="wrapper">
		<section class="footer__container">
			<div class="footer__container__list">
				<section class="footer__container__list__characteristic">
					<div class="footer__container__list__characteristic__item">ROTATION TIME</div>
					<div class="footer__container__list__characteristic__content">
						{#if rotationTime >= 0.99}
							{rotationTime.toFixed(2)} DAYS
						{:else}
							{(rotationTime * 24).toFixed(2)} HOURS
						{/if}
					</div>
				</section>

				<section class="footer__container__list__characteristic">
					<div class="footer__container__list__characteristic__item">REVOLUTION TIME</div>
					<div class="footer__container__list__characteristic__content">
						{#if revolutionTime <= 366}
							{revolutionTime.toFixed(2)} DAYS
						{:else}
							{(revolutionTime / 365.25).toFixed(2)} YEARS
						{/if}
					</div>
				</section>

				<section class="footer__container__list__characteristic">
					<div class="footer__container__list__characteristic__item">Radius</div>
					<div class="footer__container__list__characteristic__content">
						{radius} KM
					</div>
				</section>

				<section class="footer__container__list__characteristic">
					<div class="footer__container__list__characteristic__item">AVERAGE TEMP.</div>
					<div class="footer__container__list__characteristic__content">
						{temperature}°C
					</div>
				</section>
			</div>
		</section>
	</div>
</footer>
