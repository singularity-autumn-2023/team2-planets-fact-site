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

export const load: LayoutServerLoad = async () => {
	try {
		const response = await fetch(`http://localhost:8081/api/v1/planets/`);

		// NOTE: always do the check !!!!
		if (!response.ok) {
			await Promise.reject(new Error(`${response.status} - ${response.statusText}`));
		}

		const planets: PlanetsResponse = await response.json();

		return {
			planets
		};
	} catch (err) {
		if (err instanceof Error) {
			error(400, err.message);
		}
		error(404, 'Not found!');
	}
};
