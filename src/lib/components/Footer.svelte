<!-- Footer.svelte -->

<script>
	console.log('Footer.svelte: ' + 24 * 6);

import { page } from '$app/stores';

	const pager = $page;
	console.log(pager.data);

	let footerData = pager.data.product.then((result) => {
		console.log('promiseStoresResult--');
		//console.log(result);

		return result;
	});
	console.log(footerData);

</script>

<footer class="footer">
    <div class="wrapper">
    <section class="footer__container">
    <!--#footer-->
      <div class="footer__container__list">
        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">ROTATION TIME</div>
          <div class="footer__container__list__characteristic__content">17.2 hours</div>
        </section>

        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">REVOLUTION TIME</div>
          <div class="footer__container__list__characteristic__content">11.86 years</div>
        </section>

        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">Radius</div>
          <div class="footer__container__list__characteristic__content">69,911 km</div>
        </section>

        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">AVERAGE TEMP.</div>
          <div class="footer__container__list__characteristic__content">-108°c</div>
        </section>
      </div>
    </section>
    </div>
</footer>	  
