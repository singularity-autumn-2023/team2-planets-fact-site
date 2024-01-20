<!-- Footer.svelte -->

<script>

  import { page } from '$app/stores';

  const pager = $page;
  console.log(pager);
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  console.log(pager.data.superPlanets);

  // let rotation = pager.data.superPlanets.rotation;
  // console.log(rotation);

  let headerMenu = pager.data.superPlanets.then((result) => {
      console.log('promiseForHeaderStoresResult--');
      console.log(result);

      return result;
  });
</script>


<footer class="footer">
    <div class="wrapper">
    <section class="footer__container">
    <!--#footer-->
      <div class="footer__container__list">
        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">ROTATION TIME</div>
          <div class="footer__container__list__characteristic__content">{pager.data.superPlanets.rotation} 
            {#await headerMenu}
              <p>...waiting</p>
            {:then rot}
              <p>{rot}</p>
            {:catch error}
              <p style="color: red">{error.message}</p>
            {/await} hours
          </div>
        </section>

        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">REVOLUTION TIME</div>
          <div class="footer__container__list__characteristic__content">{pager.data.superPlanets.revolution} years</div>
        </section>

        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">Radius</div>
          <div class="footer__container__list__characteristic__content">{pager.data.superPlanets.radius} km</div>
        </section>

        <section class="footer__container__list__characteristic">
          <div class="footer__container__list__characteristic__item">AVERAGE TEMP.</div>
          <div class="footer__container__list__characteristic__content">{pager.data.superPlanets.temperature}c</div>
        </section>
      </div>
    </section>
    </div>
</footer>	  