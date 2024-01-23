// @ts-nocheck
/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const fetchData = async () => {
    const responseAll = await fetch(`http://localhost:8081/api/v1/planets/`);
    const response = await fetch(`http://localhost:8081/api/v1/planets/${params.myplanetid}`);
    console.log('dataTESTERAll');
    const dataAll = await responseAll.json();
    const data = await response.json();
    //console.log(data.planets.data);
    console.log('END dataTESTERAll');

    const newData = { ...data, ...dataAll};
    
    if (newData) {
      return newData;
    }

    error(404, 'Not found');
  }

  return {
    superPlanets: fetchData(),
  }
  
}