/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type PlanetInfo = {
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

export const load: PageServerLoad = async ({ params }) => {
	try {
		const response = await fetch(`http://localhost:8081/api/v1/planets/${params.myplanetid}`);

		if (!response.ok) {
			await Promise.reject(new Error(`${response.status} - ${response.statusText}`));
		}

		const planetInfo: PlanetInfo = await response.json();

		return {
			planetInfo
		};
	} catch (err) {
		if (err instanceof Error) {
			error(400, err.message);
		}
		error(404, 'Not found!');
	}
};
