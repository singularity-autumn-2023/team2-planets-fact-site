<script>
	export let incredibleData;

	 import { page } from '$app/stores';
	 const pager = $page;

    console.log("FOOTER-incredibleData");
    console.log(page);

	 let currentDate = new Date();
	
	 let rotationTimestamp = new Date(incredibleData.planets.data.rotation);
	let h = rotationTimestamp.getHours();
	let mm = rotationTimestamp.getMinutes();
	let outputRotation = `${h}.${mm} HOURS`;
	
	let revolutionDate = new Date(incredibleData.planets.data.revolution);
 let y = revolutionDate.getFullYear();
	let month = revolutionDate.getFullYear();
	let yearsDiff = currentDate.getFullYear() - revolutionDate.getFullYear();
	let monthsDiff = currentDate.getMonth() - revolutionDate.getMonth();
	
	 if (monthsDiff < 0) {
		yearsDiff = yearsDiff - 1;
		monthsDiff = monthsDiff + 12;
	 }
	let outputREVOLUTION = `${yearsDiff}.${monthsDiff} years`;
	
	 let radiusInMeters = incredibleData.planets.data.radius;
	 let outputRadiusInKilometers = radiusInMeters / 1000 + ' km';
	
	 let temperatureInFahrenheit = incredibleData.planets.data.temperature;
	 let outputTemperatureInCelsius = Math.round(((temperatureInFahrenheit - 32) * 5) / 9) + '°c';

	console.log(outputREVOLUTION);
</script>

<footer class="footer">
		<div class="wrapper">
			<section class="footer__container">
				 
				<div class="footer__container__list">
					<section class="footer__container__list__characteristic">
						<div class="footer__container__list__characteristic__item">ROTATION TIME</div>
						<div class="footer__container__list__characteristic__content">{outputRotation}</div>
					</section>

					<section class="footer__container__list__characteristic">
						<div class="footer__container__list__characteristic__item">REVOLUTION TIME</div>
						<div class="footer__container__list__characteristic__content">{outputREVOLUTION}</div>
					</section>

					<section class="footer__container__list__characteristic">
						<div class="footer__container__list__characteristic__item">Radius</div>
						<div class="footer__container__list__characteristic__content">
							{outputRadiusInKilometers}
						</div>
					</section>

					<section class="footer__container__list__characteristic">
						<div class="footer__container__list__characteristic__item">AVERAGE TEMP.</div>
						<div class="footer__container__list__characteristic__content">
							{outputTemperatureInCelsius}
						</div>
					</section>
				</div>
			</section>
		</div>
</footer>
