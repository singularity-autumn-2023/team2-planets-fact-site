
// @ts-nocheck

/** @type {import('./$types').LayoutServerLoad} */
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

type PlanetItem = {
	id: string;
	name: string;
};

type PlanetsResponse = {
	count: number;
	data: PlanetItem[];
};

export const load: LayoutServerLoad = async (params) => {
	try {
		const responseAll = await fetch(`http://localhost:8081/api/v1/planets/`);

		const responseFull = await fetch(`http://localhost:8081/api/v1/planets/${params.myplanetid}`);

		//const dataFull = await responseFull.json();

		// NOTE: always do the check !!!!
		if (!responseAll.ok) {
			await Promise.reject(new Error(`${responseAll.status} - ${responseAll.statusText}`));
		}

		
		const planets: PlanetsResponse = await responseAll.json();

		return {
			planets,
			ter: 'fgr' // dataFull
		};
	} catch (err) {
		if (err instanceof Error) {
			error(400, err.message);
		}
		error(404, 'Not found!');
	}
};
