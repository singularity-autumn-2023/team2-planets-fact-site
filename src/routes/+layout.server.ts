// @ts-nocheck
/** @type {import('./$types').LayoutServerLoad} */
import { error } from '@sveltejs/kit';

export async function load() {
    const fetchData = async () => {
		const responseAll = await fetch(`http://localhost:8081/api/v1/planets/`);
		const dataAll = await responseAll.json();

		const planetsData = { ...dataAll };
		const response = await fetch(`http://localhost:8081/api/v1/planets/${planetsData.data[0].id}`);

		const data = await response.json();
		const planetsAllData = { ...dataAll, ...data };		

		console.log(planetsAllData);
		
		if (planetsAllData) {
			return planetsAllData;
		}

		error(404, 'Not found');
	};
	
	return {
		superPlanets: fetchData()
	};
}